// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //
import FiltedList from "./FiltersList/FiltersList"

// EXTRA IMPORTS //
import { Ionicons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any
}

const Header: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button_wrap}
        onPress={() =>
          props.navigation.goBack() || props.navigation.navigate("MainScreen")
        }
      >
        <Ionicons name="ios-arrow-back" size={22} color="black" />
        <Text size={16}>Меню</Text>
      </TouchableOpacity>
      <Text size={30} weight="bold">
        {props.route.params.productName}
      </Text>
      <FiltedList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginTop: 21,
  },

  button_wrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 67,
  },
})

export default Header
