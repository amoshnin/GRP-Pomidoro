// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { RadioButton } from "react-native-paper"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const Body: React.FC<PropsType> = (props) => {
  const [checkedValue, setCheckedValue] = useState(null as string | null)

  const PaymentMethods = [
    {
      title: "Карта ** 5443 (+50 ₴ к сумме)",
      description: "Курьер принесет с собой POS терминал ",
    },
    {
      title: "Наличными курьеру",
      description: null,
    },
    {
      title: "Картой курьеру",
      description: "Курьер принесет с собой POS терминал",
    },
    {
      title: "Оплатить другой картой",
      description: null,
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
                  setCheckedValue(paymentMethod.title)
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

      <View style={styles.button}>
        <Text size={16} weight="bold" color="white">
          475 ₴
        </Text>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("PaymentScreen")}
        >
          <Text size={16} weight="bold" color="white">
            Перейти к оплате
          </Text>
        </TouchableOpacity>
      </View>
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

  button: {
    marginTop: 215,
    backgroundColor: "#96A637",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18.5,
    paddingVertical: 15,
    borderRadius: 6,
  },
})

export default Body
