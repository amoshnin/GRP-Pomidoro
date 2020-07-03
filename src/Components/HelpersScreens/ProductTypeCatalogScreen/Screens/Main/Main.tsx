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
}

const Main: React.FC<PropsType> = (props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header navigation={props.navigation} route={props.route} />
      <ProductsListSection navigation={props.navigation} />
    </ScrollView>
  )
}

export default Main
