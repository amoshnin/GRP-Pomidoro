// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, ScrollView, Image, StyleSheet } from "react-native"
import { TextInput } from "react-native-paper"
import { Checkbox } from "react-native-paper"
import { useTranslation } from "react-i18next"
import { Formik } from "formik"
import * as yup from "yup"

// COMPONENTS IMPORTS //
import Text from "~/Components/Shared/Components/Text/Text"
import Button from "~/Components/Shared/Components/Button/Button"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any

  sendRegisterDataThunkCreator: (
    name: string,
    phoneNum: string,
    password: string,
    email?: string
  ) => any
}

const RegistrationScreen: React.FC<PropsType> = (props) => {
  const [checkedSMS, setCheckedSMS] = useState(false as boolean)
  const { t } = useTranslation()

  const ValidationSchema = yup.object({
    name: yup
      .string()
      .required(t("GeneralPhrases.Validation.ИмяОбязательно"))
      .typeError(t("GeneralPhrases.Validation.ИмяОбязательно")),
    phoneNum: yup
      .number()
      .required(t("GeneralPhrases.Validation.ТелефонОбязателен"))
      .typeError(t("GeneralPhrases.Validation.ТелефонОбязателен")),
    password: yup
      .string()
      .min(6, t("GeneralPhrases.Validation.PPShortPassword"))
      .matches(/[a-zA-Z](?=.*[0-9])/ as any, t("GeneralPhrases.Validation.PPPassCharValid"))
      .required(t("GeneralPhrases.Validation.ПарольОбязателен"))
      .typeError(t("GeneralPhrases.Validation.ПарольОбязателен")),
  })

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text weight="bold" size={30} style={styles.title}>
        {t("Auth.RegisterScreen.Регистрация")}
      </Text>
      <Formik
        validationSchema={ValidationSchema}
        initialValues={{
          name: null as string | null,
          phoneNum: null as number | null,
          password: null as string | null,
          email: null as string | null,
        }}
        onSubmit={(values: any) => {
          props
            .sendRegisterDataThunkCreator(
              values.name,
              values.phoneNum,
              values.password,
              values.email
            )
            .then(() =>
              props.navigation.navigate("SmsVerificationScreen", {
                phone: values.phoneNum,
              })
            )
        }}
      >
        {(FormikProps) => (
          <>
            <TextInput
              placeholder={t("Auth.SharedFields.ИмяПользователя")}
              placeholderTextColor="rgba(26, 24, 36, 0.5)"
              theme={{ colors: { primary: "#1A1824" } }}
              onChangeText={FormikProps.handleChange("name")}
              onBlur={() => {
                FormikProps.handleBlur("name")
              }}
              textContentType="name"
              autoCompleteType="name"
              value={FormikProps.values.name as any}
              style={styles.input}
            />
            <Text style={styles.error_message}>
              {FormikProps.touched.name && FormikProps.errors.name}
            </Text>
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
                value={FormikProps.values.phoneNum as any}
                style={{ ...styles.input, ...styles.tel_input }}
              />

              <View style={styles.tel_subtitle_wrap}>
                <Image style={styles.icon} source={require("~/Images/Icons/icon-ukr-flag.png")} />
                <Text style={styles.tel_subtitle}>+380</Text>
              </View>
            </View>

            <Text style={styles.error_message}>
              {FormikProps.touched.phoneNum && FormikProps.errors.phoneNum}
            </Text>

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
            <Text style={styles.error_message}>
              {FormikProps.touched.password && FormikProps.errors.password}
            </Text>

            <View style={styles.checkbox_wrap}>
              <Checkbox
                status={checkedSMS ? "checked" : "unchecked"}
                color="#96A637"
                onPress={() => {
                  setCheckedSMS(!checkedSMS)
                }}
              />
              <Text size={14} style={styles.checkbox_text}>
                {t("Auth.RegisterScreen.PPRecievePassBySMS")}
              </Text>
            </View>

            <TextInput
              placeholder={`${t("PrivateCabinetScreen.Credentials.Email")} (${t(
                "GeneralPhrases.Validation.Необязательно"
              )})`}
              placeholderTextColor="rgba(26, 24, 36, 0.5)"
              theme={{ colors: { primary: "#1A1824" } }}
              onChangeText={FormikProps.handleChange("email")}
              onBlur={() => {
                FormikProps.handleBlur("email")
              }}
              textContentType="emailAddress"
              autoCompleteType="email"
              value={FormikProps.values.email as any}
              style={styles.input}
            />

            <Button
              text={t("Auth.RegisterScreen.Зарегистрироваться")}
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

      <Button
        text={t("Auth.LoginScreen.Войти")}
        onPress={() => props.navigation.navigate("LoginScreen")}
        buttonStyle={{
          marginBottom: 20,
          alignSelf: null,
          height: 50,
          width: 315,
          borderRadius: 6,
        }}
        textStyle={{
          color: "black",
          fontSize: 16,
          letterSpacing: 0.3,
        }}
      />
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginHorizontal: 30,
    flex: 1,
  },

  title: {
    marginBottom: 12,
  },

  input: {
    backgroundColor: "white",
    height: 45,
    width: 315,
    fontSize: 16,
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

  error_message: {
    color: "red",
    marginTop: 3,
  },

  checkbox_wrap: {
    marginTop: 10,
    flexDirection: "row",
    marginBottom: 30.5,
  },

  checkbox_text: {
    width: 275.5,
    letterSpacing: 0.3,
    marginLeft: 13,
  },
})

export default RegistrationScreen
