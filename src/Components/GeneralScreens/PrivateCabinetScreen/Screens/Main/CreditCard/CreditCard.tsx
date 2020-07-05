// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import Button from "../../../../../Shared/Components/Button/Button"

// COMPONENTS IMPORTS //
import FakeInputComponent from "../Credentials/Components/FakeInputComponent/FakeInputComponent"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  CreditCard: {
    cardNum: string
    CVV: string
    ExpDate: string
  }
}

const CreditCard: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text weight="bold" size={20} style={styles.title}>
        Карта оплаты
      </Text>
      {Object.values(props.CreditCard).length > 0 ? (
        <View style={styles.card_wrap}>
          <FakeInputComponent
            navigation={props.navigation}
            boldText={`****  ${
              props.CreditCard.cardNum && props.CreditCard.cardNum.slice(0, 4)
            }`}
            onPress={() => props.navigation.navigate("CreditCardChangeScreen")}
          />
        </View>
      ) : (
        <Button
          onPress={() => {
            props.navigation.navigate("CreditCardChangeScreen")
          }}
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
      )}
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {},

  title: {
    marginTop: 23,
  },

  card_wrap: {
    marginVertical: 10,
  },
})

export default CreditCard
