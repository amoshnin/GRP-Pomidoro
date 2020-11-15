import React from 'react'
import { View, StyleSheet, Text } from 'react-native'



// import CircularTimer from 'react-native-circular-timer'

class BreakScreen extends React.Component {

    render () {
        return (
            <View style = { Styles.container } >
                <Text style = { Styles.infoMessage } >
                    Вы запросили перерыв на{`\n`}15 минут у администратора.
                </Text>
                <Text style = { Styles.mainInfoMessage } >
                    Ожидайте подтверждение,{`\n`}чтобы начать перерыв
                </Text>
            </View>
        )
    }

}

const Styles = StyleSheet.create({

    container : {

        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#fff',
        padding : 30

    },

    infoMessage : {

        fontFamily: 'Montserrat-Regular',
        fontSize: 18,
        letterSpacing: 1,
        color: '#1C1C1C',
        textAlign : 'center',
        lineHeight : 25

    },

    mainInfoMessage : {

        fontFamily: 'Montserrat-Bold',
        fontSize: 25,
        letterSpacing: 1,
        color: '#1C1C1C',
        textAlign : 'center',
        lineHeight : 30,
        marginTop : 25

    }

})

export default BreakScreen