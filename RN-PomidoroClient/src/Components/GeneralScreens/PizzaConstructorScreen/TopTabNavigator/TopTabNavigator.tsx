// PLUGINS IMPORTS //
import React from "react"
import { StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //
import Meat from "../FoodSections/Meat/Meat"
import Sauces from "../FoodSections/Sauces/Sauces"
import Vegetables from "../FoodSections/Vegetables/Vegetables"
import Cheeses from "../FoodSections/Cheeses/Cheeses"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////
type PropsType = {}

const TopTabNavigator: React.FC<PropsType> = (props) => {
  const Tab = createMaterialTopTabNavigator()
  const { t } = useTranslation()

  return (
    <Tab.Navigator
      tabBarPosition="top"
      initialRouteName="MeatSection"
      tabBarOptions={{
        style: {
          elevation: 0,
          borderBottomColor: "#DCDCDC",
          borderBottomWidth: 1,
        },
        activeTintColor: "#b1b2b4",
        inactiveTintColor: "#7b7b7b",
      }}
    >
      <Tab.Screen
        name="MeatSection"
        component={Meat}
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <Text weight="bold" size={14.1} style={styles.text}>
                {t("PizzaConstructorScreen.TabNavigator.Мясо")}
              </Text>
            ) : (
              <Text
                weight="bold"
                size={14.1}
                style={{ ...styles.text, opacity: 0.5 }}
              >
                {t("PizzaConstructorScreen.TabNavigator.Мясо")}
              </Text>
            ),
        }}
      />
      <Tab.Screen
        name="SaucesSection"
        component={Sauces}
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <Text weight="bold" size={14.1} style={styles.text}>
                {t("PizzaConstructorScreen.TabNavigator.Соусы")}
              </Text>
            ) : (
              <Text
                weight="bold"
                size={14.1}
                style={{ ...styles.text, opacity: 0.5 }}
              >
                {t("PizzaConstructorScreen.TabNavigator.Соусы")}
              </Text>
            ),
        }}
      />
      <Tab.Screen
        name="VegetablesSection"
        component={Vegetables}
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <Text weight="bold" size={14.1} style={styles.text}>
                {t("PizzaConstructorScreen.TabNavigator.Овощные")}
              </Text>
            ) : (
              <Text
                weight="bold"
                size={14.1}
                style={{
                  ...styles.text,
                  opacity: 0.5,
                }}
              >
                {t("PizzaConstructorScreen.TabNavigator.Овощные")}
              </Text>
            ),
        }}
      />
      <Tab.Screen
        name="CheesesSection"
        component={Cheeses}
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <Text weight="bold" size={14.1} style={styles.text}>
                {t("PizzaConstructorScreen.TabNavigator.Сыры")}
              </Text>
            ) : (
              <Text
                weight="bold"
                size={14.1}
                style={{ ...styles.text, opacity: 0.5 }}
              >
                {t("PizzaConstructorScreen.TabNavigator.Сыры")}
              </Text>
            ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    letterSpacing: 0.3,
  },
})

export default TopTabNavigator
