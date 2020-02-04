import React from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'
import Header from '../components/Header'

const MyProfile = props => {
    return (
        <View>
            <Header header='My Profile' />
            <View style={styles.imageContainer}>
                <Image
                    style={styles.profileImage}
                    source={{
                        uri:
                            'https://facebook.github.io/react-native/img/tiny_logo.png'
                    }}
                />
                <Text>Ravish Bhargava</Text>
            </View>

            <View
                style={styles.optionContainer}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start'
                    }}
                >
                    <Image
                        style={styles.leftRightImage}
                        source={{
                            uri:
                                'https://facebook.github.io/react-native/img/tiny_logo.png'
                        }}
                    />
                    <Text>Account Details</Text>
                </View>
                <View>
                    <Image
                        style={styles.leftRightImage}
                        source={{
                            uri:
                                'https://facebook.github.io/react-native/img/tiny_logo.png'
                        }}
                    />
                </View>
            </View>


            <View
                style={styles.optionContainer}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start'
                    }}
                >
                    <Image
                        style={styles.leftRightImage}
                        source={{
                            uri:
                                'https://facebook.github.io/react-native/img/tiny_logo.png'
                        }}
                    />
                    <Text>Settings</Text>
                </View>
                <View>
                    <Image
                        style={styles.leftRightImage}
                        source={{
                            uri:
                                'https://facebook.github.io/react-native/img/tiny_logo.png'
                        }}
                    />
                </View>
            </View>



            <View
                style={styles.optionContainer}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start'
                    }}
                >
                    <Image
                        style={styles.leftRightImage}
                        source={{
                            uri:
                                'https://facebook.github.io/react-native/img/tiny_logo.png'
                        }}
                    />
                    <Text>Contact Us</Text>
                </View>
                <View>
                    <Image
                        style={styles.leftRightImage}
                        source={{
                            uri:
                                'https://facebook.github.io/react-native/img/tiny_logo.png'
                        }}
                    />
                </View>
            </View>



            <View style={styles.button}>
                <Text>Logout</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        maxWidth: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20
    },
    optionContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:10
    },
    leftRightImage: {
        width: 20,
        height: 20,
        marginHorizontal: 15
    },
    button: {
        margin: 20,
        borderColor: 'grey',
        borderWidth: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        borderRadius: 5
    }
})

export default MyProfile
