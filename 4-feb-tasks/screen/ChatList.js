import React from 'react'
import { View, Text, FlatList, Image, StyleSheet, TextInput } from 'react-native'
import Header2 from '../components/Header2'

const DATA = [
    {
        id: '1',
        name: 'Ravish'
    },
    {
        id: '2',
        name: 'Varun '
    },
    {
        id: '3',
        name: 'Rawat'
    },
    {
        id: '4',
        name: 'Hemant'
    },
    {
        id: '5',
        name: 'Shivam '
    },
    {
        id: '6',
        name: 'Nitin'
    }
]

function Item({ name }) {
    return (
        <View
            style={{
                marginLeft: 10,
                alignItems: 'center',
                height: 50
            }}
        >
            <Image
                style={styles.horizontalImage}
                source={{
                    uri:
                        'https://facebook.github.io/react-native/img/tiny_logo.png'
                }}
            />
            <Text style={{ fontSize: 10 }}>{name}</Text>
        </View>
    )
}

function Item2({ name }) {
    return (
        <View style={{ marginBottom: 10, flexDirection: 'row' }}>
            <Image
                style={styles.horizontalImage}
                source={{
                    uri:
                        'https://facebook.github.io/react-native/img/tiny_logo.png'
                }}
            />
            <View style={{ justifyContent: 'center' }}>
                <Text style={{ fontSize: 16 }}>{name}</Text>
                <Text style={{ fontSize: 10 }}>
                    Hi wassup?? there you loser
                </Text>
            </View>
        </View>
    )
}
const ChatList = props => {
    return (
        <View>
            <Header2 header='Home' />
            
                <View style={styles.search}>
                    <Image
                        style={styles.leftRightImage}
                        source={{
                            uri:
                                'https://facebook.github.io/react-native/img/tiny_logo.png'
                        }}
                    />
                    <TextInput 
                    style={{fontSize:14}}
                    placeholder='Search for friends'/>
                </View>

                <FlatList
                    horizontal
                    data={DATA}
                    renderItem={({ item }) => <Item name={item.name} />}
                    keyExtractor={item => item.id}
                />

                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item2 name={item.name} />}
                    keyExtractor={item => item.id}
                />
            </View>
     
    )
}

const styles = StyleSheet.create({
    leftRightImage: {
        width: 20,
        height: 20,
        marginHorizontal: 5
    },
    horizontalImage: {
        width: 50,
        height: 50,
        marginHorizontal: 5,
        borderRadius: 25
    },
    search: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'grey',
        borderColor: 'grey',
        margin: 10,
        alignItems: 'center',
        padding: 10
    }
})

export default ChatList
