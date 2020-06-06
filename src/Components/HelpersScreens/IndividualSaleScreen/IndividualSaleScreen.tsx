// PLUGINS IMPORTS //
import React from "react"
import { View, Image, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "../../Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any
}

const IndividualSaleScreen: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text weight="bold" size={30} style={styles.title}>
        {props.route.params.saleTitle}
      </Text>
      <Text size={16} color="#1A1824" style={styles.type}>
        {props.route.params.saleType}
      </Text>
      <Image
        source={require("../../../Images/sale-1-horiz.png")}
        style={styles.image}
      />
      <Text style={styles.description} size={16}>
        {props.route.params.description}
      </Text>
      <Button
        onPress={() => {
          props.navigation.navigate("SalesScreen")
        }}
        text="Посмотреть все акции"
        buttonStyle={{
          borderRadius: 20,
          backgroundColor: "#EAEAEB",
          marginTop: 20,
          marginRight: 10,
        }}
        rectStyle={{
          width: 315,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30.19,
  },

  title: {
    width: 223,
  },

  type: {
    opacity: 0.4,
    marginTop: 14,
  },

  image: {
    marginVertical: 23,
    width: 315,
    height: 139.24,
    borderRadius: 8,
  },

  description: {
    letterSpacing: 0.1,
    lineHeight: 26,
  },
})

export default IndividualSaleScreen
