import React, { useState } from 'react'
import {
    View, Text, StyleSheet, TouchableWithoutFeedback,
    TextInput, Button, Keyboard, Alert
} from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import colors from '../assets/colors'
import NumberContainer from '../components/NumberContainer'


const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandler = (inputText) => {
        // Avoid user to input non-number value ( for Android)
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }
    const resetInputHandler = () => {
        // Reset the enterered value
        setEnteredValue('')
        setConfirmed(false)
    }
    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredValue)
        // Make sure only positive number are allowed
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert('Invalid input', 'Number has to be between 1 - 99', [{
                text: 'Okay', style: 'destructive', onPress: resetInputHandler
            }])
            return;
        }
        setConfirmed(true)
        setEnteredValue('')
        setSelectedNumber(parseInt(enteredValue))
        Keyboard.dismiss()
    }

    let confirmedOutput
    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer} >
                <Text>Choosen Number : </Text>
                <NumberContainer>
                    {selectedNumber}
                </NumberContainer>
                <Button title='START GAME' onPress={() => props.onStartGame(selectedNumber) } />
            </Card>
        )
    }


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }} >
            <View style={styles.screen} >
                <Text style={styles.title} >Game Screen</Text>
                <Card style={styles.inputWrapper} >
                    <Text>Select a Number</Text>
                    <Input style={styles.input} blurOnSubmit
                        autoCapitalize='none'
                        //autoCorrect='false'
                        keyboardType='number-pad' maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonWrapper} >
                        <View>
                            <Button style={styles.button}
                                title='Reset' onPress={resetInputHandler} color={colors.accent} />
                        </View>
                        <View>
                            <Button style={styles.button}
                                title='Confirm' onPress={confirmInputHandler} color={colors.primary} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        marginVertical: 12
    },
    inputWrapper: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonWrapper: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 105,
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer:{
        marginTop:20,
        alignItems: 'center',
    }

})

export default StartGameScreen
