// PLUGINS IMPORTS //
import React from "react"
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { LinearGradient } from "expo-linear-gradient"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { MaterialIcons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  imageURL: string
  saleTitle: string
  saleType: string
  saleDescription: string

  imageStyle: any
}

const SaleItem: React.FC<PropsType> = (props) => {
  return (
    <TouchableWithoutFeedback>
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0.16)"]}
        style={{ ...styles.image, ...props.imageStyle }}
      >
        <Image
          style={{ ...styles.image, ...props.imageStyle }}
          source={require(`../../../../../Images/sale-1-horiz.png`)}
        />
        <View style={styles.image_text_wrap}>
          <Text style={styles.image_subtitle}>{props.saleType}</Text>
          <Text style={styles.image_title} weight="bold">
            {props.saleTitle}
          </Text>
          <TouchableOpacity
            style={styles.image_action_wrap}
            onPress={() =>
              props.navigation.navigate("IndividualSaleScreen", {
                saleTitle: props.saleTitle as string,
                description: props.saleDescription as string,
                saleType: props.saleType as string,
                image: props.imageURL as string,
              })
            }
          >
            <Text style={styles.image_action}>Посмотреть</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  image: {
    backgroundColor: "#000",
    opacity: 0.8,
    borderRadius: 15,
  },

  image_text_wrap: {
    position: "absolute",
    bottom: 10,
    marginHorizontal: 16,
    width: 180,
  },

  image_subtitle: {
    color: "rgba(255, 255, 255, 0.6);",
    marginVertical: 12,
  },

  image_title: {
    color: "white",
    fontSize: 24,

    letterSpacing: 0.3,
  },

  image_action_wrap: {
    flexDirection: "row",
    marginVertical: 10,
  },

  image_action: {
    color: "white",
    letterSpacing: 0.3,
    fontSize: 16,
  },
})

export default SaleItem
