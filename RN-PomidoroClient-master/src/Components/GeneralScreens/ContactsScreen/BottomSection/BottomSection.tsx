// PLUGINS IMPORTS //
import React from "react"
import { View, ScrollView, Image, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const BottomSection: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <View style={styles.text_wrap}>
        <Text>{t("ContactsScreen.Адрес")}:</Text>
        <Text weight="bold" size={20} style={styles.title}>
          г. Бровары, улица Черновола, 9
        </Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <Image
            style={styles.image}
            source={require("~/Images/cafeImg-1.png")}
          />
          <Image
            style={styles.image}
            source={require("~/Images/cafeImg-2.png")}
          />
          <Image
            style={styles.image}
            source={require("~/Images/cafeImg-3.png")}
          />
        </ScrollView>
        <Text style={styles.schedule_text} size={13}>
          {t("ContactsScreen.PPWorkInfo")}
        </Text>
        <View style={styles.divider} />
        <Text size={16}>{t("ContactsScreen.ContactUs")}:</Text>
        <Text size={20} weight="bold" style={styles.phone_text}>
          +38 (096) 683 07 07
        </Text>
        <Text size={20} weight="bold" style={styles.phone_text}>
          +38 (096) 683 07 07
        </Text>
        <Text size={20} weight="bold" style={styles.phone_text}>
          +38 (096) 683 07 07
        </Text>
      </View>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: 34,
    borderTopLeftRadius: 34,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    height: "60%",
    width: "100%",
  },

  text_wrap: {
    marginVertical: 22,
    paddingHorizontal: 29.95,
  },

  title: {
    letterSpacing: 0.3,
    marginBottom: 14.5,
  },

  image: {
    marginRight: 10,
  },

  schedule_text: {
    marginTop: 15,
  },

  divider: {
    borderTopColor: "#EAEAEB",
    borderTopWidth: 1,
    marginVertical: 15,
  },

  phone_text: {
    letterSpacing: 0.3,
    marginVertical: 7,
  },
})

export default BottomSection
