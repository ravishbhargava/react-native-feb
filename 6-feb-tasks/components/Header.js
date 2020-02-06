import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Header = props => {
    return (
        <View style={styles.headerContainer}>
            
            <Text style={{ textAlign:'center', fontSize:20}}>{props.header}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
       
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 20,
        borderBottomColor:'grey',
        borderBottomWidth:1
    }
})

export default Header
