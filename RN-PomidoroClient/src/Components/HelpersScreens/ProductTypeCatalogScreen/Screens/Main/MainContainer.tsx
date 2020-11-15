// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Main from "./Main"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { ActionCreatorsList } from "~/Redux/Reducers/OrderingReducers/OrderingSetReducer"
import {
  getCertainCategoryFoodsListThunkCreator,
  getTagsListThunkCreator,
} from "~/Redux/Reducers/FoodListReducers/FoodListGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  route: any

  CurrentCategoryFoodsList: Array<any>
  TagsList: Array<any>
}

type MapDispatchToPropsType = {
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

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    route: props.route,

    CurrentCategoryFoodsList: state.FoodListGetState.CurrentCategoryFoodsList,
    TagsList: state.FoodListGetState.TagsList,
  }
}

const MainContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      addItemToOrderActionCreator:
        ActionCreatorsList.addItemToOrderActionCreator,
      getCertainCategoryFoodsListThunkCreator,
      getTagsListThunkCreator,
    }
  )
)(Main)

export default MainContainer
