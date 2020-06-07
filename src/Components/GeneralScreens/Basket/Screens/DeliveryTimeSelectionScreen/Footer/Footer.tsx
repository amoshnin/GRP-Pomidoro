// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import DateTimePickerModal from "react-native-modal-datetime-picker"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"
import Text from "~/Components/Shared/Components/Text/Text"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Footer: React.FC<PropsType> = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [datePicked, setDatePicked] = useState(null as string | null)

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date: any) => {
    hideDatePicker()
    // setDatePicked(date)
    console.log(date)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.input} onPress={showDatePicker}>
        <Text>{"Время"}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <Button
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
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},

  input: {
    width: 315.44,
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
})

export default Footer
