import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../assets/colors';

const Header = (props) => {
    return (
        <View style={styles.header} >
            <Text style={styles.headerTitle} >{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 34,
        backgroundColor:'#f7287b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
    }

})

export default Header
