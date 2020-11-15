import React from 'react'
import { SafeAreaView, StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from 'react-native'


import QuitIcon from '../../assets/icons/icon-quit.png'
import CarImage from '../../assets/images/car-image.png'

class ProfileScreen extends React.Component {

    state = {

        userImageUri : 'https://randomuser.me/api/portraits/men/44.jpg',

        userData : [

            { headline : 'Идентификатор', value : 22212151 },
            { headline : 'Имя и Фамилия', value : 'Олдос Хаксли' },
            { headline : 'Email', value : 'aldous.huxley@gmail.com' },
            { headline : 'Номер телефона', value : '+380 9767 217 315' }

        ],

        carData : {
            number : 'AA 1234 AB',
            type : 'Volkswagen-Passat'
        }
        
    }

    render () {
        return (
            <SafeAreaView style = { Styles.container } >
                <ScrollView style = { { width : '100%' } } showsVerticalScrollIndicator = { false } >

                    <View style = { Styles.mainUserContainer } >
                        <Image style = { Styles.userImage } source={{ uri : this.state.userImageUri }} />
                        <Text style = { Styles.userName } >Олдос Хаксли</Text>

                        <TouchableOpacity style = { Styles.quitAccountButton } >
                            <Image source = { QuitIcon } />
                            <Text style = { Styles.quitAccountButtonText } >Выйти</Text>
                        </TouchableOpacity>

                    </View>

                    <View style = { Styles.userDataContainer } >
                        <Text style = { Styles.blockHeadline } >Личная информация</Text>

                        { this.state.userData.map(( item, index ) => (
                            <View style = { Styles.userDataItem } key = { index } >
                                <Text style = { Styles.userDataItemHeadline } >{ item.headline } </Text>
                                <Text style = { Styles.userDataItemValue } >{ item.value } </Text>
                            </View>
                        )) }

                    </View>

                    <View style = { Styles.userCarContainer } >
                        <Text style = { Styles.blockHeadline } >Мой транспорт</Text>

                        <View style = { Styles.userCarData } > 
                            <Image style = {{ height : 40, width : 60 }} source = { CarImage } />

                            <View style = { { flex : 1, justifyContent : 'center', marginLeft : 20 } } >
                                <Text style = { Styles.carNumber } >{this.state.carData.number}</Text>
                                <Text style = { Styles.carType } >{ this.state.carData.type } </Text>
                            </View>

                        </View>

                        <Text style = { Styles.infoCaption } >Для смены транспорта необходимо{`\n`}выйти из системы и зайти под другими{`\n`}доступами.</Text>

                    </View>


                    <View style = { Styles.buttonsContainer } >
                        <TouchableOpacity style = { Styles.agreeButton }>
                            <Text style = { Styles.agreeButtonText } >Связаться с оператором</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = { Styles.disagreeButton }>
                            <Text style = { Styles.disagreeButtonText } >Запросить перерыв на 15 мин</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </SafeAreaView>
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

    mainUserContainer : {

        flex : 1,
        justifyContent : 'flex-start',
        alignItems : 'flex-start',
        width : '100%',

    },

    userImage : {
        width : 128, height : 128, resizeMode : 'stretch', borderRadius : 10
    },

    userName : {

        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        fontSize: 40,
        letterSpacing: 1,
        color: '#1A1824',
        marginTop : 31

    },

    quitAccountButton : {

        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around',
        width : 100,
        marginTop : 10

    },

    quitAccountButtonText : {

        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        fontSize: 20,
        letterSpacing: 1,
        color: '#96A637'

    },

    blockHeadline : {

        fontFamily: 'Montserrat-Bold',
        fontSize: 30,
        color: '#1C1C1C',
        marginTop : 25,
        marginBottom : 15

    },

    userDataContainer : {

        flex : 1,
        width : '100%',

    },

    userDataItem : {

        flex : 1,
        width : '100%',
        paddingTop : 11,
        borderBottomWidth : .5,
        paddingBottom : 13,
        borderBottomColor : 'rgba(0,0,0,.3)',
        marginTop : 12

    },

    userDataItemHeadline : {

        fontFamily: 'Montserrat-Regular',
        fontSize: 17,
        letterSpacing: 1,
        color: '#1A1824',
        opacity : .5,
        marginBottom : 5

    },

    userDataItemValue : {

        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        color: '#1C1C1C',
        letterSpacing : 1

    },

    userCarContainer : {

        flex : 1,
        justifyContent : 'center',
        width : '100%'

    },

    userCarData : {

        width : '100%',
        padding : 15,
        borderWidth : 1,
        borderRadius : 6,
        borderColor : '#EAEAEB',
        alignItems : 'center',
        flexDirection : 'row'

    },

    carNumber : {

        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 20,

        letterSpacing: 1,
        color: '#1C1C1C'

    },

    carType : {
        
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        letterSpacing: 1,
        color: '#999999',
        marginTop : 5
    },

    infoCaption : {

        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        letterSpacing: 1,
        color: '#1C1C1C',
        marginTop : 17

    },

    buttonsContainer : {

        flex : 1,
        width : '100%',
        marginTop : 40

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


export default ProfileScreen