// PLUGINS IMPORTS //
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import MainContainer from "./Screens/Main/MainContainer"
import DeliveryTimeSelectionScreen from "./Screens/DeliveryTimeSelectionScreen/DeliveryTimeSelectionScreen"
import SelectAccountScreen from "./Screens/SelectAccountScreen/SelectAccountScreen"
import DeliveryTypeSelectionScreen from "./Screens/DeliveryTypeSelectionScreen/DeliveryTypeSelectionScreen"
import ConfirmAdressScreen from "./Screens/ConfirmAdressScreen/ConfirmAdressScreen"
import PaymentMethodScreen from "./Screens/PaymentMethodScreen/PaymentMethodScreen"
import PaymentScreen from "./Screens/PaymentScreen/PaymentScreen"
import SuccesfulPaymentScreen from "./Screens/SuccesfulPaymentScreen/SuccesfulPaymentScreen"

import BackCallScreen from "./Screens/Helpers/BackCallScreen/BackCallScreen"
import ManualDeliveryScreen from "./Screens/Helpers/ManualDeliveryScreen/ManualDeliveryScreen"

// EXTRA IMPORTS //
import GeneralHeader from "../../Shared/Components/GeneralHeader/GeneralHeader"
import { MaterialIcons } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const PrivateCabinetScreen: React.FC<PropsType> = (props) => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="PrivateCabinetScreenMain">
      <Stack.Screen
        name="BasketMainScreen"
        component={MainContainer}
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
        name="DeliveryTimeSelectionScreen"
        component={DeliveryTimeSelectionScreen}
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
        name="SelectAccountScreen"
        component={SelectAccountScreen}
        options={({ navigation, route }: any) => ({
          headerTitle: "",
        })}
      />
      <Stack.Screen
        name="DeliveryTypeSelectionScreen"
        component={DeliveryTypeSelectionScreen}
        options={({ navigation, route }: any) => ({
          headerTitle: "",
        })}
      />

      <Stack.Screen
        name="ManualDeliveryScreen"
        component={ManualDeliveryScreen}
        options={({ navigation, route }: any) => ({
          headerTitle: "",
        })}
      />
      <Stack.Screen
        name="ConfirmAdressScreen"
        component={ConfirmAdressScreen}
        options={({ navigation, route }: any) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="PaymentMethodScreen"
        component={PaymentMethodScreen}
        options={({ navigation, route }: any) => ({
          headerTitle: "",
        })}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
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
        name="SuccesfulPaymentScreen"
        component={SuccesfulPaymentScreen}
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
        name="BackCallScreen"
        component={BackCallScreen}
        options={({ navigation, route }: any) => ({
          headerTitle: "",
        })}
      />
    </Stack.Navigator>
  )
}

export default PrivateCabinetScreen
