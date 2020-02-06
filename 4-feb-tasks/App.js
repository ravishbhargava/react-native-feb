import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyProfile from './screen/MyProfile'
import ChatList from './screen/ChatList';
import Chat from './screen/Chat';

export default function App() {
    return (
        <View style={styles.container}>
            <MyProfile />
          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        
    }
})
