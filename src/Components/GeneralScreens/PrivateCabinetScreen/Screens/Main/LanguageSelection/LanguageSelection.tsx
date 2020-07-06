// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import AsyncStorage from "@react-native-community/async-storage"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //
import LanguageSelectionPopup from "~/Components/Shared/Components/Popups/LanguageSelectPopup/LanguageSelectPopup"

// EXTRA IMPORTS //
import { MaterialIcons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const LanguageSelection: React.FC<PropsType> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false as boolean)
  const [language, setLanguage] = useState("ru" as string)
  const { t } = useTranslation()

  useEffect(() => {
    const getData = async () => {
      const language = await AsyncStorage.getItem("selectedLanguage")
      setLanguage(language || "ru")
    }

    getData()
  }, [popupVisible])

  return (
    <>
      <View style={styles.container}>
        <Text weight="bold" size={20}>
          {t("PrivateCabinetScreen.LanguageSection.ЯзыкПриложения")}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setPopupVisible(true)}
        >
          <Text>{language === "ua" ? "Русский" : "Український"}</Text>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={25}
            color="#1A1824"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <LanguageSelectionPopup
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
      />
    </>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
  },

  button: {
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    marginTop: 3,
  },
})

export default LanguageSelection
