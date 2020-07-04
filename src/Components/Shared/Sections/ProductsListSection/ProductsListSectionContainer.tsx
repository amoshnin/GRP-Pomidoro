// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import ProductsListSection from "./ProductsListSection"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { ActionCreatorsList } from "~/Redux/Reducers/OrderingReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {}

type MapDispatchToPropsType = {
  addItemToOrderActionCreator: (
    name: string,
    price: string,
    image: string,
    size: string,
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
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      addItemToOrderActionCreator:
        ActionCreatorsList.addItemToOrderActionCreator,
    }
  )
)(ProductsListSection)

export default ProductsListSectionContainer
