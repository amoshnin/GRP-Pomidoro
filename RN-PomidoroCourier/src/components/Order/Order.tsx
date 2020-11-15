import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'

import LocationIcon from '../../assets/icons/icon-location.png'

class Order extends React.Component {

    render () {
        return (
            <TouchableOpacity style = { Styles.container } >
                <Image source = { LocationIcon }/>
                <View style = { Styles.textData } >
                    <Text style = { Styles.title } >ул. Засумская, 12</Text>
                    <Text style = { Styles.directionLength } >2.3 км</Text>
                </View>
            </TouchableOpacity>
        )
    }

}

const Styles = StyleSheet.create({

    container : {
        width : '100%',
        height : 70,
        flexDirection : 'row',
        alignItems : 'center',
        borderTopWidth : .5,
        borderBottomWidth : .5,
        borderColor : 'rgba(0,0,0,.2)',
        padding : 20
    },

    textData : {
        marginLeft : 15
    },

    title : {
        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20, 
        letterSpacing: 1,
        color: '#1C1C1C'
    },

    directionLength : {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        lineHeight: 17,    
        letterSpacing: 1,
        marginTop : 3,
        color: '#39B637'
    }

})

export default Order