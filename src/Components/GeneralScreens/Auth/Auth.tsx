// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, Image, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Text from "~/Components/Shared/Components/Text/Text"

import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import LoginScreenContainer from "./Screens/LoginScreen/LoginScreenContainer"
import RegistrationScreenContainer from "./Screens/RegistrationScreen/RegistrationScreenContainer"

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
        name="RegistrationScreen"
        component={RegistrationScreenContainer}
        options={({ navigation, route }: any) => ({
          header: () => (
            <SafeAreaView style={styles.header_container}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                  name="ios-arrow-back"
                  size={24}
                  color="black"
                  style={styles.icon}
                />
              </TouchableOpacity>
              <Image
                source={require("../../../Images/logo.png")}
                style={styles.logo}
              />
              <TouchableOpacity style={{ ...styles.icon, marginRight: 12 }}>
                <Text style={{ marginRight: 1 }}>Ру</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={23}
                  color="black"
                />
              </TouchableOpacity>
            </SafeAreaView>
          ),
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
