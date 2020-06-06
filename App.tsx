// PLUGINS IMPORTS //
import React, { useEffect, useState } from "react"
import { TouchableOpacity } from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import store from "./src/Redux/ReduxStore"
import { Provider } from "react-redux"

import * as Font from "expo-font"

// COMPONENTS IMPORTS //
import GeneralHeader from "./src/Components/Shared/Components/GeneralHeader/GeneralHeader"

import LoadingScreen from "./src/Components/HelpersScreens/LoadingScreen/LoadingScreen"
import DashboardScreenContainer from "./src/Components/HelpersScreens/DashboardScreen/DashboardScreenContainer"
import Auth from "./src/Components/GeneralScreens/Auth/Auth"
import IndividualSaleScreen from "./src/Components/HelpersScreens/IndividualSaleScreen/IndividualSaleScreen"

import MainScreen from "./src/Components/GeneralScreens/MainScreen/MainScreenContainer"
import PrivateCabinerScreen from "./src/Components/GeneralScreens/PrivateCabinetScreen/PrivateCabinetScreen"
import MenuScreenContainer from "./src/Components/GeneralScreens/MenuScreen/MenuScreenContainer"
import OrdersScreenContainer from "./src/Components/GeneralScreens/OrdersScreen/OrdersScreenContainer"
import SalesScreenContainer from "./src/Components/GeneralScreens/SalesScreen/SalesScreenContainer"
import DeliveryTermsScreen from "./src/Components/GeneralScreens/DeliveryTermsScreen/DeliveryTermsScreen"

// EXTRA IMPORTS //
import { AntDesign } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const App: React.FC<PropsType> = (props) => {
  const [loading, setLoading] = useState(true as boolean)

  const Stack = createStackNavigator()

  useEffect(() => {
    const LoadFonts = async () => {
      await Font.loadAsync({
        light: require("./assets/Fonts/Montserrat-Light.ttf"),
        regular: require("./assets/Fonts/Montserrat-Regular.ttf"),
        bold: require("./assets/Fonts/Montserrat-Bold.ttf"),
      })

      setLoading(false)
    }

    LoadFonts()
  }, [])

  return (
    <Provider store={store}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <NavigationContainer
          theme={{
            colors: { background: "#fff" },
          }}
        >
          <Stack.Navigator initialRouteName="Auth">
            <Stack.Screen
              name="Auth"
              component={Auth}
              options={({ navigation, route }: any) => ({
                headerShown: false,
              })}
            />

            {/* GENERAL SCREENS */}
            <Stack.Screen
              name="DashboardScreen"
              component={DashboardScreenContainer}
              options={({ navigation, route }: any) => ({
                header: () => (
                  <GeneralHeader
                    navigation={navigation}
                    leftIcon={
                      <AntDesign
                        name="close"
                        size={24}
                        color="#1C1C1C"
                        onPress={() => navigation.goBack()}
                      />
                    }
                  />
                ),
              })}
            />
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={({ navigation, route }: any) => ({
                header: () => (
                  <GeneralHeader
                    navigation={navigation}
                    leftIcon={
                      <MaterialIcons
                        name="menu"
                        size={24}
                        color="#1C1C1C"
                        onPress={() => navigation.navigate("DashboardScreen")}
                      />
                    }
                  />
                ),
              })}
            />
            <Stack.Screen
              name="PrivateCabinetScreen"
              component={PrivateCabinerScreen}
              options={({ navigation, route }: any) => ({
                headerShown: false,
              })}
            />
            <Stack.Screen
              name="MenuScreen"
              component={MenuScreenContainer}
              options={({ navigation, route }: any) => ({
                header: () => (
                  <GeneralHeader
                    navigation={navigation}
                    leftIcon={
                      <AntDesign
                        name="close"
                        size={24}
                        color="#1C1C1C"
                        onPress={() => navigation.goBack()}
                      />
                    }
                  />
                ),
              })}
            />
            <Stack.Screen
              name="OrdersScreen"
              component={OrdersScreenContainer}
              options={({ navigation, route }: any) => ({
                title: "",
                headerLeft: () => (
                  <TouchableOpacity>
                    <Ionicons
                      name="ios-arrow-back"
                      size={24}
                      color="#1C1C1C"
                      onPress={() => navigation.goBack()}
                      style={{ padding: 14 }}
                    />
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen
              name="SalesScreen"
              component={SalesScreenContainer}
              options={({ navigation, route }: any) => ({
                header: () => (
                  <GeneralHeader
                    navigation={navigation}
                    leftIcon={
                      <MaterialIcons
                        name="menu"
                        size={24}
                        color="#1C1C1C"
                        onPress={() => navigation.navigate("DashboardScreen")}
                      />
                    }
                  />
                ),
              })}
            />
            <Stack.Screen
              name="DeliveryTermsScreen"
              component={DeliveryTermsScreen}
              options={({ navigation, route }: any) => ({
                header: () => (
                  <GeneralHeader
                    navigation={navigation}
                    leftIcon={
                      <MaterialIcons
                        name="menu"
                        size={24}
                        color="#1C1C1C"
                        onPress={() => navigation.navigate("DashboardScreen")}
                      />
                    }
                  />
                ),
              })}
            />

            {/* HELPERS SCREENS */}
            <Stack.Screen
              name="IndividualSaleScreen"
              component={IndividualSaleScreen}
              options={({ navigation, route }: any) => ({
                title: "",
                headerLeft: () => (
                  <TouchableOpacity>
                    <Ionicons
                      name="ios-arrow-back"
                      size={24}
                      color="#1C1C1C"
                      onPress={() => navigation.goBack()}
                      style={{ padding: 14 }}
                    />
                  </TouchableOpacity>
                ),
              })}
              initialParams={{
                saleTitle: null as string | null,
                description: null as string | null,
                saleType: null as string | null,
                image: null as string | null,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </Provider>
  )
}

export default App
