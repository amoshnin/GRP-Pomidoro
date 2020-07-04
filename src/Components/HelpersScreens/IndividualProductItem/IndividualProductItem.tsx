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
    name: string,
    price: string,
    image: string,
    size: string,
    ingredients: Array<string>
  ) => any
}

const IndividualProductItem: React.FC<PropsType> = (props) => {
  const {
    productTitle,
    image,
    productPrice24,
    productPrice32,
    productPrice40,
    productType,
    ingridientsList,
  } = props.route.params

  return (
    <>
      <Header image={image} navigation={props.navigation} />

      <Body
        navigation={props.navigation}
        productTitle={productTitle}
        image={image}
        ingridientsList={ingridientsList}
        productPrice24={productPrice24}
        productPrice32={productPrice32}
        productPrice40={productPrice40}
        productType={productType}
        addItemToOrderActionCreator={props.addItemToOrderActionCreator}
      />
    </>
  )
}

export default IndividualProductItem
