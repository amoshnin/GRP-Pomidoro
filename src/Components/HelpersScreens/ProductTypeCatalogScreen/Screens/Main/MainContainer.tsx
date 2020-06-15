// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Main from "./Main"

// EXTRA IMPORTS //
import { AppStateType } from "../../../../../Redux/ReduxStore"
import { getCertainGroupProductDataThunkCreator } from "~/Redux/Reducers/FoodListReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  route: any
  CertainGroupProductData: any
}

type MapDispatchToPropsType = {
  getCertainGroupProductDataThunkCreator: (groupId: number) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    route: props.route,
    CertainGroupProductData: state.FoodListState.CertainGroupProductData,
  }
}

const MainContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getCertainGroupProductDataThunkCreator: getCertainGroupProductDataThunkCreator,
    }
  )
)(Main)

export default MainContainer
