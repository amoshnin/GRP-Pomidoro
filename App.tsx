// PLUGINS IMPORTS //
import React, { useEffect, useState } from "react"
import { View, ActivityIndicator } from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import store from "./src/Redux/ReduxStore"
import { Provider } from "react-redux"

import * as Font from "expo-font"

// COMPONENTS IMPORTS //
import GeneralHeader from "./src/Components/Shared/Components/GeneralHeader/GeneralHeader"

import LoadingScreen from "./src/Components/LoadingScreen/LoadingScreen"
import DashboardScreenContainer from "./src/Components/DashboardScreen/DashboardScreenContainer"

import MainScreen from "./src/Components/MainScreen/MainScreenContainer"
import DeliveryTermsScreen from "./src/Components/DeliveryTermsScreen/DeliveryTermsScreen"

// EXTRA IMPORTS //
import { AntDesign } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"

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
          <Stack.Navigator initialRouteName="MainScreen">
            <Stack.Screen
              name="DashboardScreen"
              component={DashboardScreenContainer}
              options={({ navigation, route }: any) => ({
                header: () => (
                  <GeneralHeader
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
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </Provider>
  )
}

export default App
