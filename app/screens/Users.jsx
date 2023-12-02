import {
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

export default function Users() {
  const { height, width } = useWindowDimensions();

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
            // value={email}
            style={styles.search}
            placeholder="Search"
            // onChangeText={(text) => setFormData(text)}
          />

          <TouchableOpacity style={styles.icon}>
            <MaterialIcons name="person-search" size={25} color="black" />
          </TouchableOpacity>
        </View>

        {/* USER ITERATE */}
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 25 }}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4GBnSDjUWXBI08tL0Xj_BuFqu3iZEXW3wnAV4_GfX9-klTFV9IczV-RmW3UrK0Pvp0I&usqp=CAU",
            }}
            style={styles.profilePic}
          />
          <Text style={styles.text}>SUZY</Text>

          <TouchableOpacity style={styles.icon}>
            <Ionicons name="person-add" size={22} color="black" />
          </TouchableOpacity>
        </View>
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
    borderRadius: 20,
    marginRight: 10,
  },
});
