// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const RegionSelectionScreen: React.FC<PropsType> = (props) => {
  const RegionsList = [
    "Бровары",
    "Петропавловская",
    "Чайки",
    "Буча",
    "Ирпень",
    "Борисполь",
  ]

  return (
    <View style={styles.container}>
      <Text weight="bold" size={30} style={styles.title}>
        Выберите ваш регион:
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },

  title: {
    width: 249,
    marginBottom: 43,
  },
})

export default RegionSelectionScreen
