import React, { useState, useRef, useEffect } from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const randomNum = Math.floor(Math.random() * (max - min)) + min
    if (randomNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return randomNum
    }

}

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(
        1, 100, props.userChoice)
    )
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    useEffect(() => {
        if (currentGuess === props.userChoice){
            props.onGameOver(rounds)
        }
    })

    const nextGuessHandler = size => {
        //   CHECK BALEK useChoice kat sini nanti
        if ((size === 'lower' && currentGuess < props.userChoice) ||
            (size === 'greater' && currentGuess > props.userChoice)
        ) {
            Alert.alert('Don\'t lie!', 'Give the right hint.', [{
                text: 'Sorry!', style: 'cancel'
            }])
            return
        }
        if (size === 'lower') {
            // Set the currentGuess value as a new vlaue for currentHigh
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(currRounds => currRounds + 1)
    }

    return (
        <View style={styles.screen} >
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer} >
                <Button title='SMALLER' onPress={nextGuessHandler.bind(this, 'smaller')} />
                <Button title='GREATER' onPress={nextGuessHandler.bind(this, 'greater')} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 1,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: '80%'
    }
})

export default GameScreen
