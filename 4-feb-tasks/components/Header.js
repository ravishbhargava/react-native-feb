import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Header = props => {
    return (
        <View style={styles.headerContainer}>
            <Image
                style={{ width: 30, height: 30, flex:0.1 }}
                source={{
                    uri:
                        'https://facebook.github.io/react-native/img/tiny_logo.png'
                }}
            />
            <Text style={{flex:0.9, textAlign:'center'}}>{props.header}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
       
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        marginTop: 20,
        borderBottomColor:'grey',
        borderBottomWidth:1
    }
})

export default Header
