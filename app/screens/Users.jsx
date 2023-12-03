import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";

const USERS = gql`
  query Query($username: String) {
    searchUser(username: $username) {
      _id
      email
      followers {
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
      following {
        _id
        followingId
        followerId
        createdAt
        updatedAt
      }
      name
      password
      username
      followingName {
        _id
        name
        username
      }
    }
  }
`;

const FOLLOW = gql`
  mutation Mutation($followingId: ID) {
    follow(followingId: $followingId) {
      _id
      createdAt
      followerId
      followingId
      updatedAt
    }
  }
`;

export default function Users({ navigation }) {
  const { height, width } = useWindowDimensions();

  const [search, setSearch] = useState("");
  const [users, setUsers] = useState("");

  const { data, loading, error } = useQuery(USERS, {
    variables: { username: search },
  });

  // follow
  const [follow, { data: dataFoll, loading: loadFoll, error: errFoll }] =
    useMutation(FOLLOW);

  const handleSearch = () => {
    if (data) {
      setUsers(data.searchUser);
    }
  };

  const handleFollow = async (id) => {
    try {
      await follow({
        variables: { followingId: id },
      });
      // navigation.navigate("UserDetail");
      Alert.alert("Followed", "You are now following this user", [
        {
          text: "OK",
          style: "default",
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: "https://wallpapers.com/images/high/blue-green-aesthetic-8wspuig34zq5c323.webp",
        }}
        style={{ flex: 1, height: height }}
      >
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 15 }}
        >
          <TextInput
            value={search}
            style={styles.search}
            placeholder="Search"
            onChangeText={(text) => setSearch(text)}
          />

          <TouchableOpacity style={styles.icon} onPress={handleSearch}>
            <MaterialIcons name="person-search" size={25} color="seagreen" />
          </TouchableOpacity>
        </View>

        {/* USER ITERATE */}
        {data?.searchUser.map((u, idx) => (
          <View
            key={idx}
            style={{
              flexDirection: "row",
              marginHorizontal: 30,
              marginTop: 15,
            }}
          >
            <Image
              source={{
                uri: `https://www.gravatar.com/avatar/${u._id}?s=200&r=pg&d=robohash`,
              }}
              style={styles.profilePic}
            />
            <Text style={styles.text}>{u.username}</Text>

            <TouchableOpacity
              onPress={() => handleFollow(u.id)}
              style={styles.icon}
            >
              <Ionicons name="person-add" size={22} color="seagreen" />
            </TouchableOpacity>
          </View>
        ))}
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: "lightcyan",
    flex: 1,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    paddingVertical: 15,
    elevation: 2,
    paddingLeft: 20,
  },
  text: {
    backgroundColor: "lightcyan",
    flex: 1,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    paddingVertical: 15,
    elevation: 2,
    fontWeight: "bold",
    paddingLeft: 30,
    color: "darkgreen",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightcyan",
    width: 50,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
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
    borderColor: "darkgreen",
  },
});
