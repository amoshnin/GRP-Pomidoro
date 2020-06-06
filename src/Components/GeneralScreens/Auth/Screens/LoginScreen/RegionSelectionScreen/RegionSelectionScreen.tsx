// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { RadioButton } from "react-native-paper"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "../../../../../Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const RegionSelectionScreen: React.FC<PropsType> = (props) => {
  const [checkedValue, setCheckedValue] = useState(null as string | null)

  let RegionsList = [
    "Бровары",

    "Петропавловская",

    "Чайки",

    "Буча",

    "Ирпень",

    "Борисполь",
  ]

  return (
    <View style={styles.container}>
      <Text weight="bold" size={30} style={styles.title}>
        Выберите ваш регион:
      </Text>
      {RegionsList.map((region: string) => {
        return (
          <View style={styles.region_wrap}>
            <RadioButton
              value={region}
              status={checkedValue === region ? "checked" : "unchecked"}
              color="#96A637"
              onPress={() => {
                setCheckedValue(region)
              }}
            />
            <Text size={20} weight="bold" style={styles.region_text}>
              {region}
            </Text>
          </View>
        )
      })}
      <Button
        text="Продолжить"
        onPress={() => props.navigation.navigate("MainScreen")}
        buttonStyle={{
          marginTop: 22.5,
          marginBottom: 20,
          alignSelf: null,
          height: 50,
          width: 315,
          borderRadius: 6,
          backgroundColor: "#96A637",
        }}
        textStyle={{
          color: "white",
          fontSize: 16,
          letterSpacing: 0.3,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },

  title: {
    width: 249,
    marginBottom: 22.5,
  },

  region_wrap: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20.5,
  },

  region_text: {
    letterSpacing: 0.3,
    marginLeft: 12,
  },
})

export default RegionSelectionScreen
