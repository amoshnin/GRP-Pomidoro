// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, ScrollView, Image, StyleSheet } from "react-native"
import PayButton from "~/Components/Shared/Components/PayButton/PayButton"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //
import PizzaSizesSelector from "./PizzaSizesSelector/PizzaSizesSelector"
import TopTabNavigator from "./TopTabNavigator/TopTabNavigator"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  CurrentPizzaPrice: number
  CurrentPizzaSize: number

  changePizzaSize: (pizzaSize: number) => void
  addPizzaPrice: (addedPizzaPrice: number) => void
  substractPizzaPrice: (substractPizzaPrice: number) => void
}

const PizzaConstructorScreen: React.FC<PropsType> = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text weight="bold" size={20}>
          Конструктор пиццы
        </Text>
        <View style={styles.lists_wrap}>
          <View>
            <Image source={require("~/Images/pizza-constructor.png")} />
            <View></View>
          </View>
          <View>
            <PizzaSizesSelector
              containerStyle={{ flexDirection: "column" }}
              CurrentPizzaSize={props.CurrentPizzaSize}
              changePizzaSize={props.changePizzaSize}
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
          price={props.CurrentPizzaPrice}
          text="Оплатить"
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
