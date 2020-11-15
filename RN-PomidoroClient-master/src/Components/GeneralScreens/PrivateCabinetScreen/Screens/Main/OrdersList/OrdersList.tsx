// PLUGINS IMPORTS //
import React from "react"
import { StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //
import OrdersList from "~/Components/Shared/Sections/OrdersList/OrdersList"
import Button from "~/Components/Shared/Components/Button/Button"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  OrdersList: Array<{
    date: string
    deliveryStatus: string
    products: Array<{ title: string; count: string | number }>
  }>
}

const OrdersListsSection: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()

  return (
    <>
      <OrdersList
        title={t("PrivateCabinetScreen.OrdersList.ИсторияЗаказов")}
        titleStyle={styles.section_title}
        orders={props.OrdersList}
        showFullList={false}
        showTiming={false}
        shwowDeliveryStatus={false}
      />

      <Button
        onPress={() => {
          props.navigation.navigate("OrdersScreen")
        }}
        text={t("PrivateCabinetScreen.OrdersList.ПоказатьВсеЗаказы")}
        buttonStyle={styles.button}
        rectStyle={styles.button_rect}
      />
    </>
  )
}

const styles = StyleSheet.create({
  section_title: {
    marginTop: 23,
  },

  button: {
    borderRadius: 20,
    backgroundColor: "#EAEAEB",
    marginTop: 20,
    marginBottom: 36,
  },

  button_rect: {
    width: 315,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default OrdersListsSection
