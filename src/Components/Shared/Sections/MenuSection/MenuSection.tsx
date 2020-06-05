// PLUGINS IMPORTS //
import React from "react"
import { View, ScrollView, Text, Image, StyleSheet } from "react-native"
import { RectButton } from "react-native-gesture-handler"

// COMPONENTS IMPORTS //

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
      <Text style={{ ...styles.title, ...props.titleStyle }}>
        {props.titleText}
      </Text>

      {props.scroll ? (
        <ScrollView
          horizontal
          style={styles.scroll_content_wrap}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.scroll_image_wrap}>
            <Image source={require(`../../../../Images/Sales/menu-1.png`)} />
            <Text style={styles.text}>Пиццы</Text>
          </View>

          <View style={styles.scroll_image_wrap}>
            <Image source={require(`../../../../Images/Sales/menu-2.png`)} />
            <Text style={styles.text}>Суши</Text>
          </View>
          <View style={styles.scroll_image_wrap}>
            <Image source={require(`../../../../Images/Sales/menu-1.png`)} />
            <Text style={styles.text}>Вок</Text>
          </View>
          <View style={styles.scroll_image_wrap}>
            <Image source={require(`../../../../Images/Sales/menu-2.png`)} />
            <Text style={styles.text}>Салаты</Text>
          </View>
          <View style={styles.scroll_image_wrap}>
            <Image source={require(`../../../../Images/Sales/menu-1.png`)} />
            <Text style={styles.text}>Напитки</Text>
          </View>
          <View style={styles.scroll_image_wrap}>
            <Image source={require(`../../../../Images/Sales/menu-2.png`)} />
            <Text style={styles.text}>Пиццы</Text>
          </View>

          <View style={styles.scroll_image_wrap}>
            <Image source={require(`../../../../Images/Sales/menu-1.png`)} />
            <Text style={styles.text}>Пиццы</Text>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.content_wrap}>
          <RectButton style={styles.image_wrap}>
            <Image source={require(`../../../../Images/Sales/menu-1.png`)} />
            <Text style={styles.text}>Пиццы</Text>
          </RectButton>

          <RectButton style={styles.image_wrap}>
            <Image source={require(`../../../../Images/Sales/menu-2.png`)} />
            <Text style={styles.text}>Суши</Text>
          </RectButton>
          <RectButton style={styles.image_wrap}>
            <Image source={require(`../../../../Images/Sales/menu-1.png`)} />
            <Text style={styles.text}>Вок</Text>
          </RectButton>
          <RectButton style={styles.image_wrap}>
            <Image source={require(`../../../../Images/Sales/menu-2.png`)} />
            <Text style={styles.text}>Салаты</Text>
          </RectButton>
          <RectButton style={styles.image_wrap}>
            <Image source={require(`../../../../Images/Sales/menu-1.png`)} />
            <Text style={styles.text}>Напитки</Text>
          </RectButton>
          <RectButton style={styles.image_wrap}>
            <Image source={require(`../../../../Images/Sales/menu-2.png`)} />
            <Text style={styles.text}>Пиццы</Text>
          </RectButton>

          <RectButton style={styles.image_wrap}>
            <Image source={require(`../../../../Images/Sales/menu-1.png`)} />
            <Text style={styles.text}>Пиццы</Text>
          </RectButton>
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
    fontWeight: "bold",
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
    fontWeight: "bold",
    color: "#1A1824",
    fontSize: 15,
    textAlign: "center",
  },
})

export default MenuSection
