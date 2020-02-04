import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    root: {
        flex:1,
        paddingTop: 100,
        paddingHorizontal: 20,
        backgroundColor: '#292a51',
        justifyContent:'center',
      
    },
    heading: {
        fontSize: 30,
        color: 'white',
      width:'100%'
    },
    inputContainer: {
        marginTop: 40,
        marginBottom:10
    },
    input: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        height: 50,
        width: '100%',
        color: 'grey'
    },
    underlineText: {
        color: 'grey',
        marginVertical: 40,
        textDecorationLine: 'underline'
    },
    normalText: {
        color: 'grey',
        marginVertical: 40,
        textDecorationLine: 'none',
        textAlign:'center'

    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
   
    },

    submit: {
        marginRight: 100,
        marginLeft: 100,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#4287f5',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#292a51'
    },
    submitText: {
        color: '#fff',
        textAlign: 'center'
    }
})

