// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  ingridientsList: Array<string>
}

const Ingredients: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text size={16} style={styles.title}>
        Состав:
      </Text>
      <View style={styles.list_wrap}>
        {props.ingridientsList.map((ingredient: string) => {
          return (
            <Text size={16} key={ingredient}>
              {ingredient},{" "}
            </Text>
          )
        })}
        <TouchableOpacity style={styles.button}>
          <Text color="#96A637" weight="bold" size={16}>
            Добавить ингридиенты
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 23.4,
    marginBottom: 37.6,
    marginHorizontal: 30,
  },

  title: {
    color: "#1A1824",
    opacity: 0.5,
  },

  list_wrap: {
    marginTop: 6,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  button: {
    marginTop: 19.13,
  },
})

export default Ingredients
