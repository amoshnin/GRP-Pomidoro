// PLUGINS IMPORTS //
import React from "react"

import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import MainContainer from "./Screens/Main/MainContainer"

// EXTRA IMPORTS //
import GeneralHeader from "../../Shared/Components/GeneralHeader/GeneralHeader"
import { MaterialIcons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const PrivateCabinerScreen: React.FC<PropsType> = (props) => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="PrivateCabinerScreenMain">
      <Stack.Screen
        name="PrivateCabinerScreenMain"
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
    </Stack.Navigator>
  )
}

export default PrivateCabinerScreen
