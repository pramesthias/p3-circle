import { useContext, useState } from "react";
import {
  ActivityIndicator,
  Alert,
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
import LogoForm from "../components/LogoForm";
import { hasAnyDirectives } from "@apollo/client/utilities";
import { gql, useMutation } from "@apollo/client";

const LOGIN = gql`
  mutation Mutation($username: String!, $password: String!) {
    userLogin(username: $username, password: $password) {
      accessToken
    }
  }
`;

export default function Login({ navigation }) {
  const { loginAction } = useContext(LoginContext);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [login, { data, loading, error }] = useMutation(LOGIN);

  const handleChange = (name, text) => {
    console.log(text);
    setInput({ ...input, [name]: text });
  };

  const handleLogin = async () => {
    try {
      if (loading) return;
      console.log(input);
      const { data } = await login({
        variables: { username: input.username, password: input.password },
      });
      console.log(data);
      await loginAction("token", data.userLogin.accessToken);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", `${error.message}`, [
        {
          text: "OK",
          style: "default",
        },
      ]);
    }
  };

  console.log(data, error, loading);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "whitesmoke" }}>
        <LogoForm size={65} />
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 20 }}
        >
          <View style={styles.icon}>
            <Ionicons name="at-circle" size={25} color="black" />
          </View>

          <TextInput
            value={input.username}
            style={styles.textInput}
            placeholder="Your Username Here"
            onChangeText={(text) => handleChange("username", text)}
          />
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 20 }}
        >
          <View style={styles.icon}>
            <Ionicons name="lock-closed" size={25} color="black" />
          </View>

          <TextInput
            value={input.password}
            style={styles.textInput}
            placeholder="Your Password Here"
            onChangeText={(text) => handleChange("password", text)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.logButton} onPress={handleLogin}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              LOGIN
            </Text>
          )}
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
