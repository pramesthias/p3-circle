export default function Template() {
  return (
    // ====== LOGIN FORM =======
    <ScrollView style={{ flex: 1, backgroundColor: "whitesmoke" }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100, //here top margin
        }}
      >
        <Image
          source={require("../img/logo.png")}
          style={{ width: 280, height: 280 }}
        />
        {/* <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 20 }}>
     Login
   </Text> */}
      </View>
      <View
        style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 20 }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightgreen",
            width: 50,
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15,
            elevation: 2,
          }}
        >
          <Ionicons name="mail" size={30} color="black" />
        </View>

        <TextInput
          // value={email}
          style={{
            backgroundColor: "lightgreen",
            flex: 1,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            paddingVertical: 15,
            elevation: 2,
            paddingLeft: 10,
          }}
          placeholder="Your Email Here"
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
            backgroundColor: "lightgreen",
            width: 50,
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15,
            elevation: 2,
          }}
        >
          <Ionicons name="lock-closed" size={30} color="black" />
        </View>

        <TextInput
          // value={email}
          style={{
            backgroundColor: "lightgreen",
            flex: 1,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            paddingVertical: 15,
            elevation: 2,
            paddingLeft: 10,
          }}
          placeholder="Your Password Here"
          // onChangeText={(text) => setFormData(text)}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "darkgreen",
          paddingVertical: 14,
          marginTop: 30,
          marginHorizontal: 30,
          borderRadius: 50,
          elevation: 2,
        }}
      >
        <Text
          style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
        >
          LOGIN
        </Text>
      </TouchableOpacity>
      <View style={{ alignItems: "center", marginTop: 20, paddingBottom: 30 }}>
        <Text>Do not have an account? </Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: "bold" }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {/* </ScrollView> =>  ACTIVATE WHEN CHANGED*/}
      {/* ====== REGISTER FORM ======= */}
      {/* <ScrollView style={{ flex: 1, backgroundColor: "whitesmoke" }}> =>  ACTIVATE WHEN CHANGED */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 60,
        }}
      >
        <Image
          source={require("../img/logo.png")}
          style={{ width: 250, height: 250 }}
        />
        {/* <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 20 }}>
     Login
   </Text> */}
      </View>
      <View
        style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 15 }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightgreen",
            width: 50,
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15,
            elevation: 2,
          }}
        >
          <MaterialIcons name="font-download" size={25} color="black" />
        </View>

        <TextInput
          // value={email}
          style={{
            backgroundColor: "lightgreen",
            flex: 1,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            paddingVertical: 10,
            elevation: 2,
            paddingLeft: 10,
          }}
          placeholder="Your Name Here"
          // onChangeText={(text) => setFormData(text)}
        />
      </View>
      <View
        style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 15 }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightgreen",
            width: 50,
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15,
            elevation: 2,
          }}
        >
          <Ionicons name="at-circle" size={25} color="black" />
        </View>

        <TextInput
          // value={email}
          style={{
            backgroundColor: "lightgreen",
            flex: 1,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            paddingVertical: 10,
            elevation: 2,
            paddingLeft: 10,
          }}
          placeholder="Your Username Here"
          // onChangeText={(text) => setFormData(text)}
        />
      </View>
      <View
        style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 15 }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightgreen",
            width: 50,
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15,
            elevation: 2,
          }}
        >
          <Ionicons name="mail" size={25} color="black" />
        </View>

        <TextInput
          // value={email}
          style={{
            backgroundColor: "lightgreen",
            flex: 1,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            paddingVertical: 10,
            elevation: 2,
            paddingLeft: 10,
          }}
          placeholder="Your Email Here"
          // onChangeText={(text) => setFormData(text)}
        />
      </View>
      <View
        style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 15 }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightgreen",
            width: 50,
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15,
            elevation: 2,
          }}
        >
          <Ionicons name="lock-closed" size={25} color="black" />
        </View>

        <TextInput
          // value={email}
          style={{
            backgroundColor: "lightgreen",
            flex: 1,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            paddingVertical: 10,
            elevation: 2,
            paddingLeft: 10,
          }}
          placeholder="Your Password Here"
          // onChangeText={(text) => setFormData(text)}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "darkgreen",
          paddingVertical: 14,
          marginTop: 30,
          marginHorizontal: 30,
          borderRadius: 50,
          elevation: 2,
        }}
      >
        <Text
          style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
        >
          SIGN UP
        </Text>
      </TouchableOpacity>
      <View style={{ alignItems: "center", marginTop: 20, paddingBottom: 30 }}>
        <Text>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: "bold" }}>Login</Text>
        </TouchableOpacity>
      </View>
      {/* </ScrollView> => ACTIVATE LATER */}
    </ScrollView> // NOT USED IN USER DETAIL
  );
}
