import React, { useContext } from "react";
import {TouchableOpacity, View} from "react-native";
import GlobalStyle from "../../assets/css/GlobalStyle";
import MyContext from "../context/MyContext";
import EducationCard from "../components/Cards/EducationCard";
import AddNewCardButton from "../components/AddNewCardButton";


const EducationTab = ({isEditable,navigation}) => {
  const { educationList } = useContext(MyContext);
  return (
    <View style={GlobalStyle.userscreenStyle}>
      {isEditable?<AddNewCardButton onAddPress={()=>{navigation.navigate('AddEducationScreen')}} buttonText="Add Education"/>:null}
      {educationList.map((item, index) => {
        return (
          <TouchableOpacity key={index} onPress={()=>{
            if(isEditable){
              navigation.navigate("EditEducationScreen",{id:item.id});
            }
           }}activeOpacity={0.9}><EducationCard item={item}/></TouchableOpacity>
        );
      })}
    </View>
  );
};

export default EducationTab;
