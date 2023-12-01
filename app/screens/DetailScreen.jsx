import { Button, Text, View } from "react-native";

export default function DetailsScreen({ navigation }) {
  // const { itemId } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        Details Screen
        {/* {itemId} */}
      </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
