import React from "react";
import MyStack from "./src/components/MyStack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Colors } from "./assets/css/GlobalStyle";
import { MyProvider } from "./src/context/MyContext";

export default function App() {
  return (
    <MyProvider>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.primaryColor}
        />
        <MyStack />
      </NavigationContainer>
    </MyProvider>
  );
}
