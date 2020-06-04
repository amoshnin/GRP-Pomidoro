// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Dashboard: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.item_wrap}>
        <Feather name="menu" size={24} color="black" />
        <Text>Главная</Text>
      </View>
      <View style={styles.item_wrap}>
        <Feather name="menu" size={24} color="black" />
        <Text>Личный кабинет</Text>
      </View>
      <View style={styles.item_wrap}>
        <Feather name="menu" size={24} color="black" />
        <Text>Меню</Text>
      </View>
      <View style={styles.item_wrap}>
        <Feather name="menu" size={24} color="black" />
        <Text>Конструктор пиццы</Text>
      </View>
      <View style={styles.item_wrap}>
        <Feather name="menu" size={24} color="black" />
        <Text>Ваши заказы</Text>
      </View>
      <View style={styles.item_wrap}>
        <Feather name="menu" size={24} color="black" />
        <Text>Корзина</Text>
      </View>
      <View style={styles.item_wrap}>
        <Feather name="menu" size={24} color="black" />
        <Text>Акции</Text>
      </View>
      <View style={styles.item_wrap}>
        <Feather name="menu" size={24} color="black" />
        <Text>Подписка</Text>
      </View>
      <View style={styles.item_wrap}>
        <Feather name="menu" size={24} color="black" />
        <Text>Условия доставки</Text>
      </View>
      <View style={styles.item_wrap}>
        <Feather name="menu" size={24} color="black" />
        <Text>Контакты</Text>
      </View>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: "column",
  },

  item_wrap: {
    flexDirection: "row",
  },
})

export default Dashboard
