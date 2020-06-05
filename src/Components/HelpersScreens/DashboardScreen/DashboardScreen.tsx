// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"
import { RectButton } from "react-native-gesture-handler"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const DashboardScreen: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <RectButton
        onPress={() => {
          props.navigation.navigate("MainScreen")
        }}
      >
        <View style={styles.item_wrap}>
          <Feather name="menu" size={24} color="#96A637" />
          <Text style={styles.text}>Главная</Text>
        </View>
      </RectButton>
      <RectButton>
        <View style={styles.item_wrap}>
          <Feather name="menu" size={24} color="#96A637" />
          <Text style={styles.text}>Личный кабинет</Text>
        </View>
      </RectButton>
      <RectButton
        onPress={() => {
          props.navigation.navigate("MenuScreen")
        }}
      >
        <View style={styles.item_wrap}>
          <Feather name="menu" size={24} color="#96A637" />
          <Text style={styles.text}>Меню</Text>
        </View>
      </RectButton>
      <RectButton>
        <View style={styles.item_wrap}>
          <Feather name="menu" size={24} color="#96A637" />
          <Text style={styles.text}>Конструктор пиццы</Text>
        </View>
      </RectButton>
      <RectButton>
        <View style={styles.item_wrap}>
          <Feather name="menu" size={24} color="#96A637" />
          <Text style={styles.text}>Ваши заказы</Text>
        </View>
      </RectButton>
      <RectButton>
        <View style={styles.item_wrap}>
          <Feather name="menu" size={24} color="#96A637" />
          <Text style={styles.text}>Корзина</Text>
        </View>
      </RectButton>
      <RectButton>
        <View style={styles.item_wrap}>
          <Feather name="menu" size={24} color="#96A637" />
          <Text style={styles.text}>Акции</Text>
        </View>
      </RectButton>
      <RectButton>
        <View style={styles.item_wrap}>
          <Feather name="menu" size={24} color="#96A637" />
          <Text style={styles.text}>Подписка</Text>
        </View>
      </RectButton>
      <RectButton
        onPress={() => props.navigation.navigate("DeliveryTermsScreen")}
      >
        <View style={styles.item_wrap}>
          <Feather name="menu" size={24} color="#96A637" />
          <Text style={styles.text}>Условия доставки</Text>
        </View>
      </RectButton>
      <RectButton>
        <View style={styles.item_wrap}>
          <Feather name="menu" size={24} color="#96A637" />
          <Text style={styles.text}>Контакты</Text>
        </View>
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
