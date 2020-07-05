// PLUGINS IMPORTS //
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import MainContainer from "./Screens/Main/MainContainer"
import DeliveryTimeSelectionScreenContainer from "./Screens/DeliveryTimeSelectionScreen/DeliveryTimeSelectionScreenContainer"
import SelectAccountScreen from "./Screens/SelectAccountScreen/SelectAccountScreen"
import DeliveryTypeSelectionScreenContainer from "./Screens/DeliveryTypeSelectionScreen/DeliveryTypeSelectionScreenContainer"
import ConfirmAdressScreen from "./Screens/ConfirmAdressScreen/ConfirmAdressScreen"
import PaymentMethodScreenContainer from "./Screens/PaymentMethodScreen/PaymentMethodScreenContainer"
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
        component={DeliveryTimeSelectionScreenContainer}
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
        component={DeliveryTypeSelectionScreenContainer}
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
        initialParams={{
          saveFunction: () => console.log(),
        }}
      />
      <Stack.Screen
        name="ConfirmAdressScreen"
        component={ConfirmAdressScreen}
        options={({ navigation, route }: any) => ({
          headerShown: false,
        })}
        initialParams={{
          adress: null as string | null,
        }}
      />
      <Stack.Screen
        name="PaymentMethodScreen"
        component={PaymentMethodScreenContainer}
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
