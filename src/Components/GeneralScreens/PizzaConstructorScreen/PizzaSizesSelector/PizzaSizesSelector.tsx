// PLUGINS IMPORTS //
import React, { useState } from "react"
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
} from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Entypo } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  price24: number
  price32: number
  price40: number

  containerStyle?: any
}

const PizzaSizesSelector: React.FC<PropsType> = (props) => {
  const [selectedSize, setSelectedSize] = useState(24 as number | null)

  return (
    <TouchableWithoutFeedback>
      <View style={{ ...styles.sizes_wrap, ...props.containerStyle }}>
        <TouchableOpacity
          onPress={() => {
            setSelectedSize(24)
          }}
        >
          <View
            style={
              selectedSize === 24
                ? {
                    ...styles.size_circle,
                    height: 64,
                    width: 64,
                    backgroundColor: "#96A637",
                  }
                : {
                    ...styles.size_circle,
                    height: 64,
                    width: 64,
                  }
            }
          >
            <Text color={selectedSize === 24 ? "white" : "black"}>24см</Text>
            <View style={styles.size_circle_divider_wrap}>
              <View style={styles.size_circle_divider} />
            </View>
            <Text weight="bold" color={selectedSize === 24 ? "white" : "black"}>
              {props.price24} ₴
            </Text>
            <RectButton style={styles.size_add_btn}>
              <Entypo name="plus" size={16} color="white" />
            </RectButton>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedSize(32)
          }}
        >
          <View
            style={
              selectedSize === 32
                ? {
                    ...styles.size_circle,
                    height: 70,
                    width: 70,
                    backgroundColor: "#96A637",
                  }
                : {
                    ...styles.size_circle,
                    height: 70,
                    width: 70,
                  }
            }
          >
            <Text color={selectedSize === 32 ? "white" : "black"}>32см</Text>
            <View style={styles.size_circle_divider_wrap}>
              <View style={styles.size_circle_divider} />
            </View>
            <Text weight="bold" color={selectedSize === 32 ? "white" : "black"}>
              {props.price32} ₴
            </Text>
            <RectButton style={styles.size_add_btn}>
              <Entypo name="plus" size={16} color="white" />
            </RectButton>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedSize(40)
          }}
        >
          <View
            style={
              selectedSize === 40
                ? {
                    ...styles.size_circle,
                    height: 76,
                    width: 76,
                    backgroundColor: "#96A637",
                  }
                : { ...styles.size_circle, height: 76, width: 76 }
            }
          >
            <Text color={selectedSize === 40 ? "white" : "black"}>40см</Text>
            <View style={styles.size_circle_divider_wrap}>
              <View style={styles.size_circle_divider} />
            </View>
            <Text weight="bold" color={selectedSize === 40 ? "white" : "black"}>
              {props.price40} ₴
            </Text>
            <RectButton style={styles.size_add_btn}>
              <Entypo name="plus" size={16} color="white" />
            </RectButton>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  sizes_wrap: {
    marginTop: 17.14,
    marginBottom: 23.86,
    flexDirection: "row",
  },

  size_circle: {
    borderWidth: 1,
    borderColor: "#96A637",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    paddingTop: 3,
    marginVertical: 10,
  },

  size_add_btn: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: "72.22%",
    right: "-5.56%",
    top: "-5.11%",
    bottom: "71.77%",
    backgroundColor: "#96A637",
    borderRadius: 56,
    height: 23,
    width: 23,
  },

  size_circle_divider_wrap: {
    flexDirection: "row",
  },

  size_circle_divider: {
    borderWidth: 0.19,
    opacity: 0.15,
    marginVertical: 1.5,
    marginHorizontal: 5,
    borderColor: "#96A637",
    width: "100%",
    flex: 1,
  },
})

export default PizzaSizesSelector
