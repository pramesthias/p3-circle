import { useState } from "react";
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
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import LogoForm from "../components/LogoForm";
import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
    $name: String
  ) {
    registerUser(
      username: $username
      email: $email
      password: $password
      name: $name
    ) {
      _id
      name
      username
      email
      password
      followers {
        _id
        followingId
        followerId
        createdAt
        updatedAt
      }
      following {
        _id
        followingId
        followerId
        createdAt
        updatedAt
      }
      followersName {
        _id
        name
        username
      }
      followingName {
        _id
        name
        username
      }
    }
  }
`;

export default function Register({ navigation }) {
  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [register, { data, loading, error }] = useMutation(REGISTER);

  const handleChange = (name, text) => {
    console.log(text);
    setInput({ ...input, [name]: text });
  };

  const handleRegister = async () => {
    try {
      if (loading) return;
      console.log(input);
      await register({
        variables: {
          name: input.name,
          username: input.username,
          email: input.email,
          password: input.password,
        },
      });
      navigation.navigate("Login");
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
    <ScrollView style={{ flex: 1, backgroundColor: "whitesmoke" }}>
      <LogoForm size={60} />
      <View
        style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 15 }}
      >
        <View style={styles.icon}>
          <MaterialIcons name="font-download" size={22} color="black" />
        </View>

        <TextInput
          value={input.name}
          style={styles.textInput}
          placeholder="Your Name Here"
          onChangeText={(text) => handleChange("name", text)}
        />
      </View>
      <View
        style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 15 }}
      >
        <View style={styles.icon}>
          <Ionicons name="at-circle" size={22} color="black" />
        </View>

        <TextInput
          value={input.username}
          style={styles.textInput}
          placeholder="Your Username Here"
          onChangeText={(text) => handleChange("username", text)}
        />
      </View>
      <View
        style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 15 }}
      >
        <View style={styles.icon}>
          <Ionicons name="mail" size={22} color="black" />
        </View>

        <TextInput
          value={input.email}
          style={styles.textInput}
          placeholder="Your Email Here"
          onChangeText={(text) => handleChange("email", text)}
        />
      </View>
      <View
        style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 15 }}
      >
        <View style={styles.icon}>
          <Ionicons name="lock-closed" size={22} color="black" />
        </View>

        <TextInput
          value={input.password}
          style={styles.textInput}
          placeholder="Your Password Here"
          onChangeText={(text) => handleChange("password", text)}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.regButton} onPress={handleRegister}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            SIGN UP
          </Text>
        )}
      </TouchableOpacity>
      <View style={{ alignItems: "center", marginTop: 20, paddingBottom: 30 }}>
        <Text style={{ marginBottom: 10 }}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  regButton: {
    backgroundColor: "darkgreen",
    paddingVertical: 14,
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 50,
    elevation: 2,
  },
});
