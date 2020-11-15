// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { RadioButton } from "react-native-paper"
import Text from "~/Components/Shared/Components/Text/Text"
import PayButton from "~/Components/Shared/Components/PayButton/PayButton"
import { useTranslation } from "react-i18next"

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
  const { t } = useTranslation()
  const [checkedValue, setCheckedValue] = useState(
    t("OrderingProcess.PaymemtMethods.НаличнымиКурьеру") as string | null
  )

  const PaymentMethods = [
    {
      title: props.cardNum
        ? `${t("OrderingProcess.PaymemtMethods.Карта")} ** ${
            props.cardNum
          } (+50 ₴ ${t("OrderingProcess.PaymemtMethods.кСумме")})`
        : t("OrderingProcess.PaymemtMethods.ДобавитьКарту"),
      description:
        props.cardNum && t("OrderingProcess.PaymemtMethods.PPКартаSubtitle"),
    },
    {
      title: t("OrderingProcess.PaymemtMethods.НаличнымиКурьеру"),
      description: null,
    },
    {
      title: t("OrderingProcess.PaymemtMethods.КартойКурьеру"),
      description: t("OrderingProcess.PaymemtMethods.PPКартойКурьеруSubtitle"),
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
                  paymentMethod.title ===
                  t("OrderingProcess.PaymemtMethods.ДобавитьКарту")
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
