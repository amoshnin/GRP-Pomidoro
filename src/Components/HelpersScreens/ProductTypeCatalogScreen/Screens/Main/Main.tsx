// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { ScrollView } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import ProductsListSection from "~/Components/Shared/Sections/ProductsListSection/ProductsListSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any

  CurrentCategoryFoodsList: Array<any>

  getCertainCategoryFoodsListThunkCreator: (rawId: string) => void
  addItemToOrderActionCreator: (
    title: string,
    price: string,
    originalPrice: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>
  ) => void
}

const Main: React.FC<PropsType> = (props) => {
  const productId = props.route.params.productId

  useEffect(() => {
    props.getCertainCategoryFoodsListThunkCreator(productId)
  }, [])

  useEffect(() => {
    props.navigation.addListener("blur", () => {
      props.getCertainCategoryFoodsListThunkCreator("3")
    })
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header navigation={props.navigation} route={props.route} />
      <ProductsListSection
        navigation={props.navigation}
        productsList={props.CurrentCategoryFoodsList}
        addItemToOrderActionCreator={props.addItemToOrderActionCreator}
      />
    </ScrollView>
  )
}

export default Main
