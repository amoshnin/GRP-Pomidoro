// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, Image, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import Constants from "expo-constants"
import * as ImagePicker from "expo-image-picker"
import * as Permissions from "expo-permissions"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  UserCredentials: {
    name: string | null
    surname: string | null
    email: string | null
    phoneNum: string | null
    region: string | null
    password: string | null
    avatar: string | null
    userType: string | null
    bonusesCount: string | null
  }

  LogoutUserThunkCreator: () => void
  UpdateAvatarThunkCreator: (avatar: Blob) => void
}

const Header: React.FC<PropsType> = (props) => {
  const PickImage = async () => {
    if (Constants.platform?.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!")
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    if (!result.cancelled) {
      const response = await fetch(result.uri)
      const blob = await response.blob()

      props.UpdateAvatarThunkCreator(blob)
    }
  }

  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <View style={styles.avatar_wrap}>
        {props.UserCredentials.avatar ? (
          <Image
            style={styles.avatar_img}
            source={{ uri: props.UserCredentials.avatar }}
          />
        ) : (
          <Text style={styles.avatar_text}>ID</Text>
        )}
        <TouchableOpacity style={styles.avatar_icon_wrap} onPress={PickImage}>
          <Feather name="camera" size={18} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.text_wrap}>
        <View>
          <Text weight="bold" size={30}>
            {props.UserCredentials.name}
          </Text>
          <Text size={16}>{props.UserCredentials.userType}</Text>
        </View>
        <TouchableOpacity
          style={styles.logout_btn}
          onPress={() => props.LogoutUserThunkCreator()}
        >
          <Feather name="log-in" size={24} color="#96A637" />
          <Text size={16} color="#96A637" style={styles.logout_text}>
            {t("PrivateCabinetScreen.Header.Выйти")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginBottom: 28,
  },

  avatar_img: {
    height: 110,
    width: 110,
    borderRadius: 20,
  },

  avatar_wrap: {
    height: 110,
    width: 110,
    backgroundColor: "#96A637",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 34,
    marginBottom: 20,
  },

  avatar_text: {
    fontSize: 30,
    letterSpacing: 0.3,
    color: "white",
    opacity: 0.5,
  },

  avatar_icon_wrap: {
    position: "absolute",
    right: -19,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    height: 40,
    width: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  text_wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  logout_btn: {
    flexDirection: "row",
    alignItems: "center",
  },

  logout_text: {
    fontWeight: "bold",
    marginLeft: 10,
  },
})

export default Header
