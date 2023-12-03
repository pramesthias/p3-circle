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

const COMMENT = gql`
  mutation Mutation($content: String!, $postId: String) {
    addComment(content: $content, postId: $postId) {
      commentUsers {
        _id
        name
        username
      }
      comments {
        content
        authorId
        createdAt
        updatedAt
      }
    }
  }
`;

export default function Comment({ navigation, route }) {
  const { height, width } = useWindowDimensions();
  const { postId } = route.params;
  const [input, setInput] = useState("");
  const [comment, { data, loading, error }] = useMutation(COMMENT);

  const handleChange = (name, text) => {
    console.log(text);
    setInput({ ...input, [name]: text });
  };

  const handleComment = async () => {
    try {
      if (loading) return;
      console.log(input);
      const { data } = await comment({
        variables: {
          content: input.content,
          postId: postId,
        },
      });
      console.log(data);
      setInput("");
      Alert.alert("Posted", "Your Comment added Successfully", [
        {
          text: "OK",
          style: "default",
        },
      ]);
      navigation.navigate("PostDetail", { id: postId });
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
        <LogoForm size={65} />

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
            placeholder="What's do you think about the post?"
            onChangeText={(text) => handleChange("content", text)}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "lightseagreen",
            paddingVertical: 14,
            marginTop: 30,
            marginHorizontal: 30,
            borderRadius: 50,
            elevation: 20,
          }}
          onPress={handleComment}
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
              COMMENT
            </Text>
          )}
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
