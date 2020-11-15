// PLUGINS IMPORTS //
import React from "react"
import { View, Image, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import BottomSection from "./BottomSection/BottomSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any
}

const OrderTracking: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../Images/delivery-map.png")}
        style={styles.image}
      />
      <BottomSection route={props.route} />
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: "100%",
  },
})

export default OrderTracking
