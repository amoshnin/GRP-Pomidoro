// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, ScrollView, Image, StyleSheet } from "react-native"
import PayButton from "~/Components/Shared/Components/PayButton/PayButton"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //
import PizzaSizesSelector from "./PizzaSizesSelector/PizzaSizesSelector"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const PizzaConstructorScreen: React.FC<PropsType> = (props) => {
  const [price, setPrice] = useState(0 as number)

  return (
    <ScrollView style={styles.container}>
      <Text weight="bold" size={20}>
        Конструктор пиццы
      </Text>
      <View style={styles.lists_wrap}>
        <View>
          <Image source={require("~/Images/pizza-constructor.png")} />
        </View>
        <View>
          <PizzaSizesSelector
            containerStyle={{ flexDirection: "column" }}
            price24={99}
            price32={164}
            price40={199}
          />
        </View>
      </View>
      <PayButton
        navigation={props.navigation}
        destination="BasketScreen"
        price={price}
        text="Оплатить"
      />
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 19,
    marginHorizontal: 30,
  },

  lists_wrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
})

export default PizzaConstructorScreen
