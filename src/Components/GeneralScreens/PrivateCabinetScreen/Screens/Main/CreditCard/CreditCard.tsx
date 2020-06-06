// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import Button from "../../../../../Shared/Components/Button/Button"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const CreditCard: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text weight="bold" size={20} style={styles.title}>
        Карта оплаты
      </Text>
      <Button
        buttonStyle={{
          marginTop: 16,
          marginBottom: 35,
          backgroundColor: "#96A637",
          borderRadius: 6,
        }}
        rectStyle={{
          width: 315,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
        text={"Привязать карту"}
        textStyle={{ color: "white", letterSpacing: 0.3, fontSize: 16 }}
      />
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {},

  title: {
    marginTop: 23,
  },
})

export default CreditCard
