// PLUGINS IMPORTS //
import React from "react"
import { StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { RectButton, TouchableOpacity } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

import { AntDesign } from "@expo/vector-icons"
/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  title: string
}

const FilterItem: React.FC<PropsType> = (props) => {
  return (
    <RectButton style={styles.container}>
      <Text style={styles.text} color="white">
        {props.title}
      </Text>
      <TouchableOpacity style={styles.icon}>
        <AntDesign name="close" size={15} color="#c4c4c6" />
      </TouchableOpacity>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1824",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 32,
    alignItems: "center",
    marginRight: 8,
  },

  text: {
    marginRight: 8,
  },

  icon: {
    marginTop: 3,
    marginRight: -3,
  },
})

export default FilterItem
