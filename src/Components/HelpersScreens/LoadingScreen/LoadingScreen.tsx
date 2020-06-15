// PLUGINS IMPORTS //
import React from "react"
import { View, ActivityIndicator, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const LoadingScreen: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color="#96A637" />
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default LoadingScreen
