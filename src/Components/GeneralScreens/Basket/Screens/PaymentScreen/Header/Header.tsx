// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Header: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text size={30} weight="bold">
        Подтверждение заказа
      </Text>
      <View style={styles.divider} />
      <View style={styles.text_wrap}>
        <Text size={20} weight="bold" style={styles.subtitle}>
          Время доставки
        </Text>
        <Text>Сегодня в 11:00</Text>
      </View>
      <View style={styles.divider} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },

  text_wrap: {
    marginVertical: 9,
    marginTop: 4,
  },

  subtitle: {
    marginBottom: 6,
  },

  divider: {
    borderTopColor: "#1A1824",
    borderWidth: 0.5,
    opacity: 0.2,
    marginVertical: 12,
  },
})

export default Header
