// PLUGINS IMPORTS //
import React from "react"

// COMPONENTS IMPORTS //
import Header from "./Header/Header"
import Body from "./Body/Body"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any

  addItemToOrderActionCreator: (
    title: string,
    price: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>
  ) => any
}

const IndividualProductItem: React.FC<PropsType> = (props) => {
  const { product } = props.route.params

  return (
    <>
      <Header image={product.image} navigation={props.navigation} />

      <Body
        navigation={props.navigation}
        product={product}
        addItemToOrderActionCreator={props.addItemToOrderActionCreator}
      />
    </>
  )
}

export default IndividualProductItem
