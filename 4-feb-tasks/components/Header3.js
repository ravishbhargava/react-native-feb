import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Header3 = props => {
    return (
        <View style={styles.headerContainer}>
            <View style={{ flexDirection: 'row' , flex:0.2, alignItems:'center'}}>
                <Image
                    style={{ width: 30, height: 30 }}
                    source={{
                        uri:
                            'https://facebook.github.io/react-native/img/tiny_logo.png'
                    }}
                />
                <Text>Home</Text>
            </View>
            <Text style={{  textAlign: 'center' , flex:0.7 }}>{props.header}</Text>
            <Image
                style={{ width: 30, height: 30 , flex:0.1 }}
                source={{
                    uri:
                        'https://facebook.github.io/react-native/img/tiny_logo.png'
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    }
})

export default Header3
