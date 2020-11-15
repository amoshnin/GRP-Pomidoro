// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import UpperSection from "./UpperSection/UpperSection"
import BottomSection from "./BottomSection/BottomSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const ContactsScreen: React.FC<PropsType> = (props) => {
  return (
    <ScrollView style={styles.wrapper}>
      <UpperSection />
      <BottomSection />
    </ScrollView>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 10,
  },
})

export default ContactsScreen
