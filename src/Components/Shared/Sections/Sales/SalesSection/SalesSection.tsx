// PLUGINS IMPORTS //
import React from "react"
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { MaterialIcons } from "@expo/vector-icons"

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
          <LinearGradient
            colors={["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0.16)"]}
            style={{ ...styles.image, ...props.imageStyle }}
          >
            <ImageBackground
              style={{ ...styles.image, ...props.imageStyle }}
              source={require(`../../../../../Images/Sales/sale-1.png`)}
            />
            <View style={styles.image_text_wrap}>
              <Text style={styles.image_subtitle}>Акция</Text>
              <Text style={styles.image_title}>Три по цене двух</Text>
              <TouchableOpacity style={styles.image_action_wrap}>
                <Text style={styles.image_action}>Посмотреть</Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
          <LinearGradient
            colors={["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0.16)"]}
            style={{ ...styles.image, ...props.imageStyle }}
          >
            <ImageBackground
              style={{ ...styles.image, ...props.imageStyle }}
              source={require(`../../../../../Images/Sales/sale-1.png`)}
            />
            <View style={styles.image_text_wrap}>
              <Text style={styles.image_subtitle}>Акция</Text>
              <Text style={styles.image_title}>Три по цене двух</Text>
              <TouchableOpacity style={styles.image_action_wrap}>
                <Text style={styles.image_action}>Посмотреть</Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
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

  image: {
    backgroundColor: "#000",
    opacity: 0.8,
    borderRadius: 15,
  },

  image_text_wrap: {
    position: "absolute",
    bottom: 10,
    marginHorizontal: 16,
  },

  image_subtitle: {
    color: "rgba(255, 255, 255, 0.6);",
    marginVertical: 12,
  },

  image_title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
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

export default SalesSection
