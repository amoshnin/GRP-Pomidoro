// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //
import SelectedIngridientItem from "./SelectedIngridientItem/SelectedIngridientItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  CurrentPizzaIngredients: Array<any>

  removeFullIngridientActionCreator: (ingridientName: string) => void
}

const SelectedIngridientsListSection: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.scroll_wrapper}>
      <Text style={styles.text}>Всегда входит в стоимость: </Text>
      <SelectedIngridientItem
        removeFullIngridientActionCreator={
          props.removeFullIngridientActionCreator
        }
        name={"Моцарелла"}
        count={1}
        price={0}
        image={""}
      />

      {props.CurrentPizzaIngredients.map((ingridient: any) => {
        return (
          <SelectedIngridientItem
            removeFullIngridientActionCreator={
              props.removeFullIngridientActionCreator
            }
            name={ingridient.name}
            count={ingridient.count}
            price={ingridient.price}
            image={ingridient.image}
          />
        )
      })}
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  scroll_wrapper: {
    position: "absolute",
    marginTop: -10,
  },

  text: {
    letterSpacing: 0.3,
  },
})

export default SelectedIngridientsListSection
