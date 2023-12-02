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

export default function PostDetail() {
  const { height, width } = useWindowDimensions();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "honeydew" }}>
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

          {/* LIKE COMMENT */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity
            // onPress={handleLike}
            >
              <View style={{ alignItems: "center" }}>
                <Ionicons name="heart-circle" size={35} color="black" />
                <Text>11</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <MaterialIcons name="comment" size={35} color="black" />
                <Text>5</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* COMMENTS ITERATE */}
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
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4GBnSDjUWXBI08tL0Xj_BuFqu3iZEXW3wnAV4_GfX9-klTFV9IczV-RmW3UrK0Pvp0I&usqp=CAU",
          }}
          style={styles.profilePic}
        />
        <Text style={styles.text}>SUZY</Text>
      </View>
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
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4GBnSDjUWXBI08tL0Xj_BuFqu3iZEXW3wnAV4_GfX9-klTFV9IczV-RmW3UrK0Pvp0I&usqp=CAU",
          }}
          style={styles.profilePic}
        />
        <Text style={styles.text}>SUZY</Text>
      </View>
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
