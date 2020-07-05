// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //
import LanguageSelectionPopup from "~/Components/Shared/Components/Popups/LanguageSelectPopup/LanguageSelectPopup"

// EXTRA IMPORTS //
import { MaterialIcons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const LanguageSelection: React.FC<PropsType> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false as boolean)

  return (
    <>
      <View style={styles.container}>
        <Text weight="bold" size={20}>
          Язык приложения
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setPopupVisible(true)}
        >
          <Text>Русский</Text>
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
    justifyContent: "space-between",
    width: 80,
  },

  icon: {
    marginTop: 3,
  },
})

export default LanguageSelection
