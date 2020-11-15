// PLUGINS IMPORTS //
import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import SalesScreen from "./SalesScreen"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { getSalesListThunkCreator } from "~/Redux/Reducers/ExtraInfoReducers/ExtraInfoGetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any

  SalesList: Array<{
    title: string
    image: string
    description: string
    type: string
  }>
}

type MapDispatchToPropsType = {
  getSalesListThunkCreator: () => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,

    SalesList: state.ExtraInfoGetState.SalesList,
  }
}

const SalesScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getSalesListThunkCreator: getSalesListThunkCreator,
    }
  )
)(SalesScreen)

export default SalesScreenContainer
