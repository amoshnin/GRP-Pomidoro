// PLUGINS IMPORTS //
import React from "react"
import { View, Image, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  street: string
  distance?: string
  initialRoute?: boolean
}

const RouteItem: React.FC<PropsType> = (props) => {
  return (
    <>
      <View style={styles.item_container}>
        {!props.initialRoute ? (
          <Image
            source={require("../../../../../../Images/location-mark-blue.png")}
          />
        ) : (
          <Image
            source={require("../../../../../../Images/location-mark-green.png")}
          />
        )}
        <View style={styles.item_text_wrap}>
          <Text weight="bold" size={16}>
            {props.street}
          </Text>
          {props.distance && <Text color="#96A637">{props.distance}</Text>}
        </View>
      </View>
    </>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  item_container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12.97,
    marginTop: 10.03,
  },

  item_text_wrap: {
    marginLeft: 11.53,
  },
})

export default RouteItem
