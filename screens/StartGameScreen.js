import React, { useState } from 'react'
import {
    View, Text, StyleSheet, TouchableWithoutFeedback,
    TextInput, Button, Keyboard
} from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import colors from '../assets/colors'


const StartGameScreen = () => {

    const [enteredValue, setEnteredValue] = useState('')
    const numberInputHandler = (inputText) => {
        // Avoid user to input non-number value ( for Android)
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
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
                        autoCapitalize='none' autoCorrect='false'
                        keyboardType='number-pad' maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonWrapper} >
                        <View>
                            <Button style={styles.button}
                                title='Reset' onPress={() => { }} color={colors.accent} />
                        </View>
                        <View>
                            <Button style={styles.button}
                                title='Confirm' onPress={() => { }} color={colors.primary} />
                        </View>
                    </View>
                </Card>
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
    }

})

export default StartGameScreen
