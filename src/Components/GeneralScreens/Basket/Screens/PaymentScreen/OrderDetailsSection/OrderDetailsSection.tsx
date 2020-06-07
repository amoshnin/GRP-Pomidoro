// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  totalPrice: number
  navigation: any
}

const OrderDetailsSection: React.FC<PropsType> = (props) => {
  return (
    <>
      <View style={{ ...styles.container, ...styles.item_container }}>
        <Text weight="bold" size={16} style={styles.text}>
          Итого к оплате
        </Text>
        <Text weight="bold" size={16} style={styles.text}>
          {props.totalPrice} ₴
        </Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.item_container}>
        <Text weight="bold" size={16} style={styles.text}>
          К оплате за доставку
        </Text>
        <Text weight="bold" size={16} style={styles.text}>
          {props.totalPrice} ₴
        </Text>
      </View>
      <View style={styles.divider} />
      <Text size={20} weight="bold" style={styles.section_title}>
        Адрес доставки
      </Text>
      <Text size={16}>ул. Засумкая, 12</Text>
      <View style={styles.divider} />
      <Text size={20} weight="bold" style={styles.section_title}>
        Способ оплаты
      </Text>
      <Text size={16}>Карта ** 5443</Text>
      <View style={styles.divider} />
      <View style={styles.button}>
        <Text size={16} weight="bold" color="white">
          475 ₴
        </Text>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("SuccesfulPaymentScreen")}
        >
          <Text size={16} weight="bold" color="white">
            Оплатить
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: -12,
    paddingTop: 20,
    borderTopWidth: 1,
    borderColor: "#A9A9A9",
  },

  item_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  text: {
    letterSpacing: 0.3,
  },

  section_title: {
    marginBottom: 3,
    letterSpacing: 0.3,
  },

  button: {
    marginBottom: 156,
    marginTop: 14,
    backgroundColor: "#96A637",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18.5,
    paddingVertical: 15,
    borderRadius: 6,
  },

  divider: {
    borderTopColor: "#1A1824",
    borderWidth: 0.5,
    opacity: 0.2,
    marginVertical: 20,
  },
})

export default OrderDetailsSection
