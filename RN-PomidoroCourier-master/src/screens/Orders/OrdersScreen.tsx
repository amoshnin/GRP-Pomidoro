import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

import hasOrders from '../../assets/images/has-orders-image.png';
import hasntOrders from '../../assets/images/hasnt-orders-image.png';

class OrdersScreen extends React.Component {

    state = {
        ordersState : 'has' /// has, hasnt, limit
    }

    render () {
        return (
            <View style = { Styles.container } >

                { this.state.ordersState === 'has' && <>
                    <Image source = {hasOrders} />
                    <Text style = { Styles.headline } >Есть доступные{`\n`}заказы</Text>
                    <Text style = { Styles.info }>Чтобы принять заказ, подойдите к{`\n`}монитору, проведите карточкой и{`\n`}получите талон</Text>
                </>}

                { this.state.ordersState === 'hasnt' && <>
                    <Image source = {hasntOrders} />
                    <Text style = { Styles.headline } >Сейчас нет{`\n`}доступных заказов</Text>
                    <Text style = { Styles.info }>Ожидайте на базе, чтобы получать{`\n`}уведомления о новых заказах</Text>
                </>}

                { this.state.ordersState === 'limit' && <>
                    <Text style = { Styles.headline } >Невозможно взять{`\n`}одновременно{`\n`}более двух{`\n`}заказов</Text>
                    <Text style = { Styles.info }>Доставьте ваши нынешние заказы{`\n`}, чтобы взять новые</Text>
                </>}

            </View>
        )
    }

}

const Styles = StyleSheet.create({

    container : {

        flex : 1,
        backgroundColor : '#fff',
        justifyContent : 'center',
        alignItems : 'center',
        padding : 30

    },

    headline : {

        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        marginTop : 40,
        fontSize: 30,
        lineHeight: 37,
        textAlign: 'center',
        letterSpacing: 1,
        color: '#1A1824'

    },

    info : {

        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        textAlign: 'center',
        letterSpacing: 1,
        color: '#1A1824',
        marginTop : 18

    }

})


export default OrdersScreen