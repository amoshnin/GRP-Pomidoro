// PLUGINS IMPORTS //
import React from "react"
import { View, ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import RouteSection from "./RouteSection/RouteSection"
import OrderDataSection from "./OrderDataSection/OrderDataSection"
import OrderProductsDataSection from "./OrderProductsDataSection/OrderProductsDataSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  route: any
}

const BottomSection: React.FC<PropsType> = (props) => {
  const ProductsList = [
    {
      name: "Пеперони спайс",
      count: 2,
      price: 700,
    },
    {
      name: "Четыре мяса",
      count: 9,
      price: 700,
    },
    {
      name: "Pepsi",
      count: 12,
      price: 500,
    },
  ]

  return (
    <ScrollView style={styles.container}>
      <RouteSection />
      <View style={styles.divider} />
      <OrderDataSection
        orderID={props.route.params.orderID}
        date={"24.03.2019"}
        delivered={false}
      />
      <OrderProductsDataSection productsList={ProductsList} />
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: 34,
    borderTopLeftRadius: 34,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    height: "70%",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },

  divider: {
    borderTopColor: "#DCDCDC",
    borderTopWidth: 1,
    marginVertical: 14,
  },
})

export default BottomSection
