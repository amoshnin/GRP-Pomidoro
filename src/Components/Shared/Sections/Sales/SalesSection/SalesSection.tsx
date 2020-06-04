// PLUGINS IMPORTS //
import React from "react"
import { View, ScrollView, Text, Image, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  titleText: string
  titleStyle: any
  scroll_horizontal: boolean

  imageStyle: any
}

const SalesSection: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, ...props.titleStyle }}>
        {props.titleText}
      </Text>
      <View style={styles.scroll_wrap}>
        <ScrollView
          horizontal={props.scroll_horizontal}
          style={styles.scroll_container}
        >
          <Image
            style={{ ...styles.image, ...props.imageStyle }}
            source={require(`../../../../../Images/Sales/sale-1.png`)}
          />

          <Image
            style={{ ...styles.image, ...props.imageStyle }}
            source={require(`../../../../../Images/Sales/sale-1.png`)}
          />
          <Image
            style={{ ...styles.image, ...props.imageStyle }}
            source={require(`../../../../../Images/Sales/sale-1.png`)}
          />
          <Image
            style={{ ...styles.image, ...props.imageStyle }}
            source={require(`../../../../../Images/Sales/sale-1.png`)}
          />
        </ScrollView>
      </View>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 15,
  },

  title: {
    fontWeight: "bold",
  },

  scroll_wrap: {
    alignItems: "center",
  },

  scroll_container: {
    marginTop: 20,
  },

  image: {},
})

export default SalesSection
