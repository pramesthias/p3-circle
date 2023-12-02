import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function UserDetail() {
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
            // source={require("../img/tes.jpg")}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4GBnSDjUWXBI08tL0Xj_BuFqu3iZEXW3wnAV4_GfX9-klTFV9IczV-RmW3UrK0Pvp0I&usqp=CAU",
            }}
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              marginTop: 70,
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
            NAMA USER
          </Text>
          <Text style={{ fontSize: 28, color: "darkgreen" }}>
            username / email
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <TouchableOpacity style={styles.follow}>
            <Text style={{ color: "darkslategrey" }}>FOLLOWER</Text>
            <Text style={styles.count}>1110</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.follow}>
            <Text style={{ color: "darkslategrey" }}>FOLLOWING</Text>
            <Text style={styles.count}>1110</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={{ flex: 1, marginTop: 40, marginBottom: 20 }}>
          <TouchableOpacity style={styles.add}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              Add Friend
            </Text>
          </TouchableOpacity>
        </View> */}
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
  //   add: {
  //     flex: 1,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     backgroundColor: "darkcyan",
  //     paddingVertical: 30,
  //     paddingHorizontal: 10,
  //     marginLeft: 50,
  //     marginRight: 50,
  //     borderRadius: 15,
  //   },
});
