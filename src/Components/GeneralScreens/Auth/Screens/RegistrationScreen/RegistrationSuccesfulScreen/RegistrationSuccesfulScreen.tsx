// PLUGINS IMPORTS //
import React from "react"
import { View, Image, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //
import Text from "~/Components/Shared/Components/Text/Text"
import Button from "~/Components/Shared/Components/Button/Button"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const RegistrationSuccesfulScreen: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Image source={require("../../../../../../Images/succesful.png")} />
      <Text size={30} weight="bold" style={styles.title}>
        {t(
          "Auth.RegisterScreen.SuccesfulRegistrationScreen.PPSuccesfulRegisterTitle"
        )}
      </Text>
      <Text size={16} style={styles.text}>
        {t(
          "Auth.RegisterScreen.SuccesfulRegistrationScreen.PPSuccesfulRegisterSubtitle"
        )}
      </Text>
      <Button
        text={t("Auth.LoginScreen.Войти")}
        onPress={() => props.navigation.navigate("LoginScreen")}
        textStyle={{
          color: "white",
          fontSize: 16,
          letterSpacing: 0.3,
        }}
        buttonStyle={{
          backgroundColor: "#96A637",
          width: 315,
          height: 50,
          borderRadius: 6,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    marginTop: 49.25,
    textAlign: "center",
    width: 342.19,
    letterSpacing: 0.3,
  },

  text: {
    marginTop: 20,
    marginBottom: 25,
    width: 296,
    textAlign: "center",
  },
})

export default RegistrationSuccesfulScreen
