// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import ProductsListSection from "./ProductsListSection"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { ActionCreatorsList } from "~/Redux/Reducers/OrderingReducers/OrderingSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {}

type MapDispatchToPropsType = {
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

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
  }
}

const ProductsListSectionContainer = compose(
  connect(mapStateToProps, {
    addItemToOrderActionCreator: ActionCreatorsList.addItemToOrderActionCreator,
  })
)(ProductsListSection)

export default ProductsListSectionContainer
