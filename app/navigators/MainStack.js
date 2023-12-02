import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import Login from "../screens/Login";
import HomeScreen from "../screens/HomeScreen";
import Register from "../screens/Register";
import LogoutButton from "../components/LogoutButton";
import Logo from "../components/Logo";
import TabNav from "./TabNav";
import PostDetail from "../screens/PostDetail";
import Comment from "../screens/Comment";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="Main"
              component={TabNav}
              options={() => {
                return {
                  headerTitle: () => <Logo />,
                  headerRight: () => <LogoutButton />,
                };
              }}
            />
            <Stack.Screen
              name="PostDetail"
              component={PostDetail}
              options={() => {
                return {
                  headerTitle: () => <Logo />,
                  headerRight: () => <LogoutButton />,
                };
              }}
            />
            <Stack.Screen
              name="Comment"
              component={Comment}
              options={() => {
                return {
                  headerTitle: () => <Logo />,
                  headerRight: () => <LogoutButton />,
                };
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={() => {
                return {
                  headerShown: false,
                };
              }}
            />

            <Stack.Screen
              name="Register"
              component={Register}
              options={() => {
                return {
                  headerShown: false,
                };
              }}
            />
          </>
        )}
      </Stack.Navigator>
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
