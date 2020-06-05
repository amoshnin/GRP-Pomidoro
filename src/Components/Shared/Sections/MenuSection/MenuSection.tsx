// PLUGINS IMPORTS //
import React from "react"
import { View, ScrollView, Text, Image, StyleSheet } from "react-native"

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
      <View style={styles.scroll_wrap}>
        {props.scroll ? (
          <ScrollView
            horizontal
            style={styles.scroll_container}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.image_wrap}>
              <Image source={require(`../../../../Images/Sales/menu-1.png`)} />
              <Text>Пиццы</Text>
            </View>

            <View style={styles.image_wrap}>
              <Image source={require(`../../../../Images/Sales/menu-2.png`)} />
              <Text>Суши</Text>
            </View>
            <View style={styles.image_wrap}>
              <Image source={require(`../../../../Images/Sales/menu-1.png`)} />
              <Text>Вок</Text>
            </View>
            <View style={styles.image_wrap}>
              <Image source={require(`../../../../Images/Sales/menu-2.png`)} />
              <Text>Салаты</Text>
            </View>
            <View style={styles.image_wrap}>
              <Image source={require(`../../../../Images/Sales/menu-1.png`)} />
              <Text>Напитки</Text>
            </View>
            <View style={styles.image_wrap}>
              <Image source={require(`../../../../Images/Sales/menu-2.png`)} />
              <Text>Пиццы</Text>
            </View>

            <View style={styles.image_wrap}>
              <Image source={require(`../../../../Images/Sales/menu-1.png`)} />
              <Text>Пиццы</Text>
            </View>
          </ScrollView>
        ) : (
          <View>
            <View style={styles.image_wrap}>
              <Image source={require(`../../../../Images/Sales/menu-1.png`)} />
              <Text>Пиццы</Text>
            </View>

            <View style={styles.image_wrap}>
              <Image source={require(`../../../../Images/Sales/menu-2.png`)} />
              <Text>Суши</Text>
            </View>
            <View style={styles.image_wrap}>
              <Image source={require(`../../../../Images/Sales/menu-1.png`)} />
              <Text>Вок</Text>
            </View>
            <View style={styles.image_wrap}>
              <Image source={require(`../../../../Images/Sales/menu-2.png`)} />
              <Text>Салаты</Text>
            </View>
            <View style={styles.image_wrap}>
              <Image source={require(`../../../../Images/Sales/menu-1.png`)} />
              <Text>Напитки</Text>
            </View>
            <View style={styles.image_wrap}>
              <Image source={require(`../../../../Images/Sales/menu-2.png`)} />
              <Text>Пиццы</Text>
            </View>

            <View style={styles.image_wrap}>
              <Image source={require(`../../../../Images/Sales/menu-1.png`)} />
              <Text>Пиццы</Text>
            </View>
          </View>
        )}
      </View>
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

  image_wrap: {
    flexDirection: "column",
    alignItems: "center",
  },
})

export default MenuSection
