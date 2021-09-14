import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import Card from '../components/Card'


const StartGameScreen = () => {
    return (
        <View style={styles.screen} >
            <Text style={styles.title} >Game Screen</Text>
            <Card style={styles.inputWrapper} >
                <Text>Select a Number</Text>
                <TextInput style={styles.numberInput} />
                <View style={styles.buttonWrapper} >
                    <View>
                        <Button style={styles.button} title='Reset' onPress={() => { }} color='grey' />
                    </View>
                    <View>
                        <Button style={styles.button} title='Confirm' onPress={() => { }} color='#c717fc' />
                    </View>
                </View>
            </Card>
        </View>
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
    button : {
        width: 105,
    }

})

export default StartGameScreen
