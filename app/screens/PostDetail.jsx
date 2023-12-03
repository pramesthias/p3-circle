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
import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

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

const POST = gql`
  query Query($postByIdId: ID) {
    postById(id: $postByIdId) {
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
      user {
        _id
        name
        username
      }
    }
  }
`;

export default function PostDetail({ navigation, route }) {
  const { height, width } = useWindowDimensions();
  const { id } = route.params;
  const [liked, setLiked] = useState(false);
  const [like, { data, loading, error }] = useMutation(LIKE);
  const [post, setPost] = useState({});
  const [comment, setComment] = useState([]);
  const [commentUser, setCommentUser] = useState([]);
  const focus = useIsFocused();

  const handleLike = async (iD) => {
    try {
      await like({
        variables: { postId: iD },
      });
      console.log(iD);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(d, l, e);

  const {
    data: d,
    loading: l,
    error: e,
    refetch,
  } = useQuery(POST, {
    variables: {
      postByIdId: id,
    },
  });

  useEffect(() => {
    if (d) {
      setPost(d?.postById);
      setComment(d?.postById.comments);
      setCommentUser(d?.postById.commentUsers);

      console.log(d?.postById.comments);
      console.log(d?.postById.commentUsers);
    }
  }, [d]);

  useEffect(() => {
    if (focus) {
      refetch();
    }
  }, [focus, refetch]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "honeydew" }}>
      <View style={styles.container}>
        <View style={styles.user}>
          <Image
            source={{
              uri: `https://www.gravatar.com/avatar/${post?.authorId}?s=200&r=pg&d=robohash`,
            }}
            style={styles.profilePic}
          />
          <Text style={styles.username}>{post?.user?.username}</Text>
        </View>
        <Image
          source={{
            uri: `${post?.imgUrl}`,
          }}
          style={styles.postImage}
        />
        <View style={styles.content}>
          <Text style={{ color: "darkgreen" }}>{post?.content}</Text>
          <View style={{ flexDirection: "row" }}>
            {post?.tags?.map((t, idx) => (
              <Text style={{ color: "darkgreen" }} key={idx}>
                #{t}
              </Text>
            ))}
          </View>

          {/* LIKE COMMENT */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity onPress={() => handleLike(id)}>
              <View style={{ alignItems: "center" }}>
                <Ionicons name="heart-circle" size={35} color="seagreen" />
                <Text style={{ color: "darkgreen" }}>
                  {post?.likes?.length}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Comment", {
                  postId: id,
                });
              }}
            >
              <View style={{ alignItems: "center" }}>
                <MaterialIcons name="comment" size={35} color="seagreen" />
                <Text style={{ color: "darkgreen" }}>
                  {post?.comments?.length}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* COMMENTS ITERATE */}

      {comment.map((c, idx) => (
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 30,
            marginTop: 15,
            marginBottom: 5,
          }}
          key={idx}
        >
          <Image
            source={{
              uri: `https://www.gravatar.com/avatar/${post?.user?._id}?s=200&r=pg&d=robohash`,
            }}
            style={styles.profilePic}
          />
          <View style={styles.text}>
            <Text
              style={{ fontWeight: "bold", fontSize: 18, color: "darkgreen" }}
            >
              {commentUser?.find(({ _id }) => _id === c.authorId)?.username}
            </Text>
            <Text style={{ color: "darkgreen" }}>{c.content}</Text>
          </View>
        </View>
      ))}
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
    borderRadius: 30,
    marginRight: 10,
    borderWidth: 3,
    borderColor: "mediumseagreen",
  },
  postImage: {
    width: "100%",
    height: 225,
    marginBottom: 10,
  },
  content: {
    marginBottom: 8,
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
