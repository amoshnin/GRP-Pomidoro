// PLUGINS IMPORTS //
import React from "react"
import { View, ScrollView, Image, StyleSheet } from "react-native"
import PayButton from "~/Components/Shared/Components/PayButton/PayButton"
import Text from "~/Components/Shared/Components/Text/Text"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //
import PizzaSizesSelector from "./PizzaSizesSelector/PizzaSizesSelector"
import SelectedIngridientsListSection from "./SelectedIngridientsListSection/SelectedIngridientsListSection"
import TopTabNavigator from "./TopTabNavigator/TopTabNavigator"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  CurrentPizzaIngredients: Array<any>
  CurrentPizzaPrice: number
  CurrentPizzaSize: number

  changePizzaSizeActionCreator: (pizzaSize: number) => void
  removeFullIngridientActionCreator: (ingridientName: string) => void
  clearConstructorPizzaInfoActionCreator: () => void
  addItemToOrderActionCreator: (
    title: string,
    price: string,
    originalPrice: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>,
    id: string
  ) => any
}

const PizzaConstructorScreen: React.FC<PropsType> = (props) => {
  const pizzaPrice =
    props.CurrentPizzaSize === 24
      ? 99
      : props.CurrentPizzaSize === 32
      ? 164
      : props.CurrentPizzaSize === 40
      ? 199
      : 0

  const price = pizzaPrice + props.CurrentPizzaPrice

  const { t } = useTranslation()

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text weight="bold" size={20}>
          {t("PizzaConstructorScreen.КонструкторПиццы")}
        </Text>
        <View style={styles.lists_wrap}>
          <View>
            <Image source={require("~/Images/pizza-constructor.png")} />
            <SelectedIngridientsListSection
              CurrentPizzaIngredients={props.CurrentPizzaIngredients}
              removeFullIngridientActionCreator={
                props.removeFullIngridientActionCreator
              }
            />
          </View>
          <View>
            <PizzaSizesSelector
              containerStyle={{ flexDirection: "column" }}
              CurrentPizzaSize={props.CurrentPizzaSize}
              changePizzaSizeActionCreator={props.changePizzaSizeActionCreator}
              price24={99}
              price32={164}
              price40={199}
            />
          </View>
        </View>
      </View>
      <TopTabNavigator />
      <View style={styles.container}>
        <PayButton
          buttonStyle={{
            marginBottom: 20,
            marginTop: 20,
          }}
          navigation={props.navigation}
          destination="BasketScreen"
          price={price}
          text={t("GeneralPhrases.Оплатить")}
          saveFunction={() => {
            props.addItemToOrderActionCreator(
              "Пицца на заказ",
              String(price),
              String(price),
              "",
              String(props.CurrentPizzaSize),
              "1",
              props.CurrentPizzaIngredients
            )

            props.clearConstructorPizzaInfoActionCreator()
          }}
        />
      </View>
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 19,
    marginHorizontal: 30,
  },

  lists_wrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
})

export default PizzaConstructorScreen
