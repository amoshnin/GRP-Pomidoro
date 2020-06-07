// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, Image, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Entypo } from "@expo/vector-icons"
import { BorderlessButton } from "react-native-gesture-handler"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
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

class FoodItem extends React.Component<PropsType> {
  state = {
    buttonOpened: false as boolean,
    count: 0 as number,
  }

  componentWillUnmount() {
    this.props.clearIngredientsActionCreator()
  }

  render() {
    const addIngridient = () => {
      this.props.addIngredientActionCreator({
        name: this.props.ingredient.name,
        image: this.props.ingredient.image,
        price: this.props.ingredient.price,
        count: 1,
      })

      this.setState({ count: this.state.count + 1 })
      this.props.addPizzaPrice(this.props.ingredient.price)
    }

    const removeIngredient = () => {
      this.state.count !== 0 &&
        this.props.removeIngredientActionCreator(this.props.ingredient.name)

      this.state.count !== 0 && this.setState({ count: this.state.count - 1 })
    }

    return (
      <View style={styles.container}>
        <Image source={require("~/Images/constructor-item-3.png")} />
        <Text size={16} style={styles.name}>
          {this.props.ingredient.name}
        </Text>
        <Text style={styles.price}>{this.props.ingredient.price} ₴</Text>
        <View>
          {!this.state.buttonOpened ? (
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  buttonOpened: true,
                })
              }
            >
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
                {this.state.count}
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
