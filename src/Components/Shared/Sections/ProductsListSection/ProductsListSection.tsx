// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import ProductItem from "./ProductItem/ProductItem"
import EmptyProductsList from "./EmptyProductsList/EmptyProductsList"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  addItemToOrderActionCreator: (
    name: string,
    price: string,
    size: string,
    ingredients: Array<string>
  ) => void
}

const ProductListSection: React.FC<PropsType> = (props) => {
  const data = [
    {
      title: "Паперони спайс",
      ingridientsList: [
        "Соус томатный",
        "соус томатный",
        "соус томатный",
        "соус томатный",
      ],
      productType: ["Мясо", "сыр", "салями"],
      price24: 99,
      price32: 164,
      price40: 199,
      image: "",
    },
    {
      title: "Паперони спайс",
      ingridientsList: [
        "Соус томатный",
        "соус томатный",
        "соус томатный",
        "соус томатный",
      ],
      productType: ["Мясо", "сыр", "салями"],
      price24: 99,
      price32: 164,
      price40: 199,
      image: "",
    },
    {
      title: "Паперони спайс",
      ingridientsList: [
        "Соус томатный",
        "соус томатный",
        "соус томатный",
        "соус томатный",
      ],
      productType: ["Мясо", "сыр", "салями"],
      price24: 99,
      price32: 164,
      price40: 199,
      image: "",
    },
  ]

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        data.map((product: any) => {
          return (
            <ProductItem
              key={product.title}
              navigation={props.navigation}
              title={product.title}
              image={product.image}
              ingridientsList={product.ingridientsList}
              productType={product.productType}
              price24={product.price24}
              price32={product.price32}
              price40={product.price40}
              addItemToOrderActionCreator={props.addItemToOrderActionCreator}
            />
          )
        })
      ) : (
        <EmptyProductsList />
      )}
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 23.26,
  },
})

export default ProductListSection
