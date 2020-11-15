import AsyncStorage from "@react-native-community/async-storage"

export const baseUrl = "http://138.201.153.220/api"
export const renderHeader = async () => {
  const token = await AsyncStorage.getItem("token")
  return {
    Authorization: `Token ${token}`,
    "Content-Type": "application/json",
  }
}
