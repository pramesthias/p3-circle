import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailScreen";

const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();
import { useNavigation } from "@react-navigation/native";
import LandingScreen from "./navigators/LandingScreen";

// LANDING

// PROFILE ProfileScreen
function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
      <Button
        title="LOGIN"
        onPress={() =>
          navigation.navigate(
            "Landing"
            // {
            //   screen: "Home",
            // }
          )
        }
      />
      <Button
        style={{ marginTop: 20 }}
        title="register"
        onPress={() =>
          navigation.navigate(
            "Home"
            // {
            //   screen: "Home",
            // }
          )
        }
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <SafeAreaView style={{ flex: 1 }}> */}
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          // options={() => {
          //   return {
          //     headerShown: false, // hilangin <- Landing
          //   };
          // }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={() => {
            return {
              headerShown: false, // hilangin <- Landing
            };
          }}
        />
      </Stack.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator> */}

      {/* <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home-sharp" : "home-outline";
            } else if (route.name === "Details") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator> */}

      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
