import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

import PhoneInput from 'react-native-phone-input';

class LoginScreen extends React.Component {

    render () {
        return (
            <View style = { Styles.container } >

                <View style = { Styles.screenHeadlineContainer }>
                    <Text style = { Styles.screenHeadline } >
                        Вход {`\n`}в систему
                    </Text>
                </View>

                <View style = { Styles.controlContainer }>

                    <PhoneInput style = { Styles.controlPhoneNumber } />

                    <TextInput placeholder = 'Введите пароль' style = { Styles.controlPassword } />

                    <TouchableOpacity style = { Styles.controlEnterButton } >
                        <Text style = { Styles.controlEnterButtonText } >Войти</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style = { Styles.forgotPasswordButton } >
                        <Text style = { Styles.forgotPasswordButtonText } >Забыли пароль ?</Text>
                </TouchableOpacity>

            </View>
        )
    }

}

// Styles
const Styles = StyleSheet.create({

    // Main Container Style
    container : {

        flex : 1,
        backgroundColor : '#fff',
        padding : 30

    },

    // Headline Styles
    screenHeadlineContainer : {

        flex : 2,
        width : '100%',
        justifyContent : 'center'

    },

    screenHeadline : {

        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        fontSize: 40,
        letterSpacing: 1,
        
        color: '#1A1824',

    },


    // Controls Styles
    controlContainer : {

        flex : 3,
        width : '100%'

    },

    controlPhoneNumber : {

        width : '100%',
        borderBottomWidth : 1,
        borderColor : '#e8e8e8',
        paddingBottom : 11,

    },

    controlPassword : {

        width : '100%',
        borderBottomWidth : 1,
        borderColor : '#e8e8e8',
        paddingBottom : 11,

        marginTop : 33

    },

    controlEnterButton : {

        width : '100%',
        height : 50,
        backgroundColor : '#96A637',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 6,
        marginTop : 33

    },

    controlEnterButtonText : {

        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20,        
        letterSpacing: 1,
        
        color: '#FFFFFF'

    },

    // Forgot Password Styles
    forgotPasswordButton : {

        width : '100%',
        justifyContent : 'center',
        alignItems : 'center'

    },

    forgotPasswordButtonText : {

        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 1,
        color: '#1A1824'

    }
})

export default LoginScreen;