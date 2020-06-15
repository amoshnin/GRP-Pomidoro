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
  navigation: any

  titleText?: string
  titleStyle?: any
  scroll?: boolean

  imageStyle?: any
  containerStyle?: any

  MenuList: Array<any>
}

const MenuSection: React.FC<PropsType> = (props) => {
  return (
    <View style={{ ...styles.container, ...props.containerStyle }}>
      <Text style={{ ...styles.title, ...props.titleStyle }} weight="bold">
        {props.titleText}
      </Text>

      {props.scroll ? (
        <ScrollView
          horizontal
          style={styles.scroll_content_wrap}
          showsHorizontalScrollIndicator={false}
        >
          {props.MenuList.map((menuItem: any) => {
            return (
              <MenuScrollItem
                title={menuItem.name}
                imageURL={menuItem.url}
                navigation={props.navigation}
              />
            )
          })}
        </ScrollView>
      ) : (
        <View style={styles.content_wrap}>
          {props.MenuList.map((menuItem: any) => {
            return (
              <MenuScrollItem
                title={menuItem.name}
                imageURL={menuItem.url}
                navigation={props.navigation}
              />
            )
          })}
        </View>
      )}
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
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
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: -18.5,
  },
})

export default MenuSection
