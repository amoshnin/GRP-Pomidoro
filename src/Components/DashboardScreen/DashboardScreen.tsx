// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"
import { RectButton } from "react-native-gesture-handler"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const DashboardScreen: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <RectButton style={styles.item_wrap}>
        <Feather name="menu" size={24} color="#96A637" />
        <Text style={styles.text}>Главная</Text>
      </RectButton>
      <RectButton style={styles.item_wrap}>
        <Feather name="menu" size={24} color="#96A637" />
        <Text style={styles.text}>Личный кабинет</Text>
      </RectButton>
      <RectButton style={styles.item_wrap}>
        <Feather name="menu" size={24} color="#96A637" />
        <Text style={styles.text}>Меню</Text>
      </RectButton>
      <RectButton style={styles.item_wrap}>
        <Feather name="menu" size={24} color="#96A637" />
        <Text style={styles.text}>Конструктор пиццы</Text>
      </RectButton>
      <RectButton style={styles.item_wrap}>
        <Feather name="menu" size={24} color="#96A637" />
        <Text style={styles.text}>Ваши заказы</Text>
      </RectButton>
      <RectButton style={styles.item_wrap}>
        <Feather name="menu" size={24} color="#96A637" />
        <Text style={styles.text}>Корзина</Text>
      </RectButton>
      <RectButton style={styles.item_wrap}>
        <Feather name="menu" size={24} color="#96A637" />
        <Text style={styles.text}>Акции</Text>
      </RectButton>
      <RectButton style={styles.item_wrap}>
        <Feather name="menu" size={24} color="#96A637" />
        <Text style={styles.text}>Подписка</Text>
      </RectButton>
      <RectButton style={styles.item_wrap}>
        <Feather name="menu" size={24} color="#96A637" />
        <Text style={styles.text}>Условия доставки</Text>
      </RectButton>
      <RectButton style={styles.item_wrap}>
        <Feather name="menu" size={24} color="#96A637" />
        <Text style={styles.text}>Контакты</Text>
      </RectButton>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "column",
  },

  item_wrap: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 17,
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    letterSpacing: 0.3,
    marginLeft: 20,
  },
})

export default DashboardScreen
