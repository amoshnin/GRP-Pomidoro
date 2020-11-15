import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import IconLoading from '../../assets/icons/icon-loading.gif';


class LoginLoadingScreen extends React.Component {

    render () {
        return (
            <View style = { Styles.container } >

                <View style = { Styles.textContainer }>
                    <Text style = { Styles.greetingLabel }>Здравствуйте, </Text>
                    <Text style = { Styles.greetingName }>Олдос Хаксли</Text>
                </View>

                <View style = { Styles.imageContainer } >
                    <Image source = { IconLoading } style = { Styles.loaderIcon } />
                </View>
                
            </View>
        )
    }

}

// Styles
const Styles = StyleSheet.create({

    container : {

        flex : 1,
        width : '100%',
        justifyContent : 'center',

        backgroundColor : '#fff',

        padding : 30
        
    },

    textContainer : {
        flex : 1,
        width : '100%',
        justifyContent : 'flex-end'
    },

    greetingLabel : {

        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        lineHeight: 50,        
        letterSpacing: 1,
        color: '#1C1C1C',

    },

    greetingName : {

        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        fontSize: 40,
        lineHeight: 37,        
        letterSpacing: 1,   
        color: '#1C1C1C',
        marginTop : 5

    },

    imageContainer : {

        flex : 1,
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center'

    },

    loaderIcon : {

        width : 50,
        height : 50

    }

})

export default LoginLoadingScreen