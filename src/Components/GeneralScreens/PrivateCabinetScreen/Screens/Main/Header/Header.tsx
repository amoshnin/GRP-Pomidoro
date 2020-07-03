// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  LogoutUserThunkCreator: () => void
}

const Header: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar_wrap}>
        <Text style={styles.avatar_text}>ИД</Text>
        <TouchableOpacity style={styles.avatar_icon_wrap}>
          <Feather name="camera" size={18} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.text_wrap}>
        <View>
          <Text weight="bold" size={30}>
            Илья
          </Text>
          <Text size={16}>Клиент</Text>
        </View>
        <TouchableOpacity
          style={styles.logout_btn}
          onPress={() => props.LogoutUserThunkCreator()}
        >
          <Feather name="log-in" size={24} color="#96A637" />
          <Text size={16} color="#96A637" style={styles.logout_text}>
            Выйти
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginBottom: 28,
  },

  avatar_wrap: {
    height: 110,
    width: 110,
    backgroundColor: "#96A637",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 34,
    marginBottom: 20,
  },

  avatar_text: {
    fontSize: 30,
    letterSpacing: 0.3,
    color: "white",
    opacity: 0.5,
  },

  avatar_icon_wrap: {
    position: "absolute",
    right: -19,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    height: 40,
    width: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  text_wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  logout_btn: {
    flexDirection: "row",
    alignItems: "center",
  },

  logout_text: {
    fontWeight: "bold",
    marginLeft: 10,
  },
})

export default Header
