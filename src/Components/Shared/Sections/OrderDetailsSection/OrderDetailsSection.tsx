// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  totalPrice: number
  bonusesCount?: number
  deliveryPrice?: number
  adress?: string
  cardNum?: string
}

const OrderDetailsSection: React.FC<PropsType> = (props) => {
  return (
    <>
      <View style={{ ...styles.container, ...styles.item_container }}>
        <Text weight="bold" size={16} style={styles.text}>
          Итого к оплате
        </Text>
        <View>
          <Text weight="bold" size={16} style={styles.text}>
            {props.totalPrice} ₴
          </Text>
          {props.bonusesCount ? (
            <Text style={styles.text}>и {props.bonusesCount} бонусов</Text>
          ) : null}
        </View>
      </View>
      {props.deliveryPrice ? (
        <>
          <View style={styles.divider} />
          <View style={styles.item_container}>
            <Text weight="bold" size={16} style={styles.text}>
              К оплате за доставку
            </Text>
            <Text weight="bold" size={16} style={styles.text}>
              {props.deliveryPrice} ₴
            </Text>
          </View>
        </>
      ) : null}
      {props.adress ? (
        <>
          <View style={styles.divider} />
          <Text size={20} weight="bold" style={styles.section_title}>
            Адрес доставки
          </Text>
          <Text size={16}>{props.adress}</Text>
        </>
      ) : null}

      {props.cardNum ? (
        <>
          <View style={styles.divider} />
          <Text size={20} weight="bold" style={styles.section_title}>
            Способ оплаты
          </Text>
          <Text size={16}>{props.cardNum}</Text>
          <View style={styles.divider} />
        </>
      ) : null}
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

  divider: {
    borderTopColor: "#1A1824",
    borderWidth: 0.5,
    opacity: 0.2,
    marginVertical: 20,
  },
})

export default OrderDetailsSection
