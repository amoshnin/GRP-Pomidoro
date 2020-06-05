// PLUGINS IMPORTS //
import React from "react"
import { View, ImageBackground, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { MaterialIcons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const DeliveryTermsScreen: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.text_wrapper}>
        <Text weight="bold" size={30} style={styles.title}>
          Условия доставки
        </Text>
        <Text style={styles.text} size={16}>
          Мы осуществляем доставку Пиццы и Суши в такие города, как Бровары, а
          также Калиновка, Княжичи, Требухов и близлежащие поселки {"\n"} {"\n"}
          Доставка по Броварам — БЕСПЛАТНАЯ {"\n"} {"\n"}
          Горяченькую пиццу и свежие суши доставит наш курьер на нашем
          собственном транспорте 🙂
        </Text>
      </View>
      <ImageBackground
        style={styles.image}
        source={require("../../Images/delivery-map.png")}
      >
        <View style={styles.location_icon_wrap}>
          <MaterialIcons name="location-on" size={26} color="white" />
        </View>
      </ImageBackground>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 31,
    justifyContent: "space-between",
  },

  text_wrapper: {
    marginHorizontal: 30,
  },

  title: {
    letterSpacing: 0.3,
    marginBottom: 14.5,
  },

  text: {
    letterSpacing: 0.1,
    lineHeight: 25,
  },

  image: {
    width: "100%",
    height: 375,
  },

  location_icon_wrap: {
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

export default DeliveryTermsScreen
