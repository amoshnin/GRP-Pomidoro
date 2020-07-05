// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import DateTimePickerModal from "react-native-modal-datetime-picker"
import dayjs from "dayjs"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"
import Text from "~/Components/Shared/Components/Text/Text"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  setOrderDeliveryTimeActionCreator: (orderDeliveryTime: string | Date) => void
}

const Footer: React.FC<PropsType> = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [datePicked, setDatePicked] = useState("" as string | Date)

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date: any) => {
    hideDatePicker()
    setDatePicked(date)
  }

  const [isClicked, setIsClicked] = useState(false as boolean)
  const confirmFunction = () => {
    setIsClicked(true)
    if (datePicked) {
      setIsClicked(false)
      props.setOrderDeliveryTimeActionCreator(datePicked)
      props.navigation.navigate("SelectAccountScreen")
    }
  }

  return (
    <>
      <TouchableOpacity
        style={[
          styles.input,
          !datePicked &&
            isClicked && { borderBottomColor: "red", borderBottomWidth: 1.2 },
        ]}
        onPress={showDatePicker}
      >
        <Text>{datePicked ? dayjs(datePicked).format("HH:mm") : "Время"}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <Button
        onPress={() => confirmFunction()}
        text="Продолжить"
        buttonStyle={{
          marginTop: 20,
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
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    width: 315.44,
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
})

export default Footer
