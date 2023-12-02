import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import Card from "../components/Card";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const LIKE = gql`
  mutation AddLike($postId: String) {
    addLike(postId: $postId) {
      likes {
        authorId
        createdAt
        updatedAt
      }
    }
  }
`;

export default function PostDetail({ navigation, route }) {
  const { height, width } = useWindowDimensions();
  const { id, post } = route.params;
  const [liked, setLiked] = useState(false);
  const [postData, setPostData] = useState(post);
  const [like, { data, loading, error, refetch }] = useMutation(LIKE);

  const handleLike = async (iD) => {
    try {
      await like({
        variables: { postId: iD },
      });
      const updatedPost = {
        ...postData,
        likes: [...postData.likes, { authorId: "author_id" }],
      };
      setPostData(updatedPost);
      setLiked(true);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "honeydew" }}>
      <View style={styles.container}>
        <View style={styles.user}>
          <Image
            source={{
              uri: `https://www.gravatar.com/avatar/${postData.authorId}?s=200&r=pg&d=robohash`,
            }}
            style={styles.profilePic}
          />
          <Text style={styles.username}>{postData.user.username}</Text>
        </View>
        <Image
          source={{
            uri: `${postData.imgUrl}`,
          }}
          style={styles.postImage}
        />
        <View style={styles.content}>
          <Text>{postData.content}</Text>

          {/* LIKE COMMENT */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity onPress={() => handleLike(postData.id)}>
              <View style={{ alignItems: "center" }}>
                <Ionicons name="heart-circle" size={35} color="black" />
                <Text>{postData.likes.length}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Comment", {
                  postId: postData.id,
                });
              }}
            >
              <View style={{ alignItems: "center" }}>
                <MaterialIcons name="comment" size={35} color="black" />
                <Text>{postData.comments.length}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* COMMENTS ITERATE */}

      {/* {post?.comment.map((c) => ( */}
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 30,
          marginTop: 15,
          marginBottom: 5,
        }}
      >
        <Image
          source={{
            uri: `https://www.gravatar.com/avatar/${postData.user._id}?s=200&r=pg&d=robohash`,
          }}
          style={styles.profilePic}
        />
        <Text style={styles.text}>SUZY</Text>
      </View>
      {/* ))} */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: "lightcyan",
    flex: 1,
    borderRadius: 15,
    paddingVertical: 15,
    elevation: 2,
    fontWeight: "bold",
    paddingLeft: 30,
  },
  username: {
    fontWeight: "bold",
    fontSize: 17,
    color: "darkgreen",
  },
  profilePic: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginRight: 10,
  },
  postImage: {
    width: "100%",
    height: 225,
    marginBottom: 10,
  },
  content: {
    marginBottom: 5,
  },
  container: {
    margin: 20,
    borderWidth: 1,
    borderColor: "lightcyan",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "azure",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});
