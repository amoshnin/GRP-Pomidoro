// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const SuccesfulPaymentScreen: React.FC<PropsType> = (props) => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    ></ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
})

export default SuccesfulPaymentScreen
