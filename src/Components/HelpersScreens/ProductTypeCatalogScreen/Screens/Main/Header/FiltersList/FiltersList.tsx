// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import FilterItem from "./FilterItem/FilterItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const FiltersList: React.FC<PropsType> = (props) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <FilterItem title={"Все пиццы"} />
      <FilterItem title={"Мясо"} />
      <FilterItem title={"Сыр"} />
      <FilterItem title={"Лук"} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
})

export default FiltersList
