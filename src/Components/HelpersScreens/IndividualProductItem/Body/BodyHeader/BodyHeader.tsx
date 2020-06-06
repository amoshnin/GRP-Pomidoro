// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Entypo } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  productTitle: string | null
  productPrice24: string | null
  productPrice32: string | null
  productPrice40: string | null
}

const BodyHeader: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text weight="bold" size={30} style={styles.title}>
        {props.productTitle}
      </Text>

      <Text size={16}>Выберите размер для заказа</Text>

      <View style={styles.sizes_wrap}>
        <View style={{ ...styles.size_circle, height: 64, width: 64 }}>
          <Text>24см</Text>
          <View style={styles.size_circle_divider_wrap}>
            <View style={styles.size_circle_divider} />
          </View>
          <Text weight="bold">{props.productPrice24}</Text>
          <RectButton style={styles.size_add_btn}>
            <Entypo name="plus" size={16} color="white" />
          </RectButton>
        </View>
        <View style={{ ...styles.size_circle, height: 70, width: 70 }}>
          <Text>32см</Text>
          <View style={styles.size_circle_divider_wrap}>
            <View style={styles.size_circle_divider} />
          </View>
          <Text weight="bold">{props.productPrice32}</Text>
          <RectButton style={styles.size_add_btn}>
            <Entypo name="plus" size={16} color="white" />
          </RectButton>
        </View>
        <View style={{ ...styles.size_circle, height: 76, width: 76 }}>
          <Text>40см</Text>
          <View style={styles.size_circle_divider_wrap}>
            <View style={styles.size_circle_divider} />
          </View>
          <Text weight="bold">{props.productPrice40}</Text>
          <RectButton style={styles.size_add_btn}>
            <Entypo name="plus" size={16} color="white" />
          </RectButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  title: {
    marginTop: 32,
    marginBottom: 25,
    letterSpacing: 0.3,
  },

  sizes_wrap: {
    flexDirection: "row",
    marginTop: 29.32,
    marginBottom: 35.18,
  },

  size_circle: {
    borderWidth: 1,
    borderColor: "#96A637",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 25,
    paddingTop: 3,
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

export default BodyHeader
