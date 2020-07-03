// PLUGINS IMPORTS //
import React from "react"
import { TouchableOpacity } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import MainContainer from "./Screens/Main/MainContainer"

import CredentialsFieldChangeScreen from "./Screens/Helpers/CredentialFieldChangeScreen/CredentialFieldChangeScreen"
import CreditCardChangeScreenContainer from "./Screens/Helpers/CreditCardChangeScreen/CreditCardChangeScreenContainer"

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
        name="PrivateCabinetScreenMain"
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
        name="CredentialsFieldChangeScreen"
        component={CredentialsFieldChangeScreen}
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
          changeFunction: () => null,
          title: "dskkdl" as string | null,
          placeholder: null as string | null,
          validation: null as string | null,
        }}
      />
      <Stack.Screen
        name="CreditCardChangeScreen"
        component={CreditCardChangeScreenContainer}
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
    </Stack.Navigator>
  )
}

export default PrivateCabinetScreen
