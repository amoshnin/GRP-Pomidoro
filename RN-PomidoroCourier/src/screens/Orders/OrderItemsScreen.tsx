import React from 'react'
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native'

class OrderItemsScreen extends React.Component {

    state = {
        orderID : `548373`,

        items : [
            { name : 'Паперони спайс', amount : 2, price : 250 },
            { name : 'Спайс Чистый',   amount : 4, price : 600 },
            { name : 'Экстази',        amount : 2, price : 160 },
            { name : 'ЛСД',            amount : 5, price : 200 },
        ]
    }


    getTotal () {

        let total = 0;
        this.state.items.map(item => {
            total += item.amount * item.price
        })

        return total
    }

    render () {
        return (
            <SafeAreaView style = { Styles.container } >
                <ScrollView style = {{ padding : 20 }} >
                    <Text style = { Styles.headline } >Состав{`\n`}заказа №{this.state.orderID}</Text>

                    { this.state.items.map((item, index) => (
                        <View style = { Styles.item } key = { index } >
                            <Text style = { Styles.itemName } >{item.name} × {item.amount}шт</Text>
                            <Text style = { Styles.itemPrice } >{ item.amount * item.price} ₴</Text>
                        </View>
                    )) }

                    <View style = { Styles.total } >
                            <Text style = { Styles.totalName } >Общая сумма</Text>
                            <Text style = { Styles.totalPrice } >{this.getTotal()} ₴</Text>
                    </View>

                </ScrollView>
            </SafeAreaView>
        )
    }

}

const Styles = StyleSheet.create({

    container : {

        flex : 1,
        backgroundColor : '#fff'

    },

    headline : {

        fontFamily: 'Montserrat-Bold',
        fontSize: 35,
        letterSpacing: 1,
        color: '#1A1824',
        marginBottom : 20

    },

    item : {

        width : '100%',
        height : 55,
        padding : 10,
        flexDirection : 'row',
        alignItems : 'center',
        borderBottomWidth : .5,
        borderTopWidth : .5,
        borderStyle : 'dashed',
        borderColor : 'rgba(0,0,0,.2)'

    },

    itemName : {

        fontFamily: 'Montserrat-Regular',
        fontSize: 20,  
        letterSpacing: 1,    
        color: '#1C1C1C',
        flex : 1

    },

    itemPrice : {

        fontFamily: 'Montserrat-Regular',
        fontSize: 20,  
        letterSpacing: 1,    
        color: '#1C1C1C',

    },

    total : {

        width : '100%',
        height : 55,
        padding : 10,
        flexDirection : 'row',
        alignItems : 'center',
        borderTopWidth : .5,
        borderStyle : 'dashed',
        borderColor : 'rgba(0,0,0,.2)'

    },

    totalName : {

        fontFamily: 'Montserrat-Bold',
        fontSize: 20,  
        letterSpacing: 1,    
        color: '#1C1C1C',
        flex : 1

    },

    totalPrice : {

        fontFamily: 'Montserrat-Bold',
        fontSize: 20,  
        letterSpacing: 1,    
        color: '#1C1C1C',

    },
    
})

export default OrderItemsScreen