// PLUGINS IMPORTS //
import React from "react"
import { Image, StyleSheet } from "react-native"

import { SafeAreaView } from "react-native-safe-area-context"
import { BorderlessButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Ionicons } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  image: string | null
}

const Header: React.FC<PropsType> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <BorderlessButton
        style={[styles.button, { marginLeft: 10 }]}
        onPress={() => props.navigation.goBack()}
      >
        <Ionicons name="ios-arrow-back" size={24} color="black" />
      </BorderlessButton>
      <Image source={{ uri: props.image as string }} style={styles.image} />
      <BorderlessButton
        style={[styles.button, { marginRight: 10 }]}
        onPress={() => props.navigation.navigate("BasketScreen")}
      >
        <Feather name="shopping-cart" size={24} color="black" />
      </BorderlessButton>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10.5,
    marginTop: 21,
  },

  image: {
    resizeMode: "contain",
    width: 280,
    height: 300,
  },

  button: {
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default Header
