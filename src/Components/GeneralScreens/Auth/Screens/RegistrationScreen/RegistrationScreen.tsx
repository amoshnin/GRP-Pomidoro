// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

import { Formik } from "formik"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "../../../../Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const RegistrationScreen: React.FC<PropsType> = (props) => {
  const [phoneNumInputBorderColor, setPhoneNumInputBorderColor] = useState(
    "#DCDCDC" as string
  )

  const [passwordInputBorderColor, setPasswordInputBorderColor] = useState(
    "#DCDCDC" as string
  )

  return (
    <View style={styles.container}>
      <Text weight="bold" size={30} style={styles.title}>
        Регистрация
      </Text>
      <Formik
        initialValues={{
          phoneNum: null as number | null,
          password: null as number | null,
        }}
        onSubmit={(values: any) => {}}
      >
        {(FormikProps) => (
          <>
            <TextInput
              placeholder="Имя пользователя"
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
            <Text size={12} style={styles.pass_subtitle}>
              Обязательно использование цифр и букв, минимальное количество
              символов - 6
            </Text>

            <View style={styles.checkbox_wrap}>
              <Text size={14}>Получать каждый раз новый пароль по СМС</Text>
            </View>

            <TextInput
              placeholder="Email (не обязательно)"
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

            <Button
              text="Зарегистрироваться"
              onPress={FormikProps.handleSubmit}
              buttonStyle={{
                marginTop: 25,
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
          marginTop: 140,
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
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 29.01,
    marginHorizontal: 30,
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

  error_message: {},

  bottom_text_wrap: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 22,
  },

  subtitle: {
    marginLeft: -30,
    letterSpacing: 0.3,
  },

  pass_subtitle: {
    color: "#1A1824",
    opacity: 0.6,
    marginBottom: 29.5,
  },

  checkbox_wrap: {
    marginBottom: 30.5,
  },
})

export default RegistrationScreen
