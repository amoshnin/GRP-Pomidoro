// PLUGINS IMPORTS //
import React from "react"

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
  return (
    <>
      <OrdersList
        title={"История заказов"}
        titleStyle={{
          marginTop: 23,
        }}
        orders={props.OrdersList}
        showFullList={false}
        showTiming={false}
        shwowDeliveryStatus={false}
      />

      <Button
        onPress={() => {
          props.navigation.navigate("OrdersScreen")
        }}
        text={"Показавать все заказы"}
        buttonStyle={{
          borderRadius: 20,
          backgroundColor: "#EAEAEB",
          marginTop: 20,
          marginBottom: 36,
        }}
        rectStyle={{
          width: 315,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </>
  )
}

export default OrdersListsSection
