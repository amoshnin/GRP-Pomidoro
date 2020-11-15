// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import { Snackbar } from "react-native-paper"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  title: string
  price: number
  snackbarVisible: boolean
  duration?: number

  onDismissSnackBar: () => void
}

const ProductSnackbarComponent: React.FC<PropsType> = (props) => {
  return (
    <Snackbar
      duration={props.duration}
      visible={props.snackbarVisible}
      onDismiss={props.onDismissSnackBar}
      style={styles.snackbar}
      action={{
        label: "Оформить",
        onPress: () => {
          props.navigation.navigate("BasketScreen")
        },
      }}
    >
      <Text color="#96A637" style={styles.subtitle}>
        В корзине:{" "}
      </Text>
      <Text color="white">{props.title} </Text>
      <Text color="white" weight="bold" size={16}>
        {props.price} ₴
      </Text>
    </Snackbar>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  snackbar: {
    bottom: 17,
    right: -40,
    width: 315,
    height: 80,
    borderRadius: 15,
    backgroundColor: "#1A1824",
    flexDirection: "row",
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "space-between",
  },

  subtitle: {
    letterSpacing: 0.3,
  },
})

export default ProductSnackbarComponent
