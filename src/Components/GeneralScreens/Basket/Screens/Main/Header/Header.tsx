// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  productsCount: number
}

const Header: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text size={30} weight="bold">
        Корзина
      </Text>
      <Text size={16}>{props.productsCount} items added</Text>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 26.75,
  },
})

export default Header
