// PLUGINS IMPORTS //
import React from "react"
import { View, Image, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //
import OrderItem from "./OrderItem/OrderItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  title: string
  titleStyle?: any
  orders: Array<{
    date: string
    deliveryStatus: string
    products: Array<{ title: string; count: string | number }>
  }>
  showFullList: boolean
  showTiming: boolean
  shwowDeliveryStatus: boolean
}

const OrdersList: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()

  return (
    <>
      <Text weight="bold" size={20} style={props.titleStyle}>
        {props.title}
      </Text>

      {props.orders.length > 0 ? (
        props.orders.map(
          (order: {
            date: string
            deliveryStatus: string
            products: Array<{ title: string; count: string | number }>
          }) => {
            return (
              <OrderItem
                title={`${order.date} - ${order.deliveryStatus}`}
                productsList={order.products}
                buttonText={t("OrdersScreen.ДобавитьЗаказВКорзину")}
                showTiming={props.showTiming}
              />
            )
          }
        )
      ) : (
        <View style={[styles.container, { marginTop: 120 }]}>
          <Image
            style={styles.image}
            source={require("~/Images/orders-empty.png")}
          />
          <Text weight="bold" size={30} style={styles.title}>
            {t("OrdersScreen.EmptyCase.EmptyCaseTitle")}
          </Text>
          <Text style={styles.subtitle} size={16}>
            {t("OrdersScreen.EmptyCase.PPEmptyCaseSubtitle")}
          </Text>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 21,
    alignItems: "center",
  },

  image: {
    marginBottom: 31.03,
  },

  title: {
    letterSpacing: 0.3,
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    width: 226,
    marginTop: 19,
  },
})

export default OrdersList
