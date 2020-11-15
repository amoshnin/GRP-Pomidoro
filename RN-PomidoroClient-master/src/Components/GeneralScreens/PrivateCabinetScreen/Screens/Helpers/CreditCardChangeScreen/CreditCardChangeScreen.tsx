// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import { TextInput } from "react-native-paper"
import Text from "~/Components/Shared/Components/Text/Text"
import { Formik } from "formik"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "../../../../../Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  route: any

  ConnectCreditCardThunkCreator: (
    cardNum: string,
    CVV: string,
    ExpDate: string
  ) => void
}

const CredentialsFieldChangeScreen: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text weight="bold" size={22} style={styles.title}>
        Привязать карту
      </Text>
      <Formik
        initialValues={{
          cardNum: null as number | null,
          CVV: null as number | null,
          ExpDate: null as number | null,
        }}
        onSubmit={(values: any) => {
          props.ConnectCreditCardThunkCreator(
            values.cardNum,
            values.CVV,
            values.ExpDate
          )
        }}
      >
        {(FormikProps) => (
          <>
            <TextInput
              placeholder="Номер карты"
              placeholderTextColor="rgba(26, 24, 36, 0.5)"
              theme={{ colors: { primary: "#1A1824" } }}
              onChangeText={FormikProps.handleChange("cardNum")}
              onBlur={() => {
                FormikProps.handleBlur("cardNum")
              }}
              keyboardType="number-pad"
              textContentType="creditCardNumber"
              value={FormikProps.values.cardNum as any}
              style={styles.input}
            />
            <Text style={styles.error_message}>
              {FormikProps.touched.cardNum && FormikProps.errors.cardNum}
            </Text>

            <TextInput
              placeholder="CVV/CVC"
              placeholderTextColor="rgba(26, 24, 36, 0.5)"
              theme={{ colors: { primary: "#1A1824" } }}
              onChangeText={FormikProps.handleChange("CVV")}
              onBlur={() => {
                FormikProps.handleBlur("CVV")
              }}
              keyboardType="number-pad"
              textContentType="creditCardNumber"
              value={FormikProps.values.CVV as any}
              style={styles.input}
            />
            <Text style={styles.error_message}>
              {FormikProps.touched.CVV && FormikProps.errors.CVV}
            </Text>

            <TextInput
              placeholder="EXP DATE"
              placeholderTextColor="rgba(26, 24, 36, 0.5)"
              theme={{ colors: { primary: "#1A1824" } }}
              onChangeText={FormikProps.handleChange("ExpDate")}
              onBlur={() => {
                FormikProps.handleBlur("ExpDate")
              }}
              keyboardType="number-pad"
              textContentType="creditCardNumber"
              value={FormikProps.values.ExpDate as any}
              style={styles.input}
            />
            <Text style={styles.error_message}>
              {FormikProps.touched.ExpDate && FormikProps.errors.ExpDate}
            </Text>

            <Button
              text="Сохранить"
              onPress={FormikProps.handleSubmit}
              buttonStyle={{
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
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 30.19,
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

  error_message: {},
})

export default CredentialsFieldChangeScreen
