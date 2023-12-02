import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native"; // => ADD FORM POST
import { FontAwesome5 } from "@expo/vector-icons"; // => ADD FORM POST
import { MaterialIcons } from "@expo/vector-icons"; // => ADD FORM POST
import Ionicons from "react-native-vector-icons/Ionicons";
import { View } from "react-native";

export default function AddPost() {
  const { height, width } = useWindowDimensions(); // => ADD FORM POST

  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: "https://wallpapers.com/images/high/blue-green-aesthetic-8wspuig34zq5c323.webp",
        }}
        style={{ flex: 1, height: height }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40, //here top margin
          }}
        >
          <Image
            source={require("../img/logo.png")}
            style={{ width: 230, height: 230 }}
          />
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 10 }}
        >
          <View style={styles.icon}>
            <Ionicons name="image" size={25} color="black" />
          </View>

          <TextInput
            // value={email}
            style={styles.text}
            placeholder="Image URL"
            // onChangeText={(text) => setFormData(text)}
          />
        </View>

        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 20 }}
        >
          <View style={styles.icon}>
            <FontAwesome5 name="hashtag" size={25} color="black" />
          </View>

          <TextInput
            // value={email}
            style={styles.text}
            placeholder="Hastags"
            // onChangeText={(text) => setFormData(text)}
          />
        </View>

        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 20 }}
        >
          <View style={styles.icon}>
            <MaterialIcons name="post-add" size={25} color="black" />
          </View>

          <TextInput
            // value={email}
            multiline
            numberOfLines={5}
            style={styles.textMulti}
            placeholder="What's on your thougts?"
            // onChangeText={(text) => setFormData(text)}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "lightseagreen", //mediumaquamarine
            paddingVertical: 14,
            marginTop: 30,
            marginHorizontal: 30,
            borderRadius: 50,
            elevation: 20,
          }}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            POST
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: "lightcyan",
    flex: 1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 15,
    elevation: 20,
    paddingLeft: 10,
  },
  textMulti: {
    backgroundColor: "lightcyan",
    flex: 1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 15,
    elevation: 20,
    paddingLeft: 10,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightcyan",
    width: 50,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    elevation: 20,
  },
  regButton: {
    backgroundColor: "darkgreen",
    paddingVertical: 14,
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 50,
    elevation: 2,
  },
});
