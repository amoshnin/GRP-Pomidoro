// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { RadioButton, TextInput } from "react-native-paper"
import Text from "~/Components/Shared/Components/Text/Text"
import Button from "~/Components/Shared/Components/Button/Button"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const Body: React.FC<PropsType> = (props) => {
  const [checkedValue, setCheckedValue] = useState("Забрать самому" as string)

  const SelectionList = [
    {
      title: "Забрать самому",
      description: "Ближайший филиал – ул. Засумская, 12",
    },
    {
      title: "Киев, ул. Чигорина д.49 ",
      description: "",
    },
    {
      title: "Киев, ул. О. Довбуша 37",
      description: "",
    },
  ]

  const saveInfoAndRedirect = () => {
    props.navigation.navigate("ConfirmAdressScreen")
  }

  return (
    <View style={styles.container}>
      {SelectionList.map((selection: any) => {
        return (
          <View style={styles.item_wrap}>
            <RadioButton
              uncheckedColor="silver"
              value={selection.title}
              status={
                checkedValue === selection.title ? "checked" : "unchecked"
              }
              color="#96A637"
              onPress={() => {
                setCheckedValue(selection.title)
              }}
            />
            <View style={styles.text_wrap}>
              <Text size={16} weight="bold" style={styles.item_text}>
                {selection.title}
              </Text>
              {selection.description ? (
                <Text style={styles.item_text}>{selection.description}</Text>
              ) : null}
            </View>
          </View>
        )
      })}
      <View style={styles.btns_wrap}>
        <TouchableOpacity>
          <Text style={styles.btn_text} weight="bold" size={16}>
            Выбрать на карте
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ManualDeliveryScreen")}
        >
          <Text style={styles.btn_text} weight="bold" size={16}>
            Ввести адрес вручную
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        multiline
        placeholder="Дополнительные комментарии"
        style={styles.input}
        theme={{ colors: { primary: "#1A1824" } }}
      />

      <Button
        onPress={saveInfoAndRedirect}
        text="Продолжить"
        buttonStyle={{
          marginTop: 36,
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
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
  },

  item_wrap: {
    flexDirection: "row",
    alignItems: "center",
  },

  text_wrap: {
    marginLeft: 13,
    marginVertical: 12.5,
  },

  item_text: {
    letterSpacing: 0.3,
    lineHeight: 20,
  },

  btns_wrap: {
    marginHorizontal: 50,
    marginTop: 10,
  },

  btn_text: {
    color: "#96A637",
    marginBottom: 6,
    marginTop: 5,
  },

  input: {
    backgroundColor: "white",
    marginTop: 30,
    height: 40,
  },
})

export default Body
