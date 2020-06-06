// PLUGINS IMPORTS //
import React from "react"
import { View, ImageBackground, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { MaterialIcons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const UpperSection: React.FC<PropsType> = (props) => {
  return (
    <ImageBackground
      style={styles.image}
      source={require("../../../../Images/delivery-map.png")}
    >
      <View style={styles.title_wrap}>
        <Text size={30} weight="bold" style={styles.title}>
          Контакты
        </Text>
      </View>
      <View style={styles.icon_wrap}>
        <MaterialIcons name="location-on" size={26} color="white" />
      </View>
    </ImageBackground>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 375,
  },

  title_wrap: {
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    padding: 1,
  },

  title: {
    paddingHorizontal: 30,
  },

  icon_wrap: {
    height: 52,
    width: 52,
    backgroundColor: "#96A637",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 134,
  },
})

export default UpperSection
