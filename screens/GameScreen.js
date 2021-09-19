import React, { useState, } from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

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



    return (
        <View style={styles.screen} >
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer} >
                <Button title='SMALLER' onPress={() => {}} />
                <Button title='GREATER' onPress={() => {}} />
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
