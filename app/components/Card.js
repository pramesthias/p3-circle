import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";

export default function Card({ post, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("PostDetail", {
          id: post.id,
          post,
        });
      }}
    >
      <View style={styles.container}>
        <View style={styles.user}>
          <Image
            source={{
              uri: `${post.profile}`,
            }}
            style={styles.profilePic}
          />
          <Text style={styles.username}>{post.user.username}</Text>
        </View>
        <Image
          source={{
            uri: `${post.imgUrl}`,
          }}
          style={styles.postImage}
        />
        <View style={styles.content}>
          <Text>{post.content}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              marginTop: 10,
            }}
          >
            <View style={{ marginLeft: 20 }}>
              <Ionicons name="heart-circle" size={35} color="black" />
            </View>

            <View style={{ marginRight: 20 }}>
              <MaterialIcons name="comment" size={34} color="black" />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "azure",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
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
});
