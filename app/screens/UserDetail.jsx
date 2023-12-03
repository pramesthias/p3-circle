import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const USER = gql`
  query Query {
    userById {
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

export default function UserDetail() {
  const { data, loading, error } = useQuery(USER);

  const [user, setUser] = useState({});

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  console.log(data, loading, error);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: "https://wallpapers.com/images/high/blue-green-aesthetic-8wspuig34zq5c323.webp",
        }}
        style={{ flex: 1 }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{
              uri: `https://www.gravatar.com/avatar/${data?.userById._id}?s=200&r=pg&d=robohash`,
            }}
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              marginTop: 70,
              borderWidth: 4,
              borderColor: "whitesmoke",
            }}
          />
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
              color: "darkgreen",
            }}
          >
            {data?.userById.name}
          </Text>
          <Text style={{ fontSize: 25, color: "darkgreen" }}>
            {data?.userById.username}
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <TouchableOpacity style={styles.follow}>
            <Text style={{ color: "darkslategrey" }}>FOLLOWER</Text>
            <Text style={styles.count}>
              {data?.userById?.following?.length
                ? data?.userById?.following?.length
                : 0}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.follow}>
            <Text style={{ color: "darkslategrey" }}>FOLLOWING</Text>
            <Text style={styles.count}>
              {data?.userById?.followers?.length
                ? data?.userById?.followers?.length
                : 0}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  follow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    fontSize: 25,
    fontWeight: "bold",
    color: "darkslategrey",
  },
});
