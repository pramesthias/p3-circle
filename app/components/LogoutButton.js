import { Text, TouchableOpacity, View } from "react-native";
import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";

export default function LogoutButton() {
  const { logoutAction } = useContext(LoginContext);

  return (
    <View style={{ marginRight: 10 }}>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "seagreen",
          paddingVertical: 6,
          paddingHorizontal: 10,
          borderRadius: 10,
        }}
        onPress={() => logoutAction("token")}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}
