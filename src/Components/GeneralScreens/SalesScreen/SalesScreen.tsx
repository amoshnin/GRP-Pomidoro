// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { ScrollView, View, Image, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //
import Button from "../../Shared/Components/Button/Button"
import SalesSection from "../../Shared/Sections/SalesSection/SalesSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  SalesList: Array<{
    title: string
    image: string
    description: string
    type: string
  }>

  getSalesListThunkCreator: () => void
}

const SalesScreen: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.getSalesListThunkCreator()
  }, [])

  return (
    <ScrollView>
      {props.SalesList && props.SalesList.length > 1 ? (
        <>
          {" "}
          <Button
            onPress={() => props.navigation.navigate("OrderTracking")}
            buttonStyle={{
              backgroundColor: "#96A637",
              borderRadius: 20,
              marginTop: 16,
            }}
            rectStyle={{
              height: 40,
              width: 315,
              justifyContent: "center",
              alignItems: "center",
            }}
            textStyle={{ color: "white" }}
            text={"Узнать, где мой заказ"}
          />
          <SalesSection
            navigation={props.navigation}
            SalesList={props.SalesList}
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
        </>
      ) : (
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("~/Images/orders-empty.png")}
          />
          <Text weight="bold" size={30} style={styles.title}>
            Пока нет акций
          </Text>
          <Text style={styles.subtitle} size={16}>
            Иследуйте наши блюда и заказывайие с доставкой
          </Text>
        </View>
      )}
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: "55%",
    alignItems: "center",
  },

  image: {
    marginBottom: 31.03,
  },

  title: {
    letterSpacing: 0.3,
  },

  subtitle: {
    textAlign: "center",
    width: 226,
    marginTop: 19,
  },
})

export default SalesScreen
