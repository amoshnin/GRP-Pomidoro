// PLUGINS IMPORTS //
import React, { useState, useEffect } from "react"
import { ScrollView, StyleSheet } from "react-native"
import { TextInput } from "react-native-paper"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Text from "~/Components/Shared/Components/Text/Text"
import Button from "~/Components/Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any
}

const ManualDeliveryScreen: React.FC<PropsType> = (props) => {
  const [newAdress, setNewAdress] = useState(null as string | null)

  useEffect(() => {
    props.navigation.addListener("blur", () => {
      setNewAdress(null)
    })
  }, [props.navigation])

  const saveAdress = () => {
    props.route.params.saveFunction(newAdress)
    props.navigation.goBack()
  }

  return (
    <ScrollView style={styles.container}>
      <Text size={30} weight="bold" style={styles.title}>
        Ввести адрес вручную
      </Text>
      <TextInput
        multiline
        placeholder="Поле ввода"
        style={styles.input}
        theme={{ colors: { primary: "#1A1824" } }}
        onChangeText={(text: string) => setNewAdress(text)}
        value={newAdress as string}
      />
      <Button
        onPress={saveAdress}
        text="Сохранить"
        buttonStyle={{
          marginTop: 20,
          width: 315,
          height: 50,
          backgroundColor: "#96A637",
          borderRadius: 6,
          alignSelf: null,
        }}
        textStyle={{
          color: "white",
          fontSize: 16,
        }}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },

  title: {
    letterSpacing: 0.3,
  },

  input: {
    backgroundColor: "white",
    marginTop: 30,
    height: 40,
  },
})

export default ManualDeliveryScreen
