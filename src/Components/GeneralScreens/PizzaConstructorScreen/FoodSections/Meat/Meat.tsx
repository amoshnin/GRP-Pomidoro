// PLUGINS IMPORTS //
import React from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //
import FoodItem from "../Shared/FoodItem/FoodItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  route: any
}

const Meat: React.FC<PropsType> = (props) => {
  const IngredientsList = [
    {
      image: "",
      name: "Курица",
      price: 30,
    },
    {
      image: "",
      name: "Курица",
      price: 30,
    },
    {
      image: "",
      name: "Курица",
      price: 30,
    },
    {
      image: "",
      name: "Курица",
      price: 30,
    },
    {
      image: "",
      name: "Куриssца",
      price: 30,
    },
    {
      image: "",
      name: "Курица",
      price: 30,
    },
  ]

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
      <View style={styles.container}>
        {IngredientsList.map((ingredient: any) => {
          return <FoodItem ingredient={ingredient} />
        })}
      </View>
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 16,
  },

  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
})

export default Meat
