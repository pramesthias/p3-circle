import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Card from "../components/Card";
import { SafeAreaView } from "react-native-safe-area-context";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

// const Stack = createNativeStackNavigator();
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// const Tab = createBottomTabNavigator();
// import { useNavigation } from "@react-navigation/native";

const POSTS = gql`
  query Query {
    posts {
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

export default function HomeScreen({ navigation }) {
  const { data, loading, error, refetch } = useQuery(POSTS);
  // console.log(data, loading, error);
  const [posts, setPosts] = useState([]);
  const focus = useIsFocused();

  useEffect(() => {
    if (data) {
      let newPosts = data.posts.map((el) => {
        let obj = {
          id: el._id,
          createdAt: el.createdAt,
          content: el.content,
          tags: el.tags,
          profile: `https://www.gravatar.com/avatar/${el._id}?s=200&r=pg&d=robohash`,
          imgUrl: el.imgUrl,
          authorId: el.authorId,
          comments: el.comments,
          likes: el.likes,
          user: el.user,
        };
        return obj;
      });
      setPosts(newPosts);
    }
  }, [data]);

  useEffect(() => {
    if (focus) {
      refetch();
    }
  }, [focus, refetch]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "honeydew" }}>
      {posts.map((post) => (
        <Card key={post.id} post={post} navigation={navigation} />
      ))}
    </ScrollView>
  );
}
