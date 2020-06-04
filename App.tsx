// PLUGINS IMPORTS //
import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import store from "./src/Redux/ReduxStore"
import { Provider } from "react-redux"

// COMPONENTS IMPORTS //
import DashboardContainer from "./src/Components/Dashboard/DashboardContainer"

// EXTRA IMPORTS //
import GeneralHeader from "./src/Components/Shared/GeneralHeader/GeneralHeader"

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
        <Stack.Navigator initialRouteName="Dashboard">
          {/* GENERAL SCREENS */}
          <Stack.Screen
            name="Dashboard"
            component={DashboardContainer}
            options={({ navigation, route }: any) => ({
              header: () => <GeneralHeader />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
