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
  TagsList: Array<any>

  getCertainCategoryFoodsListThunkCreator: (
    menuTitle: string,
    limit?: string
  ) => void
  addItemToOrderActionCreator: (
    title: string,
    price: string,
    originalPrice: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>,
    id: string
  ) => void
  getTagsListThunkCreator: () => void
}

const Main: React.FC<PropsType> = (props) => {
  const productId = props.route.params.productId

  useEffect(() => {
    props.getTagsListThunkCreator()
  }, [])

  useEffect(() => {
    props.getCertainCategoryFoodsListThunkCreator(productId)
  }, [productId])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header
        navigation={props.navigation}
        menuTitle={productId}
        TagsList={props.TagsList}
      />
      <ProductsListSection
        navigation={props.navigation}
        productsList={props.CurrentCategoryFoodsList}
        addItemToOrderActionCreator={props.addItemToOrderActionCreator}
      />
    </ScrollView>
  )
}

export default Main
