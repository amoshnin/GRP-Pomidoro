// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "../../../../Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  productsList: Array<any>
}

const OrderProductsSection: React.FC<PropsType> = (props) => {
  const [totalPrice, setTotalPrice] = useState(0 as number)

  useEffect(() => {
    setTotalPrice(props.productsList.reduce((a, b) => a + (b["price"] || 0), 0))
  }, [])

  return (
    <View style={styles.container}>
      {props.productsList.map((product: any) => {
        return (
          <>
            <View style={styles.item_wrap}>
              <Text size={16}>
                {product.name} x {product.count}шт
              </Text>
              <Text size={16}>{product.price} ₴ </Text>
            </View>
            <View style={styles.divider} />
          </>
        )
      })}
      <View style={styles.item_wrap}>
        <Text size={16} weight="bold">
          Общая сумма:
        </Text>
        <Text size={16} weight="bold">
          {totalPrice} ₴
        </Text>
      </View>
      <Button
        text="Добавить весь заказ в корзину"
        buttonStyle={{
          backgroundColor: "#96A637",
          height: 50,
          width: 315,
          marginTop: 24.68,
          borderRadius: 6,
        }}
        textStyle={{
          color: "white",
        }}
      />
      <Button
        text="Связаться с оператором"
        buttonStyle={{
          height: 50,
          width: 315,
          marginTop: 9,
          marginBottom: 9,
          borderRadius: 6,
        }}
      />
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 23.32,
  },

  item_wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  divider: {
    borderTopColor: "#DCDCDC",
    borderTopWidth: 1,
    marginVertical: 13.5,
  },
})

export default OrderProductsSection
