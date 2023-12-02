import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import UserDetail from "../screens/UserDetail";
import AddPost from "../screens/AddPost";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Users from "../screens/Users";
import PostDetail from "../screens/PostDetail";

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Add") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search-circle" : "search-circle-outline";
          } else if (route.name === "UserDetail") {
            iconName = focused ? "person" : "person-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "darkgreen",
        tabBarInactiveTintColor: "seagreen",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddPost}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
      <Tab.Screen
        name="Search"
        component={Users}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
      <Tab.Screen
        name="UserDetail"
        component={UserDetail}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
    </Tab.Navigator>
  );
}
