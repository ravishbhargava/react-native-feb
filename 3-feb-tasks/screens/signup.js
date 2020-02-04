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

const Signup = props => {
    let string = `Get on Board`;
    let terms = `By creating an account you agree to the
terms & condition and privacy policy`
    return (
        <View style={styles.root}>
            <Text style={styles.heading}>{string}</Text>
           

            <View style={styles.inputContainer}>
                <TextInput placeholder='Name' style={styles.input} />
                <TextInput placeholder='E-mail' style={styles.input} />
                <TextInput placeholder='Enter Password' style={styles.input} />
                <TextInput placeholder='Confirm Password' style={styles.input} />
            </View>
            <View style={styles.signupContainer}>
                <Text style={styles.normalText}>{terms}</Text>
            </View>

            <TouchableOpacity
                style={styles.submit}
                onPress={() => this.submitSuggestion(this.props)}
                underlayColor='#fff'
            >
                <Text style={styles.submitText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
                
                <Text style={styles.underlineText}>I am already a member</Text>
            </View>
        </View>
    )
}

export default Signup
