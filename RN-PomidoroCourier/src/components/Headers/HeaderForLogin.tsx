import React from 'react';

// Expo Shit
import Constants from 'expo-constants'
import { View, StyleSheet, TouchableOpacity, Image, Picker, Alert} from 'react-native';

// Icons
import SupportIcon from '../../assets/icons/icon-support.png';

class HeaderForLogin extends React.Component {

    state = {
        selectedValue : 'java'
    }

    setSelectedValue ( value ) {
        this.setState({selectedValue : value})
    }

    render () {
        return (
            <View onMagicTap = { () => { Alert.alert('1') } } style = { Styles.container } >

                <TouchableOpacity onPress = { () => { Alert.alert('Hello') } }>
                    <Image source = { SupportIcon } />
                </TouchableOpacity>

                <Picker
                    selectedValue={this.state.selectedValue}
                    style={{ height: 50, width: 80 }}
                    onValueChange={(itemValue, itemIndex) => this.setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Ру" value="ru" />
                    <Picker.Item label="En" value="en" />

                </Picker>


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
        justifyContent : 'flex-end',
        alignItems : 'center',
        flexDirection : 'row',
        padding : 21,
        marginTop: Constants.statusBarHeight,


    }

})

export default HeaderForLogin