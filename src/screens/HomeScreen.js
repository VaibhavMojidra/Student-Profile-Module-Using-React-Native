import React,{useContext} from "react";
import { View,Text } from "react-native";
import GlobalStyle from "../../assets/css/GlobalStyle";
import MyContext from "../context/MyContext";

export default HomeScreen =({navigation})=>{
  const {setTitleText} = useContext(MyContext);
  navigation.addListener('focus', () => {
      setTitleText("Home");   
  });


  return (
      <View style={GlobalStyle.userscreenStyle}>
        <Text>Home Screen</Text>
      </View>
  );
};
