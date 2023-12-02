import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { useNavigation } from "@react-navigation/native";
import { LoginProvider } from "./context/LoginContext";
import MainStack from "./navigators/MainStack";
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <LoginProvider>
        <MainStack />
      </LoginProvider>
    </ApolloProvider>
  );
}
