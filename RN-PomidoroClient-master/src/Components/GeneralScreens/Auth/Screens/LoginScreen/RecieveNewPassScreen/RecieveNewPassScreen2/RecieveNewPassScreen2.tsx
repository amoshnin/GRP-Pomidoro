// PLUGINS IMPORTS //
import React from "react"
import { View, ScrollView, TouchableOpacity, StyleSheet } from "react-native"
import { TextInput } from "react-native-paper"
import { useTranslation } from "react-i18next"
import { Formik } from "formik"
import * as yup from "yup"

// COMPONENTS IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"
import Text from "~/Components/Shared/Components/Text/Text"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const RecieveNewPassScreen: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()

  const ValidationSchema = yup.object({
    code: yup
      .string()
      .required(t("GeneralPhrases.Validation.СМСКодОбязателен"))
      .typeError(t("GeneralPhrases.Validation.СМСКодОбязателен")),
  })

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text weight="bold" size={30} style={styles.title}>
        {t("Auth.LoginScreen.RecieveNewPassScreen.ПолучитьНовыйПароль")}
      </Text>
      <Text style={styles.subtitle}>
        {t("Auth.LoginScreen.RecieveNewPassScreen.PPВведитеКодСмс")}
      </Text>
      <Formik
        validationSchema={ValidationSchema}
        initialValues={{
          code: null as number | null,
        }}
        onSubmit={(values: any) => {
          props.navigation.navigate("MainScreen")
        }}
      >
        {(FormikProps) => (
          <>
            <TextInput
              placeholder={t(
                "Auth.LoginScreen.RecieveNewPassScreen.КодВостоновлениеСмс"
              )}
              placeholderTextColor="rgba(26, 24, 36, 0.5)"
              theme={{ colors: { primary: "#1A1824" } }}
              onChangeText={FormikProps.handleChange("code")}
              onBlur={() => {
                FormikProps.handleBlur("code")
              }}
              value={FormikProps.values.code as any}
              style={styles.input}
            />
            {FormikProps.touched.code && FormikProps.errors.code ? (
              <Text style={styles.error_message}>
                {FormikProps.touched.code && FormikProps.errors.code}
              </Text>
            ) : null}

            <Button
              text={t("Auth.LoginScreen.Войти")}
              onPress={FormikProps.handleSubmit}
              buttonStyle={{
                marginTop: 25,
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
          </>
        )}
      </Formik>

      <View style={styles.timer_wrap}>
        <TouchableOpacity>
          <Text style={styles.button_text} weight="bold" size={16}>
            {t("Auth.LoginScreen.RecieveNewPassScreen.ОтправитьСмсЕщеРаз")}
          </Text>
        </TouchableOpacity>
        <Text style={styles.timer_text}>
          {t("Auth.LoginScreen.RecieveNewPassScreen.БудетДоступноЧерез")} 3:45
        </Text>
      </View>
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 29,
    marginHorizontal: 30,
    flex: 1,
  },

  title: {
    marginBottom: 28,
    width: 243,
  },

  subtitle: {
    marginBottom: 20,
    width: 291,
    letterSpacing: 0.3,
  },

  input: {
    backgroundColor: "white",
    height: 45,
    width: 315,
    fontSize: 16,
  },

  error_message: {
    color: "red",
    marginTop: 3,
  },

  timer_wrap: {
    marginTop: 20,
  },

  button_text: {
    color: "#96A637",
  },

  timer_text: {
    letterSpacing: 0.3,
  },
})

export default RecieveNewPassScreen
