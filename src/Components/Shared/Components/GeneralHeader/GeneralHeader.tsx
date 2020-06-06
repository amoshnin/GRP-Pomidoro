// PLUGINS IMPORTS //
import React from "react"
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"
import { FontAwesome5 } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  leftIcon: any
}

const GeneralHeader: React.FC<PropsType> = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {props.leftIcon}
        <TextInput style={styles.input} />
        <View style={styles.icons_wrap}>
          <TouchableOpacity style={styles.icon}>
            <Feather name="shopping-cart" size={24} color="#1C1C1C" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              props.navigation.navigate("PrivateCabinetScreen")
            }}
          >
            <FontAwesome5 name="user" size={24} color="#1C1C1C" />
          </TouchableOpacity>
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

  icon: {
    paddingHorizontal: 10,
  },
})

export default GeneralHeader
