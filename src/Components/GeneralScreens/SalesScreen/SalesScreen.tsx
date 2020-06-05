// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import Button from "../../Shared/Components/Button/Button"
import SalesSection from "../../Shared/Sections/SalesSection/SalesSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const SalesScreen: React.FC<PropsType> = (props) => {
  return (
    <ScrollView>
      <Button
        buttonStyle={{
          backgroundColor: "#96A637",
          height: 40,
          width: 315,
          borderRadius: 20,
          marginTop: 16,
        }}
        textStyle={{ color: "white" }}
        text={"Узнать, где мой заказ"}
      />
      <SalesSection
        navigation={props.navigation}
        titleText={"Все акции"}
        titleStyle={{
          fontSize: 30,
        }}
        scroll_horizontal={false}
        imageStyle={{
          width: 314,
          height: 220,
          marginRight: 16,
          marginBottom: 20,
        }}
      />
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({})

export default SalesScreen
