import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

import CapImage from '../../assets/images/cap-image.png'

class UniformCheckScreen extends React.Component {

    render () {
        return (
            <View style = { Styles.container } >

                <View style = { Styles.headlineContainer } >
                    <Text style = { Styles.headline } >Вы сейчас одеты {`\n`}в фирменную {`\n`}форму? </Text>
                </View>

                <View style = { Styles.imageContainer } >
                    <Image style = { Styles.capImage } source = { CapImage } />
                </View>

                <View style = { Styles.buttonsContainer } >

                    <TouchableOpacity style = { Styles.agreeButton }>
                        <Text style = { Styles.agreeButtonText } >Да, я надел форму</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = { Styles.disagreeButton }>
                        <Text style = { Styles.disagreeButtonText } >Нет, пока не надел форму</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }

}

// Styles
const Styles = StyleSheet.create({

    container : {

        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 30,
        backgroundColor : '#fff'

    },

    headlineContainer : {

        flex : 1,
        width : '100%',
        justifyContent : 'center'
        
    },

    imageContainer : {

        flex : 1,
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center'

    },

    buttonsContainer : {

        flex : 1,
        width : '100%',
        justifyContent : 'flex-end',

    },


    headline : {

        fontFamily: 'Montserrat-Bold',
        fontWeight: 'bold',
        fontSize: 35,
        lineHeight: 50,
        letterSpacing: 1,
        color: '#1A1824'

    },

    capImage : {
        width : 326, height : 169
    },

    agreeButton : {

        width : '100%',
        height : 60,
        backgroundColor : '#96A637',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 6

    },

    agreeButtonText : {

        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 1,
        color: '#FFFFFF'

    },

    disagreeButton : {

        width : '100%',
        height : 60,
        justifyContent : 'center',
        alignItems : 'center',

    },

    disagreeButtonText : {

        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 1,
        color: '#1A1824'

    }

})

export default UniformCheckScreen