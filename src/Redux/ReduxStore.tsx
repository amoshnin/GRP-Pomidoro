// REDUX IMPORTS //
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"

// REDUCERS IMPORTS //
import PizzaConstructorReducer from "./Reducers/PizzaConstructorReducer"
import FoodListReducer from "./Reducers/FoodListReducer"

////////////////////////////////////////////////////////////////////////

let reducers = combineReducers({
  // Food List Reducer
  FoodListState: FoodListReducer,

  // Pizza constructor scree
  PizzaConstructorState: PizzaConstructorReducer,
})

type reducersType = typeof reducers
export type AppStateType = ReturnType<reducersType>

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesTypes<T>>

const composeEnhancers = compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store
