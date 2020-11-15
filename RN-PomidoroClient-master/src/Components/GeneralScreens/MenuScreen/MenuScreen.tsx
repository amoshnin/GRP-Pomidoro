// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { ScrollView, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //
import Button from "../../Shared/Components/Button/Button"
import MenuSection from "../../Shared/Sections/MenuSection/MenuSection"
import SalesSection from "../../Shared/Sections/SalesSection/SalesSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  MenuList: Array<any>
  SalesList: Array<{
    title: string
    image: string
    description: string
    type: string
  }>

  getMenuListThunkCreator: () => void
  getSalesListThunkCreator: () => void
}

const MenuScreen: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()
  useEffect(() => {
    props.getMenuListThunkCreator()
    props.getSalesListThunkCreator()
  }, [])

  return (
    <ScrollView style={styles.container}>
      {props.MenuList.length > 0 && (
        <>
          <Button
            onPress={() => props.navigation.navigate("OrderTracking")}
            buttonStyle={styles.header_button}
            rectStyle={styles.header_button_rect}
            textStyle={{ color: "white" }}
            text={t("GeneralPhrases.УзнатьГдеМойЗаказ")}
          />
          <MenuSection
            navigation={props.navigation}
            scroll={false}
            MenuList={props.MenuList}
            titleText={t("Dashboard.Меню")}
            titleStyle={styles.section_title}
            containerStyle={{ marginTop: 20 }}
          />
        </>
      )}
      {props.SalesList && props.SalesList.length > 0 && (
        <>
          <SalesSection
            navigation={props.navigation}
            titleText={t("MenuScreen.АктивныеАкции")}
            SalesList={props.SalesList}
            titleStyle={styles.section_title}
            scroll_horizontal={false}
            imageStyle={styles.sale_image_block}
          />

          <Button
            onPress={() => {
              props.navigation.navigate("SalesScreen")
            }}
            buttonStyle={styles.sales_button}
            rectStyle={styles.sales_button_rect}
            textStyle={styles.sales_button_text}
            text={t("MenuScreen.ПосмотретьВсеАкции")}
          />
        </>
      )}
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },

  header_button: {
    backgroundColor: "#96A637",
    borderRadius: 20,
  },

  header_button_rect: {
    width: 315,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  section_title: {
    fontSize: 30,
  },

  sale_image_block: {
    width: 314,
    height: 220,
    marginRight: 16,
    marginBottom: 20,
  },

  sales_button: {
    backgroundColor: "#EAEAEB",
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 30,
  },

  sales_button_rect: {
    width: 315,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  sales_button_text: {
    color: "black",
  },
})

export default MenuScreen
