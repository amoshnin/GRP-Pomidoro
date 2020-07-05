// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { RadioButton } from "react-native-paper"
import Text from "~/Components/Shared/Components/Text/Text"
import PayButton from "~/Components/Shared/Components/PayButton/PayButton"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  totalPrice: number
  cardNum: string

  setPaymentMethodActionCreator: (paymentMethod: string) => void
}

const Body: React.FC<PropsType> = (props) => {
  const [checkedValue, setCheckedValue] = useState(
    `Наличными курьеру` as string | null
  )

  const PaymentMethods = [
    {
      title: props.cardNum
        ? `Карта ** ${props.cardNum} (+50 ₴ к сумме)`
        : `Добавить карту`,
      description: props.cardNum && "Курьер принесет с собой POS терминал",
    },
    {
      title: "Наличными курьеру",
      description: null,
    },
    {
      title: "Картой курьеру",
      description: "Курьер принесет с собой POS терминал",
    },
  ]

  return (
    <View style={styles.container}>
      {PaymentMethods.map(
        (paymentMethod: { title: string; description: string | null }) => {
          return (
            <View style={styles.item_wrap}>
              <RadioButton
                uncheckedColor="silver"
                value={paymentMethod.title}
                status={
                  checkedValue === paymentMethod.title ? "checked" : "unchecked"
                }
                color="#96A637"
                onPress={() => {
                  paymentMethod.title === "Добавить карту"
                    ? props.navigation.navigate("PrivateCabinetScreen")
                    : setCheckedValue(paymentMethod.title)
                }}
              />
              <View style={styles.item_text_wrap}>
                <Text size={16} weight="bold">
                  {paymentMethod.title}
                </Text>
                {paymentMethod.description ? (
                  <Text size={16}>{paymentMethod.description}</Text>
                ) : null}
              </View>
            </View>
          )
        }
      )}

      <PayButton
        navigation={props.navigation}
        price={props.totalPrice}
        text="Перейти к оплате"
        destination="PaymentScreen"
        saveFunction={() =>
          props.setPaymentMethodActionCreator(checkedValue as string)
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: -38,
  },

  item_wrap: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },

  item_text_wrap: {
    marginLeft: 7,
    flexDirection: "column",
  },
})

export default Body
