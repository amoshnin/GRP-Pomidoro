// PLUGINS IMPORTS //
import React from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //
import MenuScrollItem from "./MenuScrollItem/MenuScrollItem"
import MenuNormalItem from "./MenuNormalItem/MenuNormalItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  titleText: string
  titleStyle: any
  scroll: boolean

  imageStyle: any
}

const MenuSection: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, ...props.titleStyle }} weight="bold">
        {props.titleText}
      </Text>

      {props.scroll ? (
        <ScrollView
          horizontal
          style={styles.scroll_content_wrap}
          showsHorizontalScrollIndicator={false}
        >
          <MenuScrollItem title={"Пицаа"} imageURL={""} />
          <MenuScrollItem title={"Пицаа"} imageURL={""} />
          <MenuScrollItem title={"Пицаа"} imageURL={""} />
          <MenuScrollItem title={"Пицаа"} imageURL={""} />
          <MenuScrollItem title={"Пицаа"} imageURL={""} />
          <MenuScrollItem title={"Пицаа"} imageURL={""} />
          <MenuScrollItem title={"Пицаа"} imageURL={""} />
          <MenuScrollItem title={"Пицаа"} imageURL={""} />
        </ScrollView>
      ) : (
        <View style={styles.content_wrap}>
          <MenuNormalItem title={"Пицаа"} imageURL={""} />
          <MenuNormalItem title={"Пицаа"} imageURL={""} />
          <MenuNormalItem title={"Пицаа"} imageURL={""} />
          <MenuNormalItem title={"Пицаа"} imageURL={""} />
          <MenuNormalItem title={"Пицаа"} imageURL={""} />
          <MenuNormalItem title={"Пицаа"} imageURL={""} />
        </View>
      )}
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: 20,
  },

  title: {
    color: "#1A1824",
  },

  scroll_content_wrap: {
    marginTop: 14,
  },

  scroll_image_wrap: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 15,
  },

  content_wrap: {
    marginTop: 14,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: -18.5,
  },

  image_wrap: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 18.5,
    paddingVertical: 17.115,
  },

  text: {
    marginTop: 5,
    marginRight: 3,

    color: "#1A1824",
    fontSize: 15,
    textAlign: "center",
  },
})

export default MenuSection
