import React from 'react'
import {
    View,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import styles from '../components/styles'


const Signin = props => {
    let string = `Hello there,
welcome back`;
    return (
        <View style={styles.root}>
            <Text style={styles.heading}>{string}</Text>
           

            <View style={styles.inputContainer}>
                <TextInput placeholder='E-mail' style={styles.input} />
                <TextInput placeholder='Password' style={styles.input} />
            </View>
            <View style={styles.signupContainer}>
                <Text style={styles.underlineText}>Forgot Your Password?</Text>
            </View>

            <TouchableOpacity
                style={styles.submit}
                onPress={() =>  {}}
                underlayColor='#fff'
            >
                <Text style={styles.submitText}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
                <Text style={styles.normalText} textDecorationLine='none'>
                    New Here?
                </Text>
                <Text style={styles.underlineText}>Sign Up Instead</Text>
            </View>
        </View>
    )
}

export default Signin
