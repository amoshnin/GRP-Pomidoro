import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

import Constants from 'expo-constants';

class HeaderMain extends React.Component {

    render () {
        return (
            <View style = { Styles.container } >
                <View style = { Styles.statusBar } ></View>
                <View style = { Styles.navigation } >

                    <TouchableOpacity style = { Styles.navBtn } ><Text style = { Styles.navBtnText } >Профиль</Text></TouchableOpacity>
                    <TouchableOpacity style = { Styles.navBtn } ><Text style = { Styles.navBtnText } >Мои заказы</Text></TouchableOpacity>
                    <TouchableOpacity style = { Styles.navBtn } ><Text style = { Styles.navBtnText } >История</Text></TouchableOpacity>
                    
                </View>
            </View>
        )
    }

}


// Style Shit Here))
const Styles = StyleSheet.create({

    container : {
        
        alignItems : 'center',
        backgroundColor : '#fff',

    },

    navigation : {
        width : '100%',

        height : 80,
        backgroundColor : '#96A637',
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        padding : 10
    },

    statusBar : {
        width : '100%',
        height : Constants.statusBarHeight,
        backgroundColor : '#96A637'
    },

    navBtnText : {
        fontFamily: 'Montserrat-Bold',
        fontStyle: 'normal',
        fontWeight:'600',
        fontSize: 16,
        color: '#FFFFFF'
    }

})

export default HeaderMain;