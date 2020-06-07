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
        Выберите время доставки
      </Text>
      <Text size={16} style={styles.subtitle}>
        Еда начнет готовиться в наилучшее время перед достакой, для того, чтобы
        ваш заказ был доставлен к вам свежим.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  subtitle: {
    marginTop: 15.5,
    marginBottom: 26,
  },
})

export default Header
