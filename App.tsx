// PLUGINS IMPORTS //
import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack"

import store from "./src/Redux/ReduxStore"
import { Provider } from "react-redux"

// COMPONENTS IMPORTS //
import DashboardScreenContainer from "./src/Components/DashboardScreen/DashboardScreenContainer"
import MainScreen from "./src/Components/MainScreen/MainScreenContainer"

// EXTRA IMPORTS //
import GeneralHeader from "./src/Components/Shared/Components/GeneralHeader/GeneralHeader"
import { AntDesign } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const App: React.FC<PropsType> = (props) => {
  const Stack = createStackNavigator()

  return (
    <Provider store={store}>
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
