// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import * as yup from "yup"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  title?: string
  content?: string
  boldText?: string
  onPress?: any
}

const FakeInputComponent: React.FC<PropsType> = (props) => {
  return (
    <>
      <View style={styles.container}>
        <View>
          {props.title && (
            <Text color="#1A1824" style={{ opacity: 0.5 }}>
              {props.title}
            </Text>
          )}
          {props.boldText && (
            <Text style={styles.bold_text}>{props.boldText}</Text>
          )}
          {props.children && <Text size={16}>{props.content}</Text>}
        </View>
        <TouchableOpacity
          onPress={() =>
            props.onPress
              ? props.onPress()
              : props.navigation.navigate("CredentialsFieldChangeScreen", {
                  changeFunction: () => null,
                  title: `Изменить ${props.title}`,
                  placeholder: props.title,
                  validation: yup.string(),
                })
          }
        >
          <Text
            weight="bold"
            color="#96A637"
            size={16}
            style={styles.button_text}
          >
            Изменить
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
    </>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  button_text: {
    letterSpacing: 0.3,
  },

  bold_text: {
    fontWeight: "bold",
    fontSize: 16,
    paddingBottom: 5,
  },

  divider: {
    marginVertical: 13,
    borderTopColor: "gray",
    borderTopWidth: 1,
    opacity: 0.15,
  },
})

export default FakeInputComponent
