// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { TextInput } from "react-native-paper"
import Text from "~/Components/Shared/Components/Text/Text"

import { Formik } from "formik"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "../../../../Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const LoginScreen: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text weight="bold" size={30} style={styles.title}>
        Вход в систему
      </Text>
      <Formik
        initialValues={{
          phoneNum: null as number | null,
          password: null as string | null,
        }}
        onSubmit={(values: any) => {
          props.navigation.navigate("RegionSelectionScreen")
        }}
      >
        {(FormikProps) => (
          <>
            <TextInput
              placeholder="Номер телефона"
              placeholderTextColor="rgba(26, 24, 36, 0.5)"
              theme={{ colors: { primary: "#1A1824" } }}
              onChangeText={FormikProps.handleChange("phoneNum")}
              onBlur={() => {
                FormikProps.handleBlur("phoneNum")
              }}
              keyboardType="number-pad"
              textContentType="creditCardNumber"
              value={FormikProps.values.phoneNum as any}
              style={styles.input}
            />

            <TextInput
              placeholder="Введите пароль"
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
              text="Войти"
              onPress={FormikProps.handleSubmit}
              buttonStyle={{
                alignSelf: null,
                marginTop: 5,
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
      <TouchableOpacity
        style={styles.bottom_text_wrap}
        onPress={() => props.navigation.navigate("RecieveNewPassScreen1")}
      >
        <Text style={styles.subtitle}>Получите новый пароль</Text>
      </TouchableOpacity>
      <Button
        text="Регистрация"
        onPress={() => props.navigation.navigate("RegistrationScreen")}
        buttonStyle={{
          marginTop: 235,
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

  bottom_text_wrap: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 22,
  },

  subtitle: {
    marginLeft: -30,
    letterSpacing: 0.3,
  },
})

export default LoginScreen
