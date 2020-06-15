// PLUGINS IMPORTS //
import React, { useEffect, useState } from "react"
import { ScrollView } from "react-native"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import ProductsListSection from "../../../../Shared/Sections/ProductsListSection/ProductsListSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any
  CertainGroupProductData: any

  getCertainGroupProductDataThunkCreator: (groupId: number) => any
}

const Main: React.FC<PropsType> = (props) => {
  const [name, setName] = useState(null as string | null)

  useEffect(() => {
    props
      .getCertainGroupProductDataThunkCreator(props.route.params.productId)
      .then(() => {
        setName(props.CertainGroupProductData.name)
      })
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header navigation={props.navigation} route={props.route} />
      <ProductsListSection navigation={props.navigation} />
    </ScrollView>
  )
}

export default Main
