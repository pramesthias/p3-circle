import { ScrollView } from "react-native";

export default function Template() {
  return (
    <ScrollView>
      {/* ====== REGISTER FORM ======= */}

      {/* ====== USER DETAIL ======== */}
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
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "darkslategrey" }}>FOLLOWER</Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "darkslategrey",
                }}
              >
                1110
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "darkslategrey" }}>FOLLOWING</Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "darkslategrey",
                }}
              >
                1110
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{ flexDirection: "row", marginTop: 40, marginBottom: 20 }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "darkcyan",
                paddingVertical: 10,
                marginLeft: 20,
                marginRight: 10,
                borderRadius: 15,
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                Add Friend
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "seagreen",
                paddingVertical: 10,
                marginLeft: 10,
                marginRight: 20,
                borderRadius: 15,
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                Log Out
              </Text>
            </TouchableOpacity> */}
          </View>
        </ImageBackground>
      </View>
    </ScrollView> // NOT USED IN USER DETAIL
  );
}
