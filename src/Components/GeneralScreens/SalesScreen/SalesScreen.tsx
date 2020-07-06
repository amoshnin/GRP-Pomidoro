// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { ScrollView, View, Image, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"
import SalesSection from "~/Components/Shared/Sections/SalesSection/SalesSection"

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

  const { t } = useTranslation()

  return (
    <ScrollView>
      {props.SalesList && props.SalesList.length > 1 ? (
        <>
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
            text={t("GeneralPhrases.УзнатьГдеМойЗаказ")}
          />
          <SalesSection
            navigation={props.navigation}
            SalesList={props.SalesList}
            titleText={t("SalesScreen.ВсеАкции")}
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
            {t("SalesScreen.EmptyCase.EmptyCaseTitle")}
          </Text>
          <Text style={styles.subtitle} size={16}>
            {t("SalesScreen.EmptyCase.PPEmptyCaseSubtitle")}
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
