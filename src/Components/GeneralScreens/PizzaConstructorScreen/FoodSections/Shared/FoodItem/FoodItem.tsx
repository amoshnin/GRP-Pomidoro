// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Entypo } from "@expo/vector-icons"
import { BorderlessButton } from "react-native-gesture-handler"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  ingredient: any
  CurrentPizzaIngredients: Array<any>
  CurrentPizzaPrice: number
  CurrentPizzaSize: number

  addIngredientActionCreator: (ingredientData: any) => void
  removeIngredientActionCreator: (ingredientName: string) => void
  clearIngredientsActionCreator: () => void
  addPizzaPrice: (addedPizzaPrice: number) => void
  substractPizzaPrice: (substractPizzaPrice: number) => void
}

const FoodItem: React.FC<PropsType> = (props) => {
  const [buttonOpened, setButtonOpened] = useState(false as boolean)
  const [count, setCount] = useState(0 as number)

  useEffect(() => {
    props.navigation.addListener("blur", () => {
      props.clearIngredientsActionCreator()
      setCount(0)
    })
  }, [props.navigation])

  const addIngridient = () => {
    props.addIngredientActionCreator({
      name: props.ingredient.name,
      image: props.ingredient.image,
      price: props.ingredient.price,
      count: 1,
    })

    setCount(count + 1)
    props.addPizzaPrice(props.ingredient.price)
  }

  const removeIngredient = () => {
    count !== 0 && props.removeIngredientActionCreator(props.ingredient.name)

    count !== 0 && setCount(count - 1)
  }

  return (
    <View style={styles.container}>
      <Image source={require("~/Images/constructor-item-3.png")} />
      <Text size={16} style={styles.name}>
        {props.ingredient.name}
      </Text>
      <Text style={styles.price}>{props.ingredient.price} ₴</Text>
      <View>
        {!buttonOpened ? (
          <TouchableOpacity onPress={() => setButtonOpened(true)}>
            <Text weight="bold" color="#96A637" style={styles.btn}>
              Добавить
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.btns_wrap}>
            <BorderlessButton>
              <Entypo
                name="minus"
                size={19}
                color="#96A637"
                onPress={removeIngredient}
              />
            </BorderlessButton>
            <Text size={14.3} weight="bold">
              {count}
            </Text>
            <BorderlessButton>
              <Entypo
                name="plus"
                size={19}
                color="#96A637"
                onPress={addIngridient}
              />
            </BorderlessButton>
          </View>
        )}
      </View>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    width: 110,
    marginRight: 15,
    alignItems: "center",
  },

  name: {
    textAlign: "center",
  },

  price: {
    letterSpacing: 0.3,
    opacity: 0.6,
  },

  btn: {
    marginTop: 5,
  },

  btns_wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 100,
    height: 30,
    marginTop: 6,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15.96,
  },
})

export default FoodItem
