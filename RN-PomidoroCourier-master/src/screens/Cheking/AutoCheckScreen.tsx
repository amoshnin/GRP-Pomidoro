import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

import CarImage from '../../assets/images/car-image.png';

class AutoCheckScreen extends React.Component {

    render () {
        return (
            <View style = { Styles.container }>

                <View style = { Styles.headlineContainer }>
                    <Text style = { Styles.headline } >Осматривали {`\n`}ли вы сегодня {`\n`}ваш транспорт?</Text>
                </View>

                <View style = { Styles.autoContainer }>
                    <Image source = { CarImage } />
                    <Text style = { Styles.autoType } >Легковой автомобиль</Text>
                    <Text style = { Styles.autoName } >Volkswagen Passat</Text>
                    <Text style = { Styles.autoNumber } >AA 1234 AB</Text>
                </View>

                <View style = { Styles.buttonsContainer } >

                    <TouchableOpacity style = { Styles.agreeButton }>
                        <Text style = { Styles.agreeButtonText } >Да, уже осмотрел и готов</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = { Styles.disagreeButton }>
                        <Text style = { Styles.disagreeButtonText } >Нет, еще не осматривал</Text>
                    </TouchableOpacity>

                </View>


            </View>
        )
    }

}

// Styles Here
const Styles = StyleSheet.create({

    container : {

        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#fff',
        padding : 30

    },

    headlineContainer : {

        flex : 1,
        width : '100%',
        justifyContent : 'center',

    },

    autoContainer : {

        flex : 1,
        width : '100%',
        justifyContent : 'center'

    },

    buttonsContainer : {

        flex : 1,
        width : '100%',
        justifyContent : 'flex-end'

    },

    headline : {

        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        fontSize: 35,
        lineHeight: 40,
        letterSpacing: 1,
        color: '#1A1824',

    },

    autoType : {

        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        lineHeight: 50,
        letterSpacing: 1,
        color: '#1A1824',
        marginTop : 35

    },

    autoName : {

        fontFamily: 'Montserrat-Bold',
        fontWeight: 'bold',
        fontSize: 28,
        lineHeight: 30, 
        letterSpacing: 1,
        color: '#1A1824',
        marginTop : 6

    },

    autoNumber : {
        borderWidth : 1,
        padding : 10,
        width : 150,
        borderRadius : 4,
        textAlign : 'center',
        borderColor : 'rgba(26, 24, 36, 0.2)',

        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        fontSize: 18,
        letterSpacing: 1,
        color: '#1A1824',
        marginTop : 15

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

export default AutoCheckScreen