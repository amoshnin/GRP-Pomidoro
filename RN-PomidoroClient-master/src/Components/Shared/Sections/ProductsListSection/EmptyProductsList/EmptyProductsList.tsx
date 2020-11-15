// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const EmptyProductsList: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text size={16}>По запросу</Text>
      <Text size={20} weight="bold" style={styles.title}>
        Ничего не найдено
      </Text>
      <Text size={16} style={styles.subtitle}>
        Попробуйте изменить параметры поиска или просмотреть все продукты
      </Text>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 150,
  },

  title: {
    marginVertical: 16,
  },

  subtitle: {
    textAlign: "center",
    width: 330,
  },
})

export default EmptyProductsList
