// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { View, Image, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"
import { TextInput } from "react-native-paper"

// COMPONENTS IMPORTS //
import Text from "~/Components/Shared/Components/Text/Text"
import Button from "~/Components/Shared/Components/Button/Button"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  SMSVerificationCode: string

  registerUserThunkCreator: () => any
}

const SmsVerificationScreen: React.FC<PropsType> = (props) => {
  const [value, setValue] = useState("" as string)
  const [wrongPass, setWrongPass] = useState(false as boolean)
  const { t } = useTranslation()

  useEffect(() => {
    setWrongPass(false)
    if (value.length > 4) {
      setValue(value.slice(0, 1))
    }
  }, [value])

  const VerifyCode = () => {
    if (props.SMSVerificationCode === value) {
      props.registerUserThunkCreator().then(() => {
        props.navigation.navigate("RegistrationSuccesfulScreen")
      })
    } else {
      setWrongPass(true)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        mode="outlined"
        label={t("Auth.RegisterScreen.SmsVerificationScreen.ВведитеСМСКод")}
        theme={{ colors: { primary: "#96A637" } }}
        keyboardType={"numeric"}
        value={value}
        onChangeText={(text: string) =>
          value.length >= 4 && text.length >= value.length
            ? undefined
            : setValue(text)
        }
      />
      {wrongPass && (
        <Text style={styles.error}>
          {t("Auth.RegisterScreen.SmsVerificationScreen.КодНеПравильный")}
        </Text>
      )}

      <Button
        text={t("Auth.RegisterScreen.SmsVerificationScreen.Проверить")}
        buttonStyle={styles.button}
        textStyle={styles.button_text}
        onPress={() => VerifyCode()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },

  input: {
    width: "80%",
    backgroundColor: "white",
    marginBottom: 10,
  },

  button: {
    marginTop: 25,
    backgroundColor: "#96A637",
    width: "80%",
    borderRadius: 6,
    height: 56,
  },

  button_text: {
    color: "white",
  },

  error: {
    color: "crimson",
    fontWeight: "bold",
  },
})

export default SmsVerificationScreen
