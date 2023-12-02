import { Image, View } from "react-native";

export default function LogoForm({ size }) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: size,
      }}
    >
      <Image
        source={require("../img/logo.png")}
        style={{ width: 230, height: 230 }}
      />
    </View>
  );
}
