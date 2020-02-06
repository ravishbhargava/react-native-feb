import React from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import Header3 from '../components/Header3'

let sendMessage = `Hi, how are you?`
const Chat = props => {
    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <Header3 header='Ravish' />

            <View style ={{}}>
                <View style={styles.messageContainerRight}>
                    <View style={styles.message}>
                        <Text style={{ fontSize: 14 }}>{sendMessage}</Text>
                    </View>
                    <View style={styles.TriangleShapeRightCSS} />
                    <Image
                        style={{ width: 30, height: 30, borderRadius: 13 }}
                        source={{
                            uri:
                                'https://facebook.github.io/react-native/img/tiny_logo.png'
                        }}
                    />
                </View>

                <View style={styles.messageContainerLeft}>
                    <Image
                        style={{ width: 30, height: 30, borderRadius: 13 }}
                        source={{
                            uri:
                                'https://facebook.github.io/react-native/img/tiny_logo.png'
                        }}
                    />
                    <View style={styles.TriangleShapeLefttCSS} />
                    <View style={styles.message}>
                        <Text style={{ fontSize: 14 }}>I am good </Text>
                    </View>
                </View>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderTopColor: 'grey',
                    borderTopWidth: 1
                }}
            >
                <Image
                    style={{ width: 30, height: 30, flex: 0.1 }}
                    source={{
                        uri:
                            'https://facebook.github.io/react-native/img/tiny_logo.png'
                    }}
                />
                <View style={styles.search}>
                    <Image
                        style={styles.leftRightImage}
                        source={{
                            uri:
                                'https://facebook.github.io/react-native/img/tiny_logo.png'
                        }}
                    />
                    <TextInput
                        style={{ fontSize: 14 }}
                        placeholder='Start typing...'
                    />
                </View>
                <Image
                    style={{ width: 30, height: 30, flex: 0.1 }}
                    source={{
                        uri:
                            'https://facebook.github.io/react-native/img/tiny_logo.png'
                    }}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        height: 40,
        maxHeight: 70,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: 'grey',
        borderColor: 'grey',
        margin: 10,
        alignItems: 'center',
        padding: 10,
        flex: 0.8
    },
    message: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'grey',
        borderColor: 'grey',
        marginHorizontal: 0,
        marginVertical: 10,
        alignItems: 'center',
        padding: 10
    },
    leftRightImage: {
        width: 20,
        height: 20,
        marginHorizontal: 5
    },
    messageContainerLeft: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 10
    },
    messageContainerRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 10
    },
    TriangleShapeRightCSS: {
        left: -6,
        bottom: -10,
        width: 0,
        height: 0,
        borderRadius: 30,
        borderBottomStartRadius: 120,
        // borderLeftWidth: 120,
        borderRightWidth: 20,
        borderBottomWidth: 10,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'grey'
    },
    TriangleShapeLefttCSS: {
        left: 6,
        bottom: -10,
        width: 0,
        height: 0,
        borderRadius: 30,
        borderBottomEndRadius: 60,
        // borderLeftWidth: 120,
        borderLeftWidth: 20,
        borderBottomWidth: 10,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'grey'
    }
})

export default Chat
