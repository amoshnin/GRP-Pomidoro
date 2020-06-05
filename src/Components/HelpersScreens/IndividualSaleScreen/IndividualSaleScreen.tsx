// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
  route: any
}

const IndividualSaleScreen: React.FC<PropsType> = (props) => {
  return <Text>{props.route.params.saleTitle}ds</Text>
}

//   STYLES   //
const styles = StyleSheet.create({})

export default IndividualSaleScreen
