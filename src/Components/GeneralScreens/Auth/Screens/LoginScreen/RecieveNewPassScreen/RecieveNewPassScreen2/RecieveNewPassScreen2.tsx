// PLUGINS IMPORTS //
import React from "react"
import { View, ScrollView, TouchableOpacity, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { TextInput } from "react-native-paper"
import { Formik } from "formik"
import * as yup from "yup"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "../../../../../../Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const RecieveNewPassScreen: React.FC<PropsType> = (props) => {
  const ValidationSchema = yup.object({
    code: yup
      .string()
      .required("Телефон обязателен")
      .typeError("Телефон обязателен"),
  })

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text weight="bold" size={30} style={styles.title}>
        Получить новый пароль
      </Text>
      <Text style={styles.subtitle}>Введите код полученый в СМС</Text>
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
              placeholder="Код востоновления из СМС"
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
              text="Войти"
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
            Отправить СМС еще раз
          </Text>
        </TouchableOpacity>
        <Text style={styles.timer_text}>будет доступно через 3:45</Text>
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
