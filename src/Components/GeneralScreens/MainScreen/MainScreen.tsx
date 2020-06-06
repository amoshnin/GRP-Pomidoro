// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import SalesSection from "../../Shared/Sections/SalesSection/SalesSection"
import MenuSection from "../../Shared/Sections/MenuSection/MenuSection"
import ProductListSection from "../../Shared/Sections/ProductsListSection/ProductsListSection"

// EXTRA IMPORTS //
import Button from "../../Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const MainScreen: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Button
        onPress={() => props.navigation.navigate("OrderTracking")}
        buttonStyle={{
          borderRadius: 20,
          backgroundColor: "#96A637",
        }}
        rectStyle={{
          height: 40,
          width: 315,
          justifyContent: "center",
          alignItems: "center",
        }}
        textStyle={{ color: "#FFFFFF" }}
        text={"Узнать, где мой заказ"}
      />

      <SalesSection
        navigation={props.navigation}
        titleText={"Откройте новые вкусы"}
        titleStyle={{
          fontSize: 30,
          width: 221,
        }}
        scroll_horizontal={true}
        imageStyle={{
          width: 270,
          height: 300,
          marginRight: 16,
        }}
      />
      <MenuSection
        navigation={props.navigation}
        titleText={"Меню"}
        scroll={true}
        titleStyle={{
          fontSize: 20,
          letterSpacing: 0.3,
          width: 221,
        }}
        containerStyle={{ marginTop: 25 }}
      />
      <ProductListSection navigation={props.navigation} />
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
})

export default MainScreen
