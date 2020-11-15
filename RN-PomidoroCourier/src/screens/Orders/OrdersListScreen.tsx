import React from 'react'
import { View, StyleSheet } from 'react-native'
import Order from '../../components/Order/Order';

class OrdersListScreen extends React.Component {

    render () {
        return (
            <View style = { Styles.container } >
                <Order/>
                <Order/>
                <Order/>
            </View>
        )
    }

}


const Styles = StyleSheet.create({

    container : {
        flex : 1,
        backgroundColor : '#fff',
    }

})

export default OrdersListScreen