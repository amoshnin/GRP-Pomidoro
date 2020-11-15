// React 
import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Entry Point Screen
import HomeScreen from '../screens/Home';

// Login Screens
import LoginScreen from '../screens/Login/LoginScreen';
import LoginLoadingScreen from '../screens/Login/LoginLoadingScreen';

// Check Screens
import AutoCheckScreen from '../screens/Cheking/AutoCheckScreen';
import UniformCheckScreen from '../screens/Cheking/UniformCheckScreen';
import CheckFinishedScreen from '../screens/Cheking/CheckFinishedScreen';
import ChooseRegionScreen from '../screens/Cheking/ChooseRegionScreen';

// Profile Screens
import ProfileScreen from '../screens/Profile/ProfileScreen';
import BreakScreen from '../screens/Profile/BreakScreen';

// Main Screens
import OrdersScreen from '../screens/Orders/OrdersScreen';
import OrdersListScreen from '../screens/Orders/OrdersListScreen';
import OrderItemsScreen from '../screens/Orders/OrderItemsScreen';
import RoutesScreen from '../screens/Orders/RoutesScreen';

// Headers
import LoginScreenHeader from '../components/Headers/HeaderForLogin'
import HeaderWithSupport from '../components/Headers/HeaderWithSupport'
import HeaderMain from '../components/Headers/HeaderMain'




const AppNavigator = createStackNavigator({

  // Entry Point Screen
  Home: { screen: HomeScreen },

  //////////////////////////////////
  /////////// LOGIN SCREENS ////////
  Login : { 
    screen : LoginScreen, navigationOptions : { header : props => <LoginScreenHeader {...props} /> } },

  LoginLoading : {
    screen : LoginLoadingScreen, navigationOptions : { headerShown: false } },



  //////////////////////////////////
  /////////// CHECK SCREENS ////////
  AutoCheck : {
    screen : AutoCheckScreen, navigationOptions : { header : props => <HeaderWithSupport title = 'Подготовка 1/2' {...props} /> }},

  UniformCheck : { 
    screen : UniformCheckScreen,
    navigationOptions : { header : props => <HeaderWithSupport title = 'Подготовка 2/2' {...props} /> } },

  CheckFinished : {
    screen : CheckFinishedScreen, navigationOptions : { headerShown: false } },

  ChooseRegion : {
    screen : ChooseRegionScreen, navigationOptions : { header : props => <HeaderWithSupport title = '' {...props} /> } },



  //////////////////////////////////
  /////////// CHECK SCREENS ////////
  Profile : {
    screen : ProfileScreen, navigationOptions : { header : props => <HeaderWithSupport title = 'Профиль' {...props} /> }},

  Break : {
    screen : BreakScreen, navigationOptions : { header : props => <HeaderWithSupport title = 'Перерыв' {...props} /> }},

  //////////////////////////////////
  /////////// MAIN SCREENS ////////
  Orders : {
    screen : OrdersScreen, navigationOptions : { header : props => <HeaderMain {...props} /> } },
    
  Routes : {
    screen : RoutesScreen, navigationOptions : { headerShown : false } },

  OrdersList : {
    screen : OrdersListScreen, navigationOptions : { header : props => <HeaderWithSupport title = 'Мои заказы' {...props} /> } },

  OrderItems : {
    screen : OrderItemsScreen, navigationOptions : { header : props => <HeaderWithSupport title = '' {...props} /> } },


});

export default createAppContainer(AppNavigator);
