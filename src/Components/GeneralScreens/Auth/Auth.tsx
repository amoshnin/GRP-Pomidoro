// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { TouchableOpacity, Image, StyleSheet } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"
import Text from "~/Components/Shared/Components/Text/Text"

import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import LoginScreenContainer from "./Screens/LoginScreen/LoginScreenContainer"
import RegionSelectionScreen from "./Screens/LoginScreen/RegionSelectionScreen/RegionSelectionScreen"

import RegistrationScreenContainer from "./Screens/RegistrationScreen/RegistrationScreenContainer"
import RecieveNewPassScreen1 from "./Screens/LoginScreen/RecieveNewPassScreen/RecieveNewPassScreen1/RecieveNewPassScreen1"
import RecieveNewPassScreen2 from "./Screens/LoginScreen/RecieveNewPassScreen/RecieveNewPassScreen2/RecieveNewPassScreen2"
import RegistrationSuccesfulScreen from "./Screens/RegistrationScreen/RegistrationSuccesfulScreen/RegistrationSuccesfulScreen"

// EXTRA IMPORTS //
import { MaterialIcons } from "@expo/vector-icons"
import LanguageSelectPopup from "~/Components/Shared/Components/Popups/LanguageSelectPopup/LanguageSelectPopup"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Auth: React.FC<PropsType> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false as boolean)
  const [language, setLanguage] = useState("ru" as string)
  const Stack = createStackNavigator()

  useEffect(() => {
    const getData = async () => {
      const language = await AsyncStorage.getItem("selectedLanguage")
      setLanguage(language || "ru")
    }

    getData()
  }, [popupVisible])

  return (
    <>
      <Stack.Navigator initialRouteName="LoginScreen">
        {/* LOGIN SCREENS */}
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreenContainer}
          options={({ navigation, route }: any) => ({
            title: "",
            headerStyle: styles.header,
            headerRight: () => (
              <TouchableOpacity
                style={styles.language_button}
                onPress={() => setPopupVisible(true)}
              >
                <Text>{language === "ru" ? "Py" : "Укр"}</Text>
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
            headerStyle: styles.header,
            headerRight: () => (
              <TouchableOpacity
                style={styles.language_button}
                onPress={() => setPopupVisible(true)}
              >
                <Text>{language === "ru" ? "Py" : "Укр"}</Text>
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
          name="RecieveNewPassScreen1"
          component={RecieveNewPassScreen1}
          options={({ navigation, route }: any) => ({
            headerTitle: () => (
              <Image source={require("../../../Images/logo.png")} />
            ),
            headerTitleAlign: "center",
            headerRight: () => (
              <TouchableOpacity
                style={{ ...styles.icon, marginRight: 12 }}
                onPress={() => setPopupVisible(true)}
              >
                <Text>{language === "ru" ? "Py" : "Укр"}</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={23}
                  color="black"
                />
              </TouchableOpacity>
            ),
            headerStyle: styles.header,
          })}
        />
        <Stack.Screen
          name="RecieveNewPassScreen2"
          component={RecieveNewPassScreen2}
          options={({ navigation, route }: any) => ({
            headerTitle: () => (
              <Image source={require("../../../Images/logo.png")} />
            ),
            headerTitleAlign: "center",
            headerRight: () => (
              <TouchableOpacity
                style={{ ...styles.icon, marginRight: 12 }}
                onPress={() => setPopupVisible(true)}
              >
                <Text>{language === "ru" ? "Py" : "Укр"}</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={23}
                  color="black"
                />
              </TouchableOpacity>
            ),
            headerStyle: styles.header,
          })}
        />

        {/* REGISTRATION SCREENS */}
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreenContainer}
          options={({ navigation, route }: any) => ({
            headerTitle: () => (
              <Image source={require("../../../Images/logo.png")} />
            ),
            headerTitleAlign: "center",
            headerRight: () => (
              <TouchableOpacity
                style={{ ...styles.icon, marginRight: 12 }}
                onPress={() => setPopupVisible(true)}
              >
                <Text>{language === "ru" ? "Py" : "Укр"}</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={23}
                  color="black"
                />
              </TouchableOpacity>
            ),
            headerStyle: styles.header,
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

      <LanguageSelectPopup
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
      />
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 110,
  },

  logo: {
    marginLeft: 30,
  },

  icon: {
    marginTop: 8,
    flexDirection: "row",
  },

  language_button: {
    flexDirection: "row",
    marginHorizontal: 25,
  },
})

export default Auth
