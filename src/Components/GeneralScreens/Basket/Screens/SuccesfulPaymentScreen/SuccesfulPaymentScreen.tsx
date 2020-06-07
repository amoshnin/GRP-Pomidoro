// PLUGINS IMPORTS //
import React from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import Button from "~/Components/Shared/Components/Button/Button"

// COMPONENTS IMPORTS //
import ProductsBasketList from "~/Components/Shared/Sections/ProductsBasketList/ProductsBasketList"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const SuccesfulPaymentScreen: React.FC<PropsType> = (props) => {
  const Products = [
    {
      title: "Парерони чиз",
      image: "",
      size: 24,
      price: 99,
      count: 2,
      allowEdit: true,
    },
    {
      title: "Парерони чиз",
      image: "",
      size: 24,
      price: 99,
      count: 2,
      allowEdit: true,
    },
  ]

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text weight="bold" size={30}>
        Заказ успешно оформлен
      </Text>
      <Button
        text="Отследить заказ"
        buttonStyle={{
          marginTop: 30,
          backgroundColor: "#96A637",
          width: 315,
          height: 50,
          borderRadius: 6,
          alignSelf: null,
        }}
        textStyle={{
          color: "white",
          fontSize: 16,
        }}
      />
      <Button
        text="На главную"
        buttonStyle={{
          marginTop: 19,
          width: 315,
          height: 50,
          borderRadius: 6,
          alignSelf: null,
        }}
        textStyle={{
          fontSize: 16,
        }}
      />
      <View style={styles.divider} />
      <ProductsBasketList Products={Products} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 26,
  },

  divider: {
    borderTopColor: "#1A1824",
    borderWidth: 0.5,
    opacity: 0.2,
    marginVertical: 20,
  },
})

export default SuccesfulPaymentScreen
