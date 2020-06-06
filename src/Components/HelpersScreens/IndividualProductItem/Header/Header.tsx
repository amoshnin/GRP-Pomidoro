// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { SafeAreaView } from "react-native-safe-area-context"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  productTitle: string | null
  image: string | null
  productPrice24: string | null
  productPrice32: string | null
  productPrice40: string | null
  productType: Array<string>
  ingridientsList: Array<string>
}

const Header: React.FC<PropsType> = (props) => {
  return (
    <SafeAreaView>
      <Text>{props.productTitle}</Text>
    </SafeAreaView>
  )
}

export default Header
