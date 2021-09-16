import React from 'react'
import { View, StyleSheet, Button, Text, } from 'react-native'

const Card = (props) => {
    return (
        // Distibute all the key value pairs of card into new object
        //  Child akan override styling yg diorg dapat daripada 
        // parent style dekat component file
        <View style={{...styles.card, ...props.style}} >
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        // width: 300,
        // maxWidth: '80%',
        // alignItems: 'center',
        shadowColor: 'purple',
        shadowOffset: { width: 0, height: 2, },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        padding: 18,
        borderRadius: 14
    }
})

export default Card
