// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, Image, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const DashboardScreen: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.rect_button}
        onPress={() => {
          props.navigation.navigate("MainScreen")
        }}
      >
        <View style={styles.item_wrap}>
          <Image
            style={styles.icon}
            source={require("~/Images/Icons/icon-logo.png")}
          />
          <Text style={styles.text}>Главная</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rect_button}
        onPress={() => {
          props.navigation.navigate("PrivateCabinetScreen")
        }}
      >
        <View style={styles.item_wrap}>
          <Image
            style={styles.icon}
            source={require("~/Images/Icons/icon-user.png")}
          />
          <Text style={styles.text}>Личный кабинет</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rect_button}
        onPress={() => {
          props.navigation.navigate("MenuScreen")
        }}
      >
        <View style={styles.item_wrap}>
          <Image
            style={styles.icon}
            source={require("~/Images/Icons/icon-menu.png")}
          />
          <Text style={styles.text}>Меню</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rect_button}
        onPress={() => props.navigation.navigate("PizzaConstructorScreen")}
      >
        <View style={styles.item_wrap}>
          <Image
            style={styles.big_icon}
            source={require("~/Images/Icons/icon-pizza-constructor.png")}
          />
          <Text style={styles.text}>Конструктор пиццы</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rect_button}
        onPress={() => {
          props.navigation.navigate("OrdersScreen")
        }}
      >
        <View style={styles.item_wrap}>
          <Image
            style={styles.big_icon}
            source={require("~/Images/Icons/icon-orders.png")}
          />
          <Text style={styles.text}>Ваши заказы</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rect_button}
        onPress={() => {
          props.navigation.navigate("BasketScreen")
        }}
      >
        <View style={styles.item_wrap}>
          <Image
            style={styles.icon}
            source={require("~/Images/Icons/icon-basket.png")}
          />
          <Text style={styles.text}>Корзина</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rect_button}
        onPress={() => {
          props.navigation.navigate("SalesScreen")
        }}
      >
        <View style={styles.item_wrap}>
          <Image
            style={styles.icon}
            source={require("~/Images/Icons/icon-star.png")}
          />
          <Text style={styles.text}>Акции</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rect_button}
        onPress={() => props.navigation.navigate("DeliveryTermsScreen")}
      >
        <View style={styles.item_wrap}>
          <Image
            style={styles.big_icon}
            source={require("~/Images/Icons/icon-delivery.png")}
          />
          <Text style={styles.text}>Условия доставки</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rect_button}
        onPress={() => {
          props.navigation.navigate("ContactsScreen")
        }}
      >
        <View style={styles.item_wrap}>
          <Image
            style={styles.big_icon}
            source={require("~/Images/Icons/icon-contacts.png")}
          />
          <Text style={styles.text}>Контакты</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "column",
  },

  rect_button: {
    height: 60,
    justifyContent: "center",
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

  icon: {
    height: 24,
    width: 25,
    resizeMode: "center",
  },

  big_icon: {
    width: 40,
    height: 40,
    marginLeft: -7,
    marginRight: -7,
  },
})

export default DashboardScreen
