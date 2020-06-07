// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import PayButton from "~/Components/Shared/Components/PayButton/PayButton"
import Text from "~/Components/Shared/Components/Text/Text"

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
      <View>
        <View></View>
        <View></View>
      </View>
      <View style={styles.button_wrap}>
        <PayButton
          navigation={props.navigation}
          destination="BasketScreen"
          price={price}
          text="Оплатить"
        />
      </View>
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 19,
    marginHorizontal: 30,
  },

  button_wrap: {},
})

export default PizzaConstructorScreen
