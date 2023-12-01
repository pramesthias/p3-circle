import { useWindowDimensions } from "react-native"; // => ADD FORM POST
import { FontAwesome5 } from "@expo/vector-icons"; // => ADD FORM POST
import { MaterialIcons } from "@expo/vector-icons"; // => ADD FORM POST

export default function Temp() {
  const { height, width } = useWindowDimensions(); // => ADD FORM POST

  return (
    // ========== ADD POST FORM ===========
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
          {/* <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 20 }}>
     Login
   </Text> */}
        </View>
        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 10 }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "lightcyan",
              width: 50,
              borderBottomLeftRadius: 15,
              borderTopLeftRadius: 15,
              elevation: 20,
            }}
          >
            <Ionicons name="image" size={25} color="black" />
          </View>

          <TextInput
            // value={email}
            style={{
              backgroundColor: "lightcyan",
              flex: 1,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              paddingVertical: 15,
              elevation: 20,
              paddingLeft: 10,
            }}
            placeholder="Image URL"
            // onChangeText={(text) => setFormData(text)}
          />
        </View>

        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 20 }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "lightcyan",
              width: 50,
              borderBottomLeftRadius: 15,
              borderTopLeftRadius: 15,
              elevation: 20,
            }}
          >
            <FontAwesome5 name="hashtag" size={25} color="black" />
          </View>

          <TextInput
            // value={email}
            style={{
              backgroundColor: "lightcyan",
              flex: 1,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              paddingVertical: 15,
              elevation: 20,
              paddingLeft: 10,
            }}
            placeholder="Hastags"
            // onChangeText={(text) => setFormData(text)}
          />
        </View>

        <View
          style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 20 }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "lightcyan",
              width: 50,
              borderBottomLeftRadius: 15,
              borderTopLeftRadius: 15,
              elevation: 20,
            }}
          >
            <MaterialIcons name="post-add" size={25} color="black" />
          </View>

          <TextInput
            // value={email}
            multiline
            numberOfLines={5}
            style={{
              backgroundColor: "lightcyan",
              flex: 1,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              paddingVertical: 15,
              elevation: 20,
              paddingLeft: 10,
            }}
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
