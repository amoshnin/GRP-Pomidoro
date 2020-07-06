// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //
import FakeInputComponent from "../Credentials/Components/FakeInputComponent/FakeInputComponent"

import Text from "~/Components/Shared/Components/Text/Text"
import Button from "~/Components/Shared/Components/Button/Button"

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
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text weight="bold" size={20} style={styles.title}>
        {t("PrivateCabinetScreen.CreditCard.КартаОплаты")}
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
          text={t("PrivateCabinetScreen.CreditCard.ПривязатьКарту")}
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
