// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import { Formik } from "formik"
import * as yup from "yup"
import Text from "~/Components/Shared/Components/Text/Text"
import Button from "~/Components/Shared/Components/Button/Button"
import { TextInput, Snackbar } from "react-native-paper"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const BackCallScreen: React.FC<PropsType> = (props) => {
  const [snackbarVisible, setSnackbarVisible] = useState(false as boolean)

  const onToggleSnackBar = () => setSnackbarVisible(!snackbarVisible)
  const onDismissSnackBar = () => setSnackbarVisible(false)

  const ValidationSchema = yup.object({
    phoneNum: yup
      .number()
      .required("Телефон обязателен")
      .typeError("Телефон обязателен"),
  })

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text weight="bold" size={30} style={styles.title}>
          Заказать обратный звонок
        </Text>
        <Formik
          validationSchema={ValidationSchema}
          initialValues={{
            phoneNum: null as number | null,
            comment: null as string | null,
          }}
          onSubmit={(values: any) => {
            onToggleSnackBar()
            setTimeout(() => {
              props.navigation.goBack()
            }, 1000)
          }}
        >
          {(FormikProps) => (
            <View style={styles.inputs_wrap}>
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

              <Text style={styles.error_message}>
                {FormikProps.touched.phoneNum && FormikProps.errors.phoneNum}
              </Text>

              <TextInput
                multiline
                placeholder="Ваш комментарий"
                placeholderTextColor="rgba(26, 24, 36, 0.5)"
                theme={{ colors: { primary: "#1A1824" } }}
                onChangeText={FormikProps.handleChange("comment")}
                onBlur={() => {
                  FormikProps.handleBlur("comment")
                }}
                value={FormikProps.values.comment as any}
                style={styles.input}
              />

              <Button
                text="Отправить"
                onPress={FormikProps.handleSubmit}
                buttonStyle={{
                  marginTop: 20,
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
          )}
        </Formik>
      </ScrollView>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={onDismissSnackBar}
        style={styles.snackbar}
      >
        <Text color="white"> Звонок успешно заказан</Text>
      </Snackbar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 20,
    flex: 1,
  },

  title: {
    width: 299,
  },

  inputs_wrap: {
    marginTop: 23,
  },

  input: {
    height: 45,
    width: 315,
    fontSize: 16,
    marginBottom: 0,
    backgroundColor: "white",
  },

  error_message: {
    color: "red",
    marginTop: 3,
  },

  snackbar: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "#1A1824",
  },

  divider: {
    borderTopColor: "#1A1824",
    borderWidth: 0.5,
    opacity: 0.2,
    marginVertical: 20,
  },
})

export default BackCallScreen
