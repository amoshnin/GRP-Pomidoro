// PLUGINS IMPORTS //
import React, { useRef, useEffect } from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import Button from "~/Components/Shared/Components/Button/Button"
import SlidingUpPanel from "rn-sliding-up-panel"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const BottomSection: React.FC<PropsType> = (props) => {
  const _panel = useRef(null as any)

  useEffect(() => {
    _panel.current.show()
  }, [])

  return (
    <SlidingUpPanel
      ref={_panel}
      draggableRange={{ top: 220, bottom: 135 }}
      backdropOpacity={0.5}
      onBottomReached={() => {
        _panel.current.hide()
      }}
    >
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text size={16}>Подтвердите адрес</Text>
          <Text size={20} weight="bold" style={styles.title}>
            ул. Засумская, 12
          </Text>
          <Button
            onPress={() => props.navigation.navigate("PaymentMethodScreen")}
            text="Подтвердить"
            buttonStyle={{
              marginTop: 40,
              width: 315,
              height: 50,
              backgroundColor: "#96A637",
              borderRadius: 6,
              alignSelf: null,
            }}
            textStyle={{
              color: "white",
              fontSize: 16,
            }}
          />
        </View>
      </View>
    </SlidingUpPanel>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    height: "100%",
    width: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
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

  container: {
    marginTop: 32,
    marginHorizontal: 32,
  },

  title: {
    marginTop: 14,
  },
})

export default BottomSection
