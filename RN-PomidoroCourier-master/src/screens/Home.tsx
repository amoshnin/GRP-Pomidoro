import React from "react";
import { ScrollView, SafeAreaView, TouchableOpacity, Text, StyleSheet } from "react-native";



const HomeScreen = ( { navigation } ) => {
  return (

    <SafeAreaView style = { { flex: 1 } }>
    <ScrollView style = {{ padding : 20}} >

      {/* //////////////////////
      /////// LOGIN SCREENS
      ///////////////////// */}
      <Text style = { Styles.separator }>Login Screens</Text>

      <TouchableOpacity style = { Styles.btn } onPress = {() => navigation.navigate('Login')} >
        <Text style = { Styles.btnText } >Login Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style = { Styles.btn } onPress = {() => navigation.navigate('LoginLoading')} >
        <Text style = { Styles.btnText } >Login Loading Screen</Text>
      </TouchableOpacity>



      {/* //////////////////////
      /////// CHECK SCREENS
      ///////////////////// */}
      <Text style = { Styles.separator }>Check Screens</Text>

      <TouchableOpacity style = { Styles.btn } onPress = {() => navigation.navigate('AutoCheck')} >
        <Text style = { Styles.btnText } >Auto Check Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style = { Styles.btn } onPress = {() => navigation.navigate('UniformCheck')} >
        <Text style = { Styles.btnText } >Uniform Check Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style = { Styles.btn } onPress = {() => navigation.navigate('CheckFinished')} >
        <Text style = { Styles.btnText } >Check Finished Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style = { Styles.btn } onPress = {() => navigation.navigate('ChooseRegion')} >
        <Text style = { Styles.btnText } >Choose Region Screen</Text>
      </TouchableOpacity>


      {/* //////////////////////
      /////// PROFILE SCREENS
      ///////////////////// */}
      <Text style = { Styles.separator }>Profile Screens</Text>

      <TouchableOpacity style = { Styles.btn } onPress = {() => navigation.navigate('Profile')} >
        <Text style = { Styles.btnText } >Profile Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style = { Styles.btn } onPress = {() => navigation.navigate('Break')} >
        <Text style = { Styles.btnText } >Break Screen</Text>
      </TouchableOpacity>

      {/* //////////////////////
      /////// MAIN SCREENS
      ///////////////////// */}
      <Text style = { Styles.separator }>Main Screens</Text>

      <TouchableOpacity style = { Styles.btn } onPress = {() => navigation.navigate('Orders')} >
        <Text style = { Styles.btnText } >Orders Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style = { Styles.btn } onPress = {() => navigation.navigate('OrdersList')} >
        <Text style = { Styles.btnText } >Orders List Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style = { Styles.btn } onPress = {() => navigation.navigate('OrderItems')} >
        <Text style = { Styles.btnText } >Order Items Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style = { Styles.btn } onPress = {() => navigation.navigate('Routes')} >
        <Text style = { Styles.btnText } >Routes Screen</Text>
      </TouchableOpacity>



    </ScrollView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({

  btn : {

    width : '100%',
    height : 60,
    backgroundColor : '#0da559',
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
    marginBottom : 20

  },

  btnText : {
    color : '#fff',
    fontSize : 20,
    textTransform : 'uppercase',
    letterSpacing : 1,
    fontFamily : 'Montserrat-Light',
    fontWeight : '100',
  },

  separator : {
    width : '100%',
    fontSize : 30,
    textAlign : 'center',
    padding : 20,
    borderBottomWidth : 1,
    marginBottom : 10,
    textTransform : 'uppercase',
    fontFamily : 'Montserrat-ExtraLight',
    fontWeight : '200',
    borderBottomColor : 'rgba(0,0,0,.2)',
    marginTop : 0
  }

})

export default HomeScreen;
