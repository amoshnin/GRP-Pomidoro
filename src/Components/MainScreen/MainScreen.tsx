// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import SalesSection from "../Shared/Sections/Sales/SalesSection/SalesSection"

// EXTRA IMPORTS //
import Button from "../Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const MainScreen: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Button
        buttonStyle={{
          borderRadius: 20,
          backgroundColor: "#96A637",
          marginTop: -8,
        }}
        textStyle={{ color: "#FFFFFF" }}
      />

      <SalesSection
        titleText={"Откройте новые вкусы"}
        titleStyle={{
          fontSize: 30,
          letterSpacing: 0.3,
          width: 221,
        }}
        scroll_horizontal={true}
        imageStyle={{
          width: 270,
          height: 300,
          marginRight: 16,
        }}
      />
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
})

export default MainScreen
