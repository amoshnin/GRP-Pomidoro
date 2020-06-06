// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, Image, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Text from "~/Components/Shared/Components/Text/Text"

import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import LoginScreenContainer from "./Screens/LoginScreen/LoginScreenContainer"
import RegionSelectionScreen from "./Screens/LoginScreen/RegionSelectionScreen/RegionSelectionScreen"

import RegistrationScreenContainer from "./Screens/RegistrationScreen/RegistrationScreenContainer"
import RegistrationSuccesfulScreen from "./Screens/RegistrationScreen/RegistrationSuccesfulScreen/RegistrationSuccesfulScreen"

// EXTRA IMPORTS //
import { MaterialIcons } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Auth: React.FC<PropsType> = (props) => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreenContainer}
        options={({ navigation, route }: any) => ({
          title: "",
          headerStyle: {
            height: 110,
          },
          headerRight: () => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                marginHorizontal: 25,
              }}
            >
              <Text style={{ marginRight: 1 }}>Ру</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={23}
                color="black"
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="RegionSelectionScreen"
        component={RegionSelectionScreen}
        options={({ navigation, route }: any) => ({
          title: "",
          headerStyle: {
            height: 110,
          },
          headerRight: () => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                marginHorizontal: 25,
              }}
            >
              <Text style={{ marginRight: 1 }}>Ру</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={23}
                color="black"
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreenContainer}
        options={({ navigation, route }: any) => ({
          headerTitle: () => (
            <Image source={require("../../../Images/logo.png")} />
          ),
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity style={{ ...styles.icon, marginRight: 12 }}>
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
      <Stack.Screen
        name="RegistrationSuccesfulScreen"
        component={RegistrationSuccesfulScreen}
        options={({ navigation, route }: any) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  header_container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
  },

  logo: {
    marginLeft: 30,
  },

  icon: {
    marginTop: 8,
    flexDirection: "row",
  },
})

export default Auth
