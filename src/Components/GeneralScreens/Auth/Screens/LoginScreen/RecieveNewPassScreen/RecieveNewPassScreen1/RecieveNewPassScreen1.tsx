// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"
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
    phoneNum: yup
      .number()
      .required(t("GeneralPhrases.Validation.ТелефонОбязателен"))
      .typeError(t("GeneralPhrases.Validation.ТелефонОбязателен")),
  })

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text weight="bold" size={30} style={styles.title}>
        {t("Auth.LoginScreen.RecieveNewPassScreen.ПолучитьНовыйПароль")}
      </Text>
      <Text style={styles.subtitle}>
        {t("Auth.LoginScreen.RecieveNewPassScreen.PPПолучитьНовыйПароль")}
      </Text>
      <Formik
        validationSchema={ValidationSchema}
        initialValues={{
          phoneNum: null as number | null,
        }}
        onSubmit={(values: any) => {
          props.navigation.navigate("RecieveNewPassScreen2")
        }}
      >
        {(FormikProps) => (
          <>
            <TextInput
              placeholder={t("Auth.LoginScreen.НомерТелефона")}
              placeholderTextColor="rgba(26, 24, 36, 0.5)"
              theme={{ colors: { primary: "#1A1824" } }}
              onChangeText={FormikProps.handleChange("phoneNum")}
              onBlur={() => {
                FormikProps.handleBlur("phoneNum")
              }}
              keyboardType="number-pad"
              value={FormikProps.values.phoneNum as any}
              style={styles.input}
            />
            {FormikProps.touched.phoneNum && FormikProps.errors.phoneNum ? (
              <Text style={styles.error_message}>
                {FormikProps.touched.phoneNum && FormikProps.errors.phoneNum}
              </Text>
            ) : null}

            <Button
              text={t("GeneralPhrases.Продолжить")}
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
})

export default RecieveNewPassScreen
