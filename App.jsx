import Routes from "./src/routes/index";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";
import axios from "axios";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
