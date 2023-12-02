import { Image } from "react-native";

export default function Logo() {
  return (
    <Image
      source={require("../img/logo.png")}
      style={{ width: 70, height: 70 }}
    />
  );
}
