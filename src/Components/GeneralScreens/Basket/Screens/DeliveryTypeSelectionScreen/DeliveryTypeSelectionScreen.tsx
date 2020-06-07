// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Body from "./Body/Body"

// EXTRA IMPORTS //
import Text from "~/Components/Shared/Components/Text/Text"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const DeliveryTypeSelectionScreen: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text size={30} weight="bold" style={styles.title}>
        Доставка
      </Text>
      <Body navigation={props.navigation} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },

  title: {
    marginTop: 39,
    letterSpacing: 0.3,
  },
})

export default DeliveryTypeSelectionScreen
