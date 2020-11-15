// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, Image, StyleSheet } from "react-native"
import { TextInput } from "react-native-paper"
import { useTranslation } from "react-i18next"
import { Formik } from "formik"

// COMPONENTS IMPORTS //
import Text from "~/Components/Shared/Components/Text/Text"

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  LoginUserThunkCreator: (phoneNum: string, password: string) => any
}

const LoginScreen: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text weight="bold" size={30} style={styles.title}>
        {t("Auth.LoginScreen.ВходСистему")}
      </Text>
      <Formik
        initialValues={{
          phoneNum: null as number | null,
          password: null as string | null,
        }}
        onSubmit={(values: any) => {
          props
            .LoginUserThunkCreator(values.phoneNum, values.password)
            .then(() => props.navigation.navigate("RegionSelectionScreen"))
        }}
      >
        {(FormikProps) => (
          <>
            <View>
              <TextInput
                placeholder={t("Auth.SharedFields.НомерТелефона")}
                placeholderTextColor="rgba(26, 24, 36, 0.5)"
                theme={{ colors: { primary: "#1A1824" } }}
                onChangeText={FormikProps.handleChange("phoneNum")}
                onBlur={() => {
                  FormikProps.handleBlur("phoneNum")
                }}
                keyboardType="number-pad"
                textContentType="creditCardNumber"
                value={FormikProps.values.phoneNum as any}
                style={{ ...styles.input, ...styles.tel_input }}
              />

              <View style={styles.tel_subtitle_wrap}>
                <Image
                  style={styles.icon}
                  source={require("~/Images/Icons/icon-ukr-flag.png")}
                />
                <Text style={styles.tel_subtitle}>+380</Text>
              </View>
            </View>

            <TextInput
              placeholder={t("Auth.SharedFields.ВведитеПароль")}
              placeholderTextColor="rgba(26, 24, 36, 0.5)"
              theme={{ colors: { primary: "#1A1824" } }}
              onChangeText={FormikProps.handleChange("password")}
              onBlur={() => {
                FormikProps.handleBlur("password")
              }}
              textContentType="password"
              autoCompleteType="password"
              value={FormikProps.values.password as any}
              style={styles.input}
            />

            <Button
              text={t("Auth.LoginScreen.Войти")}
              onPress={FormikProps.handleSubmit}
              buttonStyle={styles.login_button}
              textStyle={styles.login_button_text}
            />
          </>
        )}
      </Formik>
      <TouchableOpacity
        style={styles.bottom_text_wrap}
        onPress={() => props.navigation.navigate("RecieveNewPassScreen1")}
      >
        <Text style={styles.subtitle}>
          {t("Auth.LoginScreen.ПолучитеНовыйПароль")}
        </Text>
      </TouchableOpacity>
      <Button
        text={t("Auth.RegisterScreen.Регистрация")}
        onPress={() => props.navigation.navigate("RegistrationScreen")}
        buttonStyle={styles.button}
        textStyle={styles.button_text}
      />
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginHorizontal: 30,
    flex: 1,
  },

  title: {
    width: 169,
    marginBottom: 12,
  },

  input: {
    height: 45,
    width: 315,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: "white",
  },

  tel_input: {
    paddingLeft: 60,
  },

  tel_subtitle_wrap: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    top: 13,
  },

  tel_subtitle: {
    color: "rgba(26, 24, 36, 1)",
  },

  icon: {
    width: 20,
    height: 12,
    marginRight: 4,
  },

  bottom_text_wrap: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 22,
  },

  subtitle: {
    marginLeft: -30,
    letterSpacing: 0.3,
  },

  login_button: {
    marginTop: 5,
    height: 50,
    width: 315,
    borderRadius: 6,
    backgroundColor: "#96A637",
  },

  login_button_text: {
    color: "white",
    fontSize: 16,
    letterSpacing: 0.3,
  },

  button: {
    marginTop: "55%",
    height: 50,
    width: 315,
    borderRadius: 6,
  },

  button_text: {
    fontSize: 16,
    letterSpacing: 0.3,
  },
})

export default LoginScreen
