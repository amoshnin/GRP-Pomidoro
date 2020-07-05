// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  totalPrice: number
}

const Header: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text size={16}>Денег к оплате</Text>
      <Text size={30} weight="bold" style={styles.price_text}>
        {props.totalPrice} ₴
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25.79,
    marginBottom: 48.57,
  },

  price_text: {
    letterSpacing: 0.3,
    marginTop: 5.64,
  },
})

export default Header
