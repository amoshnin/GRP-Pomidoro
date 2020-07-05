// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  bonusesCount: string | number | null
}

const Bonuses: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text weight="bold" size={20} style={styles.title}>
        Бонусы
      </Text>
      <View style={styles.box_wrap}>
        <Text size={16} style={styles.text}>
          У вас
        </Text>
        <Text weight="bold" size={30}>
          {props.bonusesCount || "0"}
        </Text>
        <Text size={16} style={styles.text}>
          бонусов
        </Text>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}> Узнать как потратить</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginBottom: 35,
  },

  title: {
    letterSpacing: 0.3,
  },

  box_wrap: {
    marginTop: 21,
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#cdcdcd",
    alignItems: "center",
  },

  text: {
    letterSpacing: 0.1,
    lineHeight: 26,
  },

  divider: {
    borderColor: "#EAEAEB",
    borderBottomWidth: 1,
    width: "100%",
    marginTop: 13,
  },

  button: {
    alignItems: "center",
  },

  button_text: {
    marginTop: 19,
    paddingBottom: 3,
    color: "#96A637",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },
})

export default Bonuses
