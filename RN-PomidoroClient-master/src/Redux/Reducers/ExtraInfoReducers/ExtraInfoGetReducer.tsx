//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import { AppStateType, InferActionsTypes } from "../../ReduxStore"
import { baseUrl } from "~/Redux/Reducers/Helpers/Info"
import axios from "axios"

////////////////////////////////////////////////////////////////////////

let initialState = {
  SalesList: [] as Array<{
    title: string
    image: string
    description: string
    type: string
  }>,
}

export type initialStateType = typeof initialState

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    *REDUCER*   //
const ExtraInfoGetReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  if (action.type === "SET_SALES_LIST") {
    return {
      ...state,
      SalesList: action.salesList,
    }
  }

  return state
}

export default ExtraInfoGetReducer

//////////////////////////////////////////////////////////////////////////////////////
type ActionsTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setSalesListActionCreator: (
    salesList: Array<{
      title: string
      image: string
      description: string
      type: string
    }>
  ) =>
    ({
      type: "SET_SALES_LIST",
      salesList,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

// Get sales list
export const getSalesListThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios.get(`${baseUrl}/client/promo/`).then((res: any) => {
      const data = res.data.results.map((sale: any) => {
        return {
          title: sale.title,
          type: sale.promo_type,
          description: sale.description,
          image: sale.images[0].file,
          id: sale.id,
        }
      })
      dispatch(ActionCreatorsList.setSalesListActionCreator(data))
    })
  }
}
