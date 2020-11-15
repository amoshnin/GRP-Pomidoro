import React from 'react';

// Expo Shit
import Constants from 'expo-constants'
import { View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';

// Icons
import BackIcon from '../../assets/icons/icon-back.png';
import SupportIcon from '../../assets/icons/icon-support.png';


// Interface
interface Props {
    title? : string;
}

class HeaderWithSupport extends React.Component <Props> {

    render () {
        return (
            <View style = { Styles.container } >

                <TouchableOpacity>
                    <Image source = { BackIcon } />
                </TouchableOpacity>

                <Text style = { Styles.headerTitle } >{ this.props.title}</Text>

                <TouchableOpacity>
                    <Image source = { SupportIcon } />
                </TouchableOpacity>

            </View>
        )
    }

}

// Styles
const Styles = StyleSheet.create({
    
    container : {

        width : '100%',
        height : 50,
        backgroundColor : '#fff',
        justifyContent : 'space-around',
        alignItems : 'center',
        flexDirection : 'row',
        padding : 21,
        marginTop: Constants.statusBarHeight,

    },

    headerTitle : {

        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20,
        textAlign: 'center',
        letterSpacing: 1,
        color: '#1C1C1C',
        flex : 1

    }
})

export default HeaderWithSupport;