// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { ScrollView, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //
import SalesSection from "../../Shared/Sections/SalesSection/SalesSection"
import MenuSection from "../../Shared/Sections/MenuSection/MenuSection"
import ProductsListSection from "~/Components/Shared/Sections/ProductsListSection/ProductsListSection"

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"

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

  CurrentCategoryFoodsList: Array<any>

  getCertainCategoryFoodsListThunkCreator: (
    rawId: string,
    limit?: string
  ) => void
  addItemToOrderActionCreator: (
    title: string,
    price: string,
    originalPrice: string,
    image: string,
    size: string,
    count: string,
    ingredients: Array<string>
  ) => void

  getMenuListThunkCreator: () => void
  getSalesListThunkCreator: () => void
}

const MainScreen: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()
  useEffect(() => {
    props.getMenuListThunkCreator()
    props.getSalesListThunkCreator()
    props.getCertainCategoryFoodsListThunkCreator("3", "10")
  }, [])

  return (
    <ScrollView style={styles.container}>
      {props.SalesList && props.SalesList.length > 0 && (
        <>
          <Button
            onPress={() => props.navigation.navigate("OrderTracking")}
            buttonStyle={styles.header_button}
            rectStyle={styles.header_button_rect}
            textStyle={{ color: "#FFFFFF" }}
            text={t("GeneralPhrases.УзнатьГдеМойЗаказ")}
          />
          <SalesSection
            navigation={props.navigation}
            titleText={t("SalesScreen.ОткройтеНовыеВкусы")}
            SalesList={props.SalesList}
            titleStyle={styles.section_title}
            scroll_horizontal={true}
            imageStyle={styles.sales_image_block}
          />
        </>
      )}
      {props.MenuList.length > 0 && (
        <MenuSection
          navigation={props.navigation}
          MenuList={props.MenuList}
          titleText={t("Dashboard.Меню")}
          scroll={true}
          titleStyle={styles.section_title}
          containerStyle={{ marginTop: 25 }}
        />
      )}
      <ProductsListSection
        navigation={props.navigation}
        productsList={props.CurrentCategoryFoodsList}
        addItemToOrderActionCreator={props.addItemToOrderActionCreator}
      />
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },

  header_button: {
    borderRadius: 20,
    backgroundColor: "#96A637",
  },

  header_button_rect: {
    height: 40,
    width: 315,
    justifyContent: "center",
    alignItems: "center",
  },

  section_title: {
    fontSize: 20,
    letterSpacing: 0.3,
    width: 221,
  },

  sales_image_block: {
    width: 270,
    height: 300,
    marginRight: 16,
  },
})

export default MainScreen
