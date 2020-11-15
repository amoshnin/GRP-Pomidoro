import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

import CheckFinishedImage from '../../assets/images/check-finished-image.png'
import LoadingImage from '../../assets/icons/icon-loading.gif'


class CheckFinishedScreen extends React.Component {

    render () {
        return (
            <View style = { Styles.container } >

                <Image source = { CheckFinishedImage } />

                <Text style = { Styles.headline } >Вы готовы {`\n`}к работе!</Text>

                <Text style = { Styles.proccessCaption } >Идёт загрузка заказов</Text>

                <Image source = { LoadingImage } style = { Styles.loadingImage } />

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
        backgroundColor : '#fff',


    },

    headline : {

        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        fontSize: 40,
        lineHeight: 40,
        textAlign: 'center',
        letterSpacing: 1,
        color: '#1A1824',
        marginTop : 55

    },

    proccessCaption : {

        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        lineHeight: 50,
        letterSpacing: 1,
        color: '#1A1824',
        marginTop: 25
    },
    
    loadingImage : {
        width : 60,
        height : 60,
        marginTop : 30
    }

})

export default CheckFinishedScreen