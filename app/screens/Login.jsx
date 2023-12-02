import { useContext } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LoginContext } from "../context/LoginContext";

export default function Login({ navigation }) {
  const { loginAction } = useContext(LoginContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "whitesmoke" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 65, //here top margin
          }}
        >
          <Image
            source={require("../img/logo.png")}
            style={{ width: 280, height: 280 }}
          />
          {/* <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 20 }}>
   Login
 </Text> */}
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 20 }}
        >
          <View style={styles.icon}>
            <Ionicons name="mail" size={25} color="black" />
          </View>

          <TextInput
            // value={email}
            style={styles.textInput}
            placeholder="Your Email Here"
            // onChangeText={(text) => setFormData(text)}
          />
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 20 }}
        >
          <View style={styles.icon}>
            <Ionicons name="lock-closed" size={25} color="black" />
          </View>

          <TextInput
            // value={email}
            style={styles.textInput}
            placeholder="Your Password Here"
            // onChangeText={(text) => setFormData(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.logButton}
          onPress={async () => {
            // navigation.replace("Home"); // HERE
            await loginAction("token", "www");
          }}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
        <View
          style={{ alignItems: "center", marginTop: 20, paddingBottom: 30 }}
        >
          <Text style={{ marginBottom: 10 }}>Do not have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "lightgreen",
    flex: 1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 15,
    elevation: 2,
    paddingLeft: 10,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
    width: 50,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    elevation: 2,
  },
  logButton: {
    backgroundColor: "darkgreen",
    paddingVertical: 14,
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 50,
    elevation: 2,
  },
});
