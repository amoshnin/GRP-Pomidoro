// PLUGINS IMPORTS //
import React from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //
import SelectedIngridientItem from "./SelectedIngridientItem/SelectedIngridientItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  CurrentPizzaIngredients: Array<any>

  removeFullIngridientActionCreator: (ingridientName: string) => void
}

const SelectedIngridientsListSection: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()

  return (
    <ScrollView style={styles.scroll_wrapper}>
      <Text style={styles.text}>
        {t("PizzaConstructorScreen.IngridientsList.PPВсегдаВходитСтоимость")}
      </Text>
      <SelectedIngridientItem
        removeFullIngridientActionCreator={
          props.removeFullIngridientActionCreator
        }
        name={"Моцарелла"}
        count={1}
        price={0}
        image={""}
      />
      {props.CurrentPizzaIngredients.length > 0 && (
        <>
          <View style={styles.divider} />
          <Text style={styles.text}>
            {" "}
            {t("PizzaConstructorScreen.IngridientsList.PPДобавки")}:
          </Text>
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
        </>
      )}
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

  divider: {
    borderTopColor: "silver",
    borderTopWidth: 1,
    marginVertical: 10,
  },
})

export default SelectedIngridientsListSection
