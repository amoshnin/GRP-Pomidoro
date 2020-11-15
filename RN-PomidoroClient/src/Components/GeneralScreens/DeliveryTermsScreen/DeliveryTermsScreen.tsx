// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, View, ImageBackground, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { MaterialIcons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const DeliveryTermsScreen: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.text_wrapper}>
        <Text weight="bold" size={30} style={styles.title}>
          {t("DeliveryTerms.УсловияДоставки")}
        </Text>
        <Text style={styles.text} size={16}>
          {t("DeliveryTerms.PPDeliveryTerms")}
        </Text>
      </View>
      <ImageBackground
        style={styles.image}
        source={require("../../../Images/delivery-map.png")}
      >
        <View style={styles.location_icon_wrap}>
          <MaterialIcons name="location-on" size={26} color="white" />
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 31,
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
