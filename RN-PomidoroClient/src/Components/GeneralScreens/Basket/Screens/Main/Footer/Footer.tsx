// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  allowProceed: boolean
}

const Footer: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Button
        onPress={() =>
          props.allowProceed &&
          props.navigation.navigate("DeliveryTimeSelectionScreen")
        }
        text={t("OrderingProcess.Basket.ЗаказатьСейчас")}
        buttonStyle={{
          marginTop: 20,
          width: 315,
          height: 50,
          backgroundColor: "#96A637",
          borderRadius: 6,
        }}
        textStyle={{
          color: "white",
        }}
      />
      <Button
        text={t("OrderingProcess.Basket.ЗаказатьНаДругоеВремя")}
        buttonStyle={{
          marginTop: 19,
          width: 315,
          height: 50,
          borderRadius: 6,
        }}
        textStyle={{
          color: "black",
        }}
        onPress={() => {}}
      />
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {},
})

export default Footer
