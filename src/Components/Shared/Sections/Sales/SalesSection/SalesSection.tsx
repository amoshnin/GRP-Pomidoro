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
          <View style={styles.image_wrap}>
            <Image
              style={{ ...styles.image, ...props.imageStyle }}
              source={require(`../../../../../Images/Sales/sale-1.png`)}
            />
            <View style={styles.image_text_wrap}>
              <Text style={styles.image_subtitle}>Акция</Text>
            </View>
          </View>
          <View style={styles.image_wrap}>
            <Image
              style={{ ...styles.image, ...props.imageStyle }}
              source={require(`../../../../../Images/Sales/sale-2.png`)}
            />
          </View>
          <View style={styles.image_wrap}>
            <Image
              style={{ ...styles.image, ...props.imageStyle }}
              source={require(`../../../../../Images/Sales/sale-1.png`)}
            />
          </View>
          <View style={styles.image_wrap}>
            <Image
              style={{ ...styles.image, ...props.imageStyle }}
              source={require(`../../../../../Images/Sales/sale-1.png`)}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginLeft: 20,
  },

  title: {
    fontWeight: "bold",
    color: "#1A1824",
  },

  scroll_wrap: {
    alignItems: "center",
  },

  scroll_container: {
    marginTop: 20,
  },

  image_wrap: {
    opacity: 0.9,
  },

  image: {
    backgroundColor: "#000",
    opacity: 0.8,
    borderRadius: 15,
  },

  image_text_wrap: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  image_subtitle: {
    color: "black",
  },
})

export default SalesSection
