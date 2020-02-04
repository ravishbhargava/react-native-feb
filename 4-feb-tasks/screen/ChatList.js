import React from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
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
                <Text style={{ textAlign: 'center' }}>Settings</Text>
            </View>

            <FlatList
                horizontal
                data={DATA}
                renderItem={({ item }) => <Item name={item.name} />}
                keyExtractor={item => item.id}
            />

            <View style={{ flexDirection: 'row' }}>
                <Image
                    style={styles.horizontalImage}
                    source={{
                        uri:
                            'https://facebook.github.io/react-native/img/tiny_logo.png'
                    }}
                />
                <View>
                    <Text style={{ fontSize: 16 }}>Name</Text>
                    <Text style={{ fontSize: 10 }}>
                        Hi wassup?? there you loser
                    </Text>
                </View>
            </View>
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
        width: 40,
        height: 40,
        marginHorizontal: 5,
        borderRadius: 20
    },
    search: {
        height: 30,
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
