// PLUGINS IMPORTS //
import React, { useState } from "react"
import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { Formik } from "formik"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "../../../../../Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  route: any
}

const CredentialsFieldChangeScreen: React.FC<PropsType> = (props) => {
  const [cardNumInputBorderColor, setCardNumInputBorderColor] = useState(
    "#DCDCDC" as string
  )

  const [CVVInputBorderColor, setCVVInputBorderColor] = useState(
    "#DCDCDC" as string
  )
  const [ExpDateInputBorderColor, setExpDateInputBorderColor] = useState(
    "#DCDCDC" as string
  )

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
          props.route.params.changeFunction(values)
        }}
      >
        {(FormikProps) => (
          <>
            <TextInput
              placeholder="Номер карты"
              placeholderTextColor="#696969"
              onChangeText={FormikProps.handleChange("cardNum")}
              onFocus={() => setCardNumInputBorderColor("#1A1824")}
              onBlur={() => {
                FormikProps.handleBlur("cardNum")
                setCardNumInputBorderColor("#DCDCDC")
              }}
              keyboardType="number-pad"
              textContentType="creditCardNumber"
              value={FormikProps.values.cardNum as any}
              style={{
                ...styles.input,
                borderBottomColor: cardNumInputBorderColor,
              }}
            />
            <Text style={styles.error_message}>
              {FormikProps.touched.cardNum && FormikProps.errors.cardNum}
            </Text>

            <TextInput
              placeholder="CVV/CVC"
              placeholderTextColor="#696969"
              onChangeText={FormikProps.handleChange("CVV")}
              onFocus={() => setCVVInputBorderColor("#1A1824")}
              onBlur={() => {
                FormikProps.handleBlur("CVV")
                setCVVInputBorderColor("#DCDCDC")
              }}
              keyboardType="number-pad"
              textContentType="creditCardNumber"
              value={FormikProps.values.CVV as any}
              style={{
                ...styles.input,
                borderBottomColor: CVVInputBorderColor,
              }}
            />
            <Text style={styles.error_message}>
              {FormikProps.touched.CVV && FormikProps.errors.CVV}
            </Text>

            <TextInput
              placeholder="EXP DATE"
              placeholderTextColor="#696969"
              onChangeText={FormikProps.handleChange("ExpDate")}
              onFocus={() => setExpDateInputBorderColor("#1A1824")}
              onBlur={() => {
                FormikProps.handleBlur("ExpDate")
                setExpDateInputBorderColor("#DCDCDC")
              }}
              keyboardType="number-pad"
              textContentType="creditCardNumber"
              value={FormikProps.values.ExpDate as any}
              style={{
                ...styles.input,
                borderBottomColor: ExpDateInputBorderColor,
              }}
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
    borderBottomWidth: 1,
    height: 45,
    width: 315,
    fontSize: 16,
  },

  error_message: {},
})

export default CredentialsFieldChangeScreen
