// PLUGINS IMPORTS //
import React, { useEffect, useState } from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import Dialog, { DialogContent } from "react-native-popup-dialog"
import AsyncStorage from "@react-native-community/async-storage"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  popupVisible: boolean

  setPopupVisible: (popupVisibility: boolean) => void
}

const LanguageSelectPopup: React.FC<PropsType> = (props) => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    null as string | null
  )

  const { i18n } = useTranslation()
  const chooseLanguage = async (language?: string) => {
    language && (await AsyncStorage.setItem("selectedLanguage", language))
    await i18n.changeLanguage(
      (await AsyncStorage.getItem("selectedLanguage")) as string
    )
    setSelectedLanguage(await AsyncStorage.getItem("selectedLanguage"))
  }

  useEffect(() => {
    chooseLanguage()
  }, [props.popupVisible])

  useEffect(() => {
    chooseLanguage()
  }, [])

  return (
    <Dialog
      width={320}
      dialogStyle={styles.wrapper}
      visible={props.popupVisible}
      onTouchOutside={() => {
        props.setPopupVisible(false)
      }}
    >
      <DialogContent style={styles.container}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedLanguage === "ru" && { backgroundColor: "#96A637" },
          ]}
          onPress={() => chooseLanguage("ru")}
        >
          <Text
            weight="bold"
            color={selectedLanguage === "ru" ? "white" : "black"}
          >
            Русский
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedLanguage === "ua" && { backgroundColor: "#96A637" },
          ]}
          onPress={() => chooseLanguage("ua")}
        >
          <Text
            weight="bold"
            color={selectedLanguage === "ua" ? "white" : "black"}
          >
            Український
          </Text>
        </TouchableOpacity>
      </DialogContent>
    </Dialog>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },

  container: {
    flex: 1,
    marginHorizontal: -19,
    marginBottom: -24,
  },

  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0,
  },
})

export default LanguageSelectPopup
