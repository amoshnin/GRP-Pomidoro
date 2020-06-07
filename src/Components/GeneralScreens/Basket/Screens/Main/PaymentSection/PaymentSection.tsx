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

const PaymentSection: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text weight="bold" size={16} style={styles.text}>
        Итого к оплате
      </Text>
      <Text weight="bold" size={16} style={styles.text}>
        {props.totalPrice} ₴
      </Text>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: -12,
    paddingTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: "#A9A9A9",
  },

  text: {
    letterSpacing: 0.3,
  },
})

export default PaymentSection
