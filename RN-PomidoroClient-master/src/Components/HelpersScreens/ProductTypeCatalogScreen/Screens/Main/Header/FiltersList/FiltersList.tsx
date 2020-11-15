// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import FilterItem from "./FilterItem/FilterItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  TagsList: Array<any>
}

const FiltersList: React.FC<PropsType> = (props) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {props.TagsList &&
        props.TagsList.map((tag: { id: string; title: string }) => {
          return <FilterItem title={tag.title} />
        })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
})

export default FiltersList
