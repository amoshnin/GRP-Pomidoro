// PLUGINS IMPORTS //
import React from "react"
import { View, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"

// COMPONENTS IMPORTS //
import RouteItem from "./RouteItem/RouteItem"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const RouteSection: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <RouteItem street="ул. Заливная 39" distance="2.3км" />
        <View style={styles.divider} />
        <RouteItem street="ул. Засумкая 98" initialRoute={true} />
        <Text>Время доставки ~ 12 мин</Text>
      </View>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 35.1,
    marginTop: 16,
  },

  divider: {
    borderTopColor: "#DCDCDC",
    borderTopWidth: 1,
  },
})

export default RouteSection
