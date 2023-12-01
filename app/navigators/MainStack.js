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
              name="Home"
              component={HomeScreen}
              options={() => {
                return {
                  headerShown: true,
                  // headerTitle: () => <Logo size={"sm"} />,
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
                  headerShown: false, // hilangin <- Landing
                };
              }}
            />

            <Stack.Screen
              name="Register"
              component={Register}
              options={() => {
                return {
                  headerShown: false, // hilangin <- Landing
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
