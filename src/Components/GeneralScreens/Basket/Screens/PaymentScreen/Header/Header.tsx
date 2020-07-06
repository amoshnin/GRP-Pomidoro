// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"
import dayjs from "dayjs"

// COMPONENTS IMPORTS //
import Text from "~/Components/Shared/Components/Text/Text"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  DeliveryTime: string
}

const Header: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text size={30} weight="bold">
        {t("OrderingProcess.PaymentScreen.ПодтверждениеЗаказа")}
      </Text>
      <View style={styles.divider} />
      <View style={styles.text_wrap}>
        <Text size={20} weight="bold" style={styles.subtitle}>
          {t("OrderingProcess.PaymentScreen.ВремяДоставки")}
        </Text>
        <Text>{dayjs(props.DeliveryTime).format("dddd HH:mm")}</Text>
      </View>
      <View style={styles.divider} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },

  text_wrap: {
    marginVertical: 9,
    marginTop: 4,
  },

  subtitle: {
    marginBottom: 6,
  },

  divider: {
    borderTopColor: "#1A1824",
    borderWidth: 0.5,
    opacity: 0.2,
    marginVertical: 12,
  },
})

export default Header
