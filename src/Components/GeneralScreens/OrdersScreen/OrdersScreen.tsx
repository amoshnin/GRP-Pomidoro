// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import OrdersList from "../../Shared/Sections/OrdersList/OrdersList"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const OrdersScreen: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.container}>
      <OrdersList
        title={"Заказы"}
        titleStyle={{
          fontSize: 30,
          letterSpacing: 0.3,
        }}
        orders={[
          [
            "Паперони спайс × 2шт",
            "Четыре мяса × 1 шт ",
            "Конкорд × 1 шт",
            "Pepsi 1литр × 1 шт",
          ],
          [
            "Паперони спайс × 2шт",
            "Четыре мяса × 1 шт ",
            "Конкорд × 1 шт",
            "Pepsi 1литр × 1 шт",
          ],
        ]}
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
})

export default OrdersScreen
