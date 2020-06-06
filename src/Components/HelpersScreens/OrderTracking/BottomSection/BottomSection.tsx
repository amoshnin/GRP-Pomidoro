// PLUGINS IMPORTS //
import React, { useRef, useEffect } from "react"
import { View, ScrollView, Dimensions, StyleSheet } from "react-native"
import SlidingUpPanel from "rn-sliding-up-panel"

// COMPONENTS IMPORTS //
import RouteSection from "./RouteSection/RouteSection"
import OrderDataSection from "./OrderDataSection/OrderDataSection"
import OrderProductsDataSection from "./OrderProductsDataSection/OrderProductsDataSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  route: any
}

const BottomSection: React.FC<PropsType> = (props) => {
  const ProductsList = [
    {
      name: "Пеперони спайс",
      count: 2,
      price: 700,
    },
    {
      name: "Четыре мяса",
      count: 9,
      price: 700,
    },
    {
      name: "Pepsi",
      count: 12,
      price: 500,
    },
  ]

  const _panel = useRef(null as any)
  const { height } = Dimensions.get("window")

  useEffect(() => {
    _panel.current.show()
  }, [])

  return (
    <SlidingUpPanel
      ref={_panel}
      draggableRange={{ top: height / 1.3, bottom: 470 }}
      backdropOpacity={0.2}
      onBottomReached={() => {
        _panel.current.hide()
      }}
    >
      {(dragHandler) => (
        <View style={styles.wrapper}>
          <View style={styles.dragHandler} {...dragHandler} />
          <ScrollView
            style={styles.container}
            showsHorizontalScrollIndicator={false}
          >
            <RouteSection />
            <View style={styles.divider} />
            <OrderDataSection
              orderID={props.route.params.orderID}
              date={"24.03.2019"}
              delivered={false}
            />
            <OrderProductsDataSection productsList={ProductsList} />
          </ScrollView>
        </View>
      )}
    </SlidingUpPanel>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  wrapper: {
    borderTopRightRadius: 34,
    borderTopLeftRadius: 34,
    position: "absolute",
    height: "80%",
    width: "100%",
  },

  container: {
    borderTopRightRadius: 34,
    borderTopLeftRadius: 34,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },

  dragHandler: {
    width: 100,
    height: 10,
    borderRadius: 100,
    backgroundColor: "#F9F6EF",
    alignSelf: "center",
  },

  divider: {
    borderTopColor: "#DCDCDC",
    borderTopWidth: 1,
    marginVertical: 14,
  },
})

export default BottomSection
