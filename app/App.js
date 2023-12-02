import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { useNavigation } from "@react-navigation/native";
import { LoginProvider } from "./context/LoginContext";
import MainStack from "./navigators/MainStack";

export default function App() {
  return (
    <LoginProvider>
      <MainStack />
    </LoginProvider>
  );
}
