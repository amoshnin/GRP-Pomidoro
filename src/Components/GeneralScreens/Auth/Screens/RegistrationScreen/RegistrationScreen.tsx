// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, ScrollView, TextInput, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { Checkbox } from "react-native-paper"
import { Formik } from "formik"
import * as yup from "yup"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "../../../../Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const RegistrationScreen: React.FC<PropsType> = (props) => {
  const [checkedSMS, setCheckedSMS] = useState(false as boolean)

  const [nameInputBorderColor, setNameInputBorderColor] = useState(
    "#DCDCDC" as string
  )
  const [phoneNumInputBorderColor, setPhoneNumInputBorderColor] = useState(
    "#DCDCDC" as string
  )
  const [passwordInputBorderColor, setPasswordInputBorderColor] = useState(
    "#DCDCDC" as string
  )
  const [emailInputBorderColor, setEmailInputBorderColor] = useState(
    "#DCDCDC" as string
  )

  const ValidationSchema = yup.object({
    name: yup.string().required("Имя обязательно").typeError("Имя обязательно"),
    phoneNum: yup
      .number()
      .required("Телефон обязателен")
      .typeError("Телефон обязателен"),
    password: yup
      .string()
      .min(6, "Пароль слишком кототкий - минимум 6 символов")
      .matches(
        /[a-zA-Z](?=.*[0-9])/ as any,
        "Пароль должен обязательно иметь цифры и буквы"
      )
      .required("Пароль обязателен")
      .typeError("Пароль обязателен"),
  })

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text weight="bold" size={30} style={styles.title}>
        Регистрация
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
          props.navigation.navigate("RegistrationSuccesfulScreen")
        }}
      >
        {(FormikProps) => (
          <>
            <TextInput
              placeholder="Имя пользователя"
              placeholderTextColor="rgba(26, 24, 36, 0.5)"
              onChangeText={FormikProps.handleChange("name")}
              onFocus={() => setNameInputBorderColor("#1A1824")}
              onBlur={() => {
                FormikProps.handleBlur("name")
                setNameInputBorderColor("#DCDCDC")
              }}
              textContentType="name"
              autoCompleteType="name"
              value={FormikProps.values.name as any}
              style={{
                ...styles.input,
                borderBottomColor: nameInputBorderColor,
              }}
            />
            <Text style={styles.error_message}>
              {FormikProps.touched.name && FormikProps.errors.name}
            </Text>

            <TextInput
              placeholder="Номер телефона"
              placeholderTextColor="rgba(26, 24, 36, 0.5)"
              onChangeText={FormikProps.handleChange("phoneNum")}
              onFocus={() => setPhoneNumInputBorderColor("#1A1824")}
              onBlur={() => {
                FormikProps.handleBlur("phoneNum")
                setPhoneNumInputBorderColor("#DCDCDC")
              }}
              keyboardType="number-pad"
              textContentType="creditCardNumber"
              value={FormikProps.values.phoneNum as any}
              style={{
                ...styles.input,
                borderBottomColor: phoneNumInputBorderColor,
              }}
            />
            <Text style={styles.error_message}>
              {FormikProps.touched.phoneNum && FormikProps.errors.phoneNum}
            </Text>

            <TextInput
              placeholder="Введите пароль"
              placeholderTextColor="rgba(26, 24, 36, 0.5)"
              onChangeText={FormikProps.handleChange("password")}
              onFocus={() => setPasswordInputBorderColor("#1A1824")}
              onBlur={() => {
                FormikProps.handleBlur("password")
                setPasswordInputBorderColor("#DCDCDC")
              }}
              textContentType="password"
              autoCompleteType="password"
              value={FormikProps.values.password as any}
              style={{
                ...styles.input,
                borderBottomColor: passwordInputBorderColor,
              }}
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
                Получать каждый раз новый пароль по СМС
              </Text>
            </View>

            <TextInput
              placeholder="Email (Необязательно)"
              placeholderTextColor="rgba(26, 24, 36, 0.5)"
              onChangeText={FormikProps.handleChange("email")}
              onFocus={() => setEmailInputBorderColor("#1A1824")}
              onBlur={() => {
                FormikProps.handleBlur("email")
                setEmailInputBorderColor("#DCDCDC")
              }}
              textContentType="emailAddress"
              autoCompleteType="email"
              value={FormikProps.values.email as any}
              style={{
                ...styles.input,
                borderBottomColor: emailInputBorderColor,
              }}
            />

            <Button
              text="Зарегистрироваться"
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
        text="Войти"
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
    marginTop: 60,
    marginHorizontal: 30,
    flex: 1,
  },

  title: {
    marginBottom: 12,
  },

  input: {
    borderBottomWidth: 1,
    height: 45,
    width: 315,
    fontSize: 16,
  },

  error_message: {
    color: "red",
    marginTop: 3,
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
