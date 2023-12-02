import { NavigationContainer } from "@react-navigation/native";
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
    }
  }
`;

export default function HomeScreen({ navigation }) {
  const { data, loading, error } = useQuery(POSTS);
  console.log(data, loading, error);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "honeydew" }}>
      <Card />
    </ScrollView>
  );
}
