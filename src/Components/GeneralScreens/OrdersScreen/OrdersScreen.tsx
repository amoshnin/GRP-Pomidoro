// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //
import OrdersList from "~/Components/Shared/Sections/OrdersList/OrdersList"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  OrdersList: Array<{
    date: string
    deliveryStatus: string
    products: Array<{ title: string; count: string | number }>
  }>
}

const OrdersScreen: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()

  return (
    <ScrollView style={styles.container}>
      <OrdersList
        title={t("OrdersScreen.Заказы")}
        titleStyle={styles.section_title}
        orders={props.OrdersList}
        shwowDeliveryStatus={true}
        showTiming={true}
        showFullList={true}
      />
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30.19,
  },

  section_title: {
    fontSize: 30,
    letterSpacing: 0.3,
  },
})

export default OrdersScreen
