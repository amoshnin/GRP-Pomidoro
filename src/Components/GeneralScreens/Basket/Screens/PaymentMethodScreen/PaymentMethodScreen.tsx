// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Body from "./Body/Body"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const PaymentMethodScreen: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text size={30} weight="bold">
        Способ оплаты
      </Text>
      <Header />
      <Body navigation={props.navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
})

export default PaymentMethodScreen
