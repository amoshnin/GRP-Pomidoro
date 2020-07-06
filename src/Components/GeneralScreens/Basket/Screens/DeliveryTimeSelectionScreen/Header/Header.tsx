// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Header: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text size={30} weight="bold">
        {t("OrderingProcess.DeliveryTimeSelectionScreen.ChooseDeliveryTime")}
      </Text>
      <Text size={16} style={styles.subtitle}>
        {t("OrderingProcess.DeliveryTimeSelectionScreen.PPChooseDeliveryTime")}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  subtitle: {
    marginTop: 15.5,
    marginBottom: 26,
  },
})

export default Header
