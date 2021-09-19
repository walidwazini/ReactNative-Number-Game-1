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
        <View>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default GameScreen
