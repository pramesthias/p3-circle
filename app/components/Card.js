import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Card() {
  return (
    <TouchableOpacity
    // onPress={handlePostClick}
    >
      <View style={styles.container}>
        <View style={styles.user}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4GBnSDjUWXBI08tL0Xj_BuFqu3iZEXW3wnAV4_GfX9-klTFV9IczV-RmW3UrK0Pvp0I&usqp=CAU",
            }}
            style={styles.profilePic}
          />
          <Text style={styles.username}>SUZY</Text>
        </View>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4GBnSDjUWXBI08tL0Xj_BuFqu3iZEXW3wnAV4_GfX9-klTFV9IczV-RmW3UrK0Pvp0I&usqp=CAU",
          }}
          style={styles.postImage}
        />
        <View style={styles.content}>
          <Text>abcdddddddddddddddddddddsjgfDWJLRIFWJOI</Text>
          <TouchableOpacity
            // onPress={handleLike}
            style={{ alignItems: "center" }}
          >
            <Ionicons name="heart-circle" size={35} color="black" />
            <Text>COUNT 11</Text>
          </TouchableOpacity>
          {/* <Text>Likes:</Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
