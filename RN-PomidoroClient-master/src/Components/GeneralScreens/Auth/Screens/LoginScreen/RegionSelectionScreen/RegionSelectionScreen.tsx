// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { RadioButton } from "react-native-paper"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //
import Text from "~/Components/Shared/Components/Text/Text"
import Button from "~/Components/Shared/Components/Button/Button"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const RegionSelectionScreen: React.FC<PropsType> = (props) => {
  const [checkedValue, setCheckedValue] = useState(null as string | null)
  const { t } = useTranslation()

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
        {t("Auth.LoginScreen.RegionSelectionScreen.ВыберитеВашРегион")}
      </Text>
      {RegionsList.map((region: string) => {
        return (
          <View style={styles.region_wrap} key={region}>
            <RadioButton
              uncheckedColor="silver"
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
        text={t("GeneralPhrases.Продолжить")}
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
