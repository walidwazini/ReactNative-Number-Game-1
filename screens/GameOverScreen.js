import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'



const GameOverScreen = (props) => {
    return (
        <View style={styles.screen} >
            <Text>Game over</Text>
            <Text>Number of Rounds : {props.roundsNumber} </Text>
            <Text>Number was : {props.userNumber2} </Text>
            <Button title='NEW GAME' onPress={props.onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameOverScreen
