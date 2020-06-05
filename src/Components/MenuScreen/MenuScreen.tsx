// PLUGINS IMPORTS //
import React from "react"
import { View, ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Button from "../Shared/Components/Button/Button"
import MenuSection from "../Shared/Sections/MenuSection/MenuSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const MenuScreen: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Button
        buttonStyle={{ backgroundColor: "#96A637", borderRadius: 20 }}
        textStyle={{ color: "white" }}
      />
      <MenuSection
        scroll={false}
        titleText="Меню"
        titleStyle={{ fontSize: 30 }}
        containerStyle={{ marginTop: 20 }}
      />
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
})

export default MenuScreen
