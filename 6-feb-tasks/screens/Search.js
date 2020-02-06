import React, { Component } from 'react'
import { Text, View, TextInput, Image, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Axios from 'axios'

export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            value: '',
            userData: []
        }
        this.textChangeHandler = this.textChangeHandler.bind(this)
    }

    textChangeHandler(newText) {
        // this.setState({
        //     value: newText
        // })
        this.call(newText)
    }

    call(searchedText) {
        Axios.get('https://api.github.com/users/' + searchedText)
            .then(response => {
                console.log(response)
                this.setState({ userData: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <View style={styles.container}>
                <Header header='Search Github User' />

                <View>
                    <Text>
                        Enter Github user name to fetch the info about the same.
                    </Text>

                    <View style={styles.search}>
                        <TextInput
                            style={{ fontSize: 14 }}
                            placeholder='Github User Name...'
                            onChangeText={this.textChangeHandler}
                            defaultValue={this.state.value}
                        />
                    </View>



                    <View
                        style={{
                            borderEndWidth: 1,
                            borderStartWidth: 1,
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            margin: 10
                        }}
                    >
                        <Text
                            style={{
                                // borderBottomColor: 'grey',
                                borderBottomWidth: 1,
                                fontSize: 16,
                                padding: 10,
                                marginBottom: 10
                            }}
                        >
                             {this.state.userData.name}
                        </Text>

                        <View style={{ flexDirection: 'row', paddingHorizontal:5}}>
                            <Image
                                style={styles.profileImage}
                                source={{
                                    uri:
                                        'https://facebook.github.io/react-native/img/tiny_logo.png'
                                }}
                            />

                            <View style={{ marginHorizontal: 10, width:'60%' }}>
                                <Text style={styles.textStyle}>
                                    id: {this.state.userData.id}
                                </Text>
                                <Text style={styles.textStyle}>
                                    company: {this.state.userData.company}
                                </Text>
                                <Text style={styles.textStyle}>
                                    login: {this.state.userData.login}
                                </Text>
                                <Text style={styles.textStyle}>
                                    location: {this.state.userData.location}
                                </Text>
                                <Text style={styles.textStyle}>
                                    email: {this.state.userData.company}
                                </Text>
                            </View>
                        </View>
                    </View>



                    <Text>name: {this.state.userData.name}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    search: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'grey',
        borderColor: 'grey',
        margin: 20,
        alignItems: 'center',
        padding: 10
    },
    profileImage: {
        width: 120,
        height: 120,
        marginBottom: 20
    },
    textStyle: {
        // width:'100%',
        // borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginBottom: 3
    }
})
