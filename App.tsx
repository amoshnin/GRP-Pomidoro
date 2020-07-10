// PLUGINS IMPORTS //
import React, { useEffect, useState } from "react"
import { Image, TouchableOpacity, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

import AsyncStorage from "@react-native-community/async-storage"

import { useTranslation } from "react-i18next"
import "~/Translations/Translations"

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
import RegistrationScreenContainer from "./src/Components/GeneralScreens/Auth/Screens/RegistrationScreen/RegistrationScreenContainer"
import IndividualSaleScreen from "./src/Components/HelpersScreens/IndividualSaleScreen/IndividualSaleScreen"
import ProductTypeCatalog from "./src/Components/HelpersScreens/ProductTypeCatalogScreen/ProductTypeCatalogScreen"
import IndividualProductItemContainer from "./src/Components/HelpersScreens/IndividualProductItem/IndividualProductItemContainer"
import OrderTracking from "./src/Components/HelpersScreens/OrderTracking/OrderTracking"

import MainScreen from "./src/Components/GeneralScreens/MainScreen/MainScreenContainer"
import PrivateCabinerScreen from "./src/Components/GeneralScreens/PrivateCabinetScreen/PrivateCabinetScreen"
import MenuScreenContainer from "./src/Components/GeneralScreens/MenuScreen/MenuScreenContainer"
import PizzaConstructorScreen from "./src/Components/GeneralScreens/PizzaConstructorScreen/PizzaConstructorScreenContainer"
import OrdersScreenContainer from "./src/Components/GeneralScreens/OrdersScreen/OrdersScreenContainer"
import Basket from "./src/Components/GeneralScreens/Basket/Basket"
import SalesScreenContainer from "./src/Components/GeneralScreens/SalesScreen/SalesScreenContainer"
import DeliveryTermsScreen from "./src/Components/GeneralScreens/DeliveryTermsScreen/DeliveryTermsScreen"
import ContactsScreen from "./src/Components/GeneralScreens/ContactsScreen/ContactsScreen"

// EXTRA IMPORTS //
import { AntDesign } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const App: React.FC<PropsType> = (props) => {
  const [isAuthentificated, setIsAuthentificated] = useState(false as boolean)
  const [loading, setLoading] = useState(true as boolean)

  const Stack = createStackNavigator()
  console.disableYellowBox = true

  const { i18n } = useTranslation()
  useEffect(() => {
    const LoadInitialData = async () => {
      await Font.loadAsync({
        light: require("./assets/Fonts/Montserrat-Light.ttf"),
        regular: require("./assets/Fonts/Montserrat-Regular.ttf"),
        bold: require("./assets/Fonts/Montserrat-Bold.ttf"),
      })

      const language = await AsyncStorage.getItem("selectedLanguage")
      await i18n.changeLanguage(language as string)

      setLoading(false)
    }

    LoadInitialData()
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
            {!isAuthentificated ? (
              <Stack.Screen
                name="Auth"
                component={Auth}
                options={({ navigation, route }: any) => ({
                  headerShown: false,
                })}
              />
            ) : (
              <>
                <Stack.Screen
                  name="RegistrationScreen"
                  component={RegistrationScreenContainer}
                  options={({ navigation, route }: any) => ({
                    headerTitle: () => (
                      <Image source={require("./src/Images/logo.png")} />
                    ),
                    headerTitleAlign: "center",
                    headerRight: () => (
                      <TouchableOpacity
                        style={{ ...styles.icon, marginRight: 12 }}
                      >
                        <Text style={{ marginRight: 1 }}>Ру</Text>
                        <MaterialIcons
                          name="keyboard-arrow-down"
                          size={23}
                          color="black"
                        />
                      </TouchableOpacity>
                    ),
                    headerStyle: {
                      height: 100,
                    },
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
                            onPress={() =>
                              navigation.navigate("DashboardScreen")
                            }
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
                  name="PizzaConstructorScreen"
                  component={PizzaConstructorScreen}
                  options={({ navigation, route }: any) => ({
                    header: () => (
                      <GeneralHeader
                        navigation={navigation}
                        leftIcon={
                          <MaterialIcons
                            name="menu"
                            size={24}
                            color="#1C1C1C"
                            onPress={() =>
                              navigation.navigate("DashboardScreen")
                            }
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
                  name="BasketScreen"
                  component={Basket}
                  options={({ navigation, route }: any) => ({
                    headerShown: false,
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
                          <Ionicons
                            name="ios-arrow-back"
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
                            onPress={() =>
                              navigation.navigate("DashboardScreen")
                            }
                          />
                        }
                      />
                    ),
                  })}
                />
                <Stack.Screen
                  name="ContactsScreen"
                  component={ContactsScreen}
                  options={({ navigation, route }: any) => ({
                    header: () => (
                      <GeneralHeader
                        navigation={navigation}
                        leftIcon={
                          <MaterialIcons
                            name="menu"
                            size={24}
                            color="#1C1C1C"
                            onPress={() =>
                              navigation.navigate("DashboardScreen")
                            }
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
                    product: null as any,
                  }}
                />
                <Stack.Screen
                  name="ProductTypeCatalog"
                  component={ProductTypeCatalog}
                  options={({ navigation, route }: any) => ({
                    headerShown: false,
                  })}
                  initialParams={{
                    productId: null as string | null,
                  }}
                />
                <Stack.Screen
                  name="IndividualProductItem"
                  component={IndividualProductItemContainer}
                  options={({ navigation, route }: any) => ({
                    headerShown: false,
                  })}
                  initialParams={{
                    productTitle: null as string | null,
                    image: null as string | null,
                    productPrice24: null as string | null,
                    productPrice32: null as string | null,
                    productPrice40: null as string | null,
                    productType: [] as Array<string>,
                    ingridientsList: [] as Array<string>,
                  }}
                />
                <Stack.Screen
                  name="OrderTracking"
                  component={OrderTracking}
                  options={({ navigation, route }: any) => ({
                    headerTitle: `Заказ №${route.params.orderID}`,
                    headerTitleAlign: "center",
                  })}
                  initialParams={{
                    orderID: "" as string,
                  }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </Provider>
  )
}

const styles = StyleSheet.create({
  icon: {
    marginTop: 8,
    flexDirection: "row",
  },
})

export default App
