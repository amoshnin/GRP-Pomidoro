// PLUGINS IMPORTS //
import React from "react"
import { ActivityIndicator, StyleSheet } from "react-native"
import Dialog, { DialogContent } from "react-native-popup-dialog"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  popupVisible: boolean
  text: string
}

const LoadingPopup: React.FC<PropsType> = (props) => {
  return (
    <Dialog
      width={320}
      dialogStyle={styles.wrapper}
      visible={props.popupVisible}
      onTouchOutside={() => {}}
    >
      <DialogContent style={styles.container}>
        <ActivityIndicator size={"large"} color="#96A637" />
        <Text style={styles.text}>{props.text}</Text>
      </DialogContent>
    </Dialog>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 230,
    borderRadius: 15,
  },

  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  text: {
    fontSize: 17,
    marginTop: 30,
    fontWeight: "bold",
    letterSpacing: 0.4,
  },
})

export default LoadingPopup
