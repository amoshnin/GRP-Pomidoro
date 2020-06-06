// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //
import UpperSection from "./UpperSection/UpperSection"
import BottomSection from "./BottomSection/BottomSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const ContactsScreen: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      <UpperSection />
      <BottomSection />
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 10,
    justifyContent: "space-between",
  },
})

export default ContactsScreen
