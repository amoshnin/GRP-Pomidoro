// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Button from "../Shared/Components/Button/Button"
import MenuSection from "../Shared/Sections/MenuSection/MenuSection"
import SalesSection from "../Shared/Sections/SalesSection/SalesSection"

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
      <SalesSection
        titleText={"Откройте новые вкусы"}
        titleStyle={{
          fontSize: 30,
          width: 221,
        }}
        scroll_horizontal={false}
        imageStyle={{
          width: 270,
          height: 300,
          marginRight: 16,
        }}
      />
      <Button
        buttonStyle={{
          backgroundColor: "#96A637",
          borderRadius: 20,
          marginTop: 30,
        }}
        textStyle={{ color: "white" }}
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
