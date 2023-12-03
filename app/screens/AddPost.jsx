import {
  ActivityIndicator,
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native"; // => ADD FORM POST
import { FontAwesome5 } from "@expo/vector-icons"; // => ADD FORM POST
import { MaterialIcons } from "@expo/vector-icons"; // => ADD FORM POST
import Ionicons from "react-native-vector-icons/Ionicons";
import { View } from "react-native";
import LogoForm from "../components/LogoForm";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const ADD_POST = gql`
  mutation AddPost($post: newPost) {
    addPost(post: $post) {
      _id
      content
      tags
      imgUrl
      authorId
      comments {
        content
        authorId
        createdAt
        updatedAt
      }
      likes {
        authorId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      commentUsers {
        _id
        name
        username
      }
      likeUsers {
        _id
        name
        username
      }
    }
  }
`;

export default function AddPost({ navigation }) {
  const { height, width } = useWindowDimensions(); // => ADD FORM POST
  const [input, setInput] = useState({
    content: "",
    imgUrl: "",
    tags: "",
  });
  const [addPost, { data, loading, error }] = useMutation(ADD_POST);

  const handleChange = (name, text) => {
    console.log(text);
    setInput({ ...input, [name]: text });
  };

  const handleAddPost = async () => {
    try {
      if (loading) return;
      console.log(input);
      const { data } = await addPost({
        variables: {
          post: {
            content: input.content,
            imgUrl: input.imgUrl,
            tags: input.tags.split(" "),
          },
        },
      });
      console.log(data);
      setInput("");
      Alert.alert("Posted", "Your Post added Successfully", [
        {
          text: "OK",
          style: "default",
        },
      ]);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data, error, loading);

  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: "https://wallpapers.com/images/high/blue-green-aesthetic-8wspuig34zq5c323.webp",
        }}
        style={{ flex: 1, height: height }}
      >
        <LogoForm size={40} />
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 10 }}
        >
          <View style={styles.icon}>
            <Ionicons name="image" size={25} color="black" />
          </View>

          <TextInput
            value={input.imgUrl}
            style={styles.text}
            placeholder="Image URL"
            onChangeText={(text) => handleChange("imgUrl", text)}
          />
        </View>

        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 20 }}
        >
          <View style={styles.icon}>
            <FontAwesome5 name="hashtag" size={25} color="black" />
          </View>

          <TextInput
            value={input.tags}
            multiline
            style={styles.text}
            placeholder="Hastags"
            onChangeText={(text) => handleChange("tags", text)}
          />
        </View>

        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 20 }}
        >
          <View style={styles.icon}>
            <MaterialIcons name="post-add" size={25} color="black" />
          </View>

          <TextInput
            value={input.content}
            multiline
            numberOfLines={5}
            style={styles.textMulti}
            placeholder="What's on your thougts?"
            onChangeText={(text) => handleChange("content", text)}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "lightseagreen", //mediumaquamarine
            paddingVertical: 14,
            marginTop: 30,
            marginHorizontal: 30,
            borderRadius: 50,
            elevation: 20,
          }}
          onPress={handleAddPost}
        >
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
              POST
            </Text>
          )}
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: "lightcyan",
    flex: 1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 15,
    elevation: 20,
    paddingLeft: 10,
  },
  textMulti: {
    backgroundColor: "lightcyan",
    flex: 1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 15,
    elevation: 20,
    paddingLeft: 10,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightcyan",
    width: 50,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    elevation: 20,
  },
});
