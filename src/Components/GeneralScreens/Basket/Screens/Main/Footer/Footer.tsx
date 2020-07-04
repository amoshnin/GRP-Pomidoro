// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const Footer: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => props.navigation.navigate("DeliveryTimeSelectionScreen")}
        text="Заказать сейчас"
        buttonStyle={{
          marginTop: 20,
          width: 315,
          height: 50,
          backgroundColor: "#96A637",
          borderRadius: 6,
        }}
        textStyle={{
          color: "white",
        }}
      />
      <Button
        text="Заказать на другое время"
        buttonStyle={{
          marginTop: 19,
          width: 315,
          height: 50,
          borderRadius: 6,
        }}
        textStyle={{
          color: "black",
        }}
      />
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {},
})

export default Footer
