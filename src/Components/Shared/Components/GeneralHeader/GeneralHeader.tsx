// PLUGINS IMPORTS //
import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"
import { FontAwesome5 } from "@expo/vector-icons"
import { BorderlessButton } from "react-native-gesture-handler"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  leftIcon: any
}

const GeneralHeader: React.FC<PropsType> = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BorderlessButton style={styles.menu_icon}>
          {props.leftIcon}
        </BorderlessButton>
        <TextInput style={styles.input} />
        <View style={styles.icons_wrap}>
          <BorderlessButton
            style={styles.icon}
            onPress={() => {
              props.navigation.navigate("BasketScreen")
            }}
          >
            <Feather name="shopping-cart" size={24} color="#1C1C1C" />
          </BorderlessButton>

          <BorderlessButton
            style={styles.icon}
            onPress={() => {
              props.navigation.navigate("PrivateCabinetScreen")
            }}
          >
            <FontAwesome5 name="user" size={24} color="#1C1C1C" />
          </BorderlessButton>
        </View>
      </View>
    </SafeAreaView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingRight: 25,
  },

  input: {
    borderColor: "#DCDCDC",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    width: 200,
    backgroundColor: "white",
  },

  icons_wrap: {
    flexDirection: "row",
  },

  menu_icon: {
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default GeneralHeader
