// PLUGINS IMPORTS //
import React, { useState } from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { useTranslation } from "react-i18next"
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
  const { t } = useTranslation()

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
        <Text>
          {datePicked
            ? dayjs(datePicked).format("HH:mm")
            : t("OrderingProcess.DeliveryTimeSelectionScreen.Время")}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <Button
        onPress={() => confirmFunction()}
        text={t("GeneralPhrases.Продолжить")}
        buttonStyle={styles.button}
        textStyle={styles.button_text}
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

  button: {
    marginTop: 20,
    width: 315,
    height: 50,
    backgroundColor: "#96A637",
    borderRadius: 6,
  },

  button_text: {
    color: "white",
    fontSize: 16,
  },
})

export default Footer
