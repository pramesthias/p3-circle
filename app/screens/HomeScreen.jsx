import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailsScreen from "../screens/DetailScreen";

const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
import { useNavigation } from "@react-navigation/native";
import LogoutButton from "../components/LogoutButton";

import { useWindowDimensions } from "react-native"; // => ADD FORM POST
import Card from "../components/Card";

export default function HomeScreen() {
  const { height, width } = useWindowDimensions(); // => ADD FORM POST

  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: "https://wallpapers.com/images/high/blue-green-aesthetic-8wspuig34zq5c323.webp",
        }}
        style={{ flex: 1, height: height }}
      >
        <Card />
      </ImageBackground>
    </ScrollView>
  );
}
