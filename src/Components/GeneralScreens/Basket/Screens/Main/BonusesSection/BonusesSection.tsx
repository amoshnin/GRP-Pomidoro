// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { TextInput } from "react-native-paper"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Ionicons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const BonusesSection: React.FC<PropsType> = (props) => {
  const [bottomOpened, setBottomOpened] = useState(false as boolean)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.top_wrap}
        onPress={() => setBottomOpened(!bottomOpened)}
      >
        <Text weight="bold" style={styles.title}>
          Потратить бонусы (У вас 365)
        </Text>

        <Ionicons
          name="ios-arrow-down"
          size={21}
          color="#1A1824"
          style={styles.icon}
        />
      </TouchableOpacity>
      {bottomOpened && (
        <View style={styles.bottom_wrap}>
          <Text>Сколько бонусов списать:</Text>
          <TextInput
            style={styles.input}
            underlineColor="silver"
            theme={{ colors: { primary: "#1A1824" } }}
          />
          <Text style={styles.bottom_subtitle}>
            1 бонус = 1 ₴. Макс. - 70% от заказа
          </Text>
        </View>
      )}
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 20.5,
    borderColor: "silver",
    borderWidth: 1,
    borderRadius: 20,
    paddingTop: 11,
    paddingBottom: 11,
    paddingHorizontal: 31,
  },

  top_wrap: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    letterSpacing: 0.3,
    marginRight: 10,
  },

  icon: {
    marginTop: 2,
  },

  bottom_wrap: {
    marginTop: 20.75,
  },

  input: {
    width: 265.44,
    height: 40,
    backgroundColor: "white",
  },

  bottom_subtitle: {
    marginTop: 14.5,
    marginBottom: 3,
  },
})

export default BonusesSection
