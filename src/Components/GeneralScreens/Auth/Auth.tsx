// PLUGINS IMPORTS //
import React from "react"
import { View } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import LoginScreenContainer from "./Screens/LoginScreen/LoginScreenContainer"

// EXTRA IMPORTS //
import { MaterialIcons } from "@expo/vector-icons"

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
            <View
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
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  )
}

export default Auth
