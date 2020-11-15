import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

class ChooseRegionScreen extends React.Component {

    render () {
        return (
            <View style = { Styles.container } >

                <View style = { Styles.headlineContainer } >
                    <Text style = { Styles.headline } >Смена транспорта</Text>
                </View>

                <View style = { Styles.agreeContainer } >

                    <Text style = { Styles.infoCaption } >Для смены транспорта необходимо {`\n`}зайти под другими доступами.</Text>

                    <TouchableOpacity style = { Styles.agreeButton }>
                        <Text style = { Styles.agreeButtonText } >Выйти и зайти заново</Text>
                    </TouchableOpacity>

                </View>

                <View style = { Styles.disagreeContainer } >

                    <Text style = { Styles.infoCaption } >
                        Если вы не знаете другие доступы, обратитесь за помощью к оператору.
                    </Text>

                    <TouchableOpacity style = { Styles.disagreeButton }>
                        <Text style = { Styles.disagreeButtonText } >Связаться с оператором</Text>
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
        justifyContent : 'flex-start',
        alignItems : 'center'

    },

    agreeContainer : {

        flex : 1,
        width : '100%',
        justifyContent : 'flex-start',
        alignItems : 'center'

    },

    disagreeContainer : {

        flex : 1,
        width : '100%',
        justifyContent : 'flex-end',
        alignItems : 'center'

    },

    headline : {

        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        fontSize: 40,
        lineHeight: 40,
        letterSpacing: 1,
        color: '#1A1824'
    },


    infoCaption : {

        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        lineHeight: 30, 
        letterSpacing: 1,
        color: '#1A1824'
    },

    agreeButton : {

        width : '100%',
        height : 60,
        backgroundColor : '#96A637',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 6,
        marginTop : 28

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
        marginTop : 18

    },

    disagreeButtonText : {

        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 1,
        color: '#1A1824'

    }

})

export default ChooseRegionScreen