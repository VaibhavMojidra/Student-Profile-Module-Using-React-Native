import React, { useContext } from "react";
import {TouchableOpacity, View} from "react-native";
import GlobalStyle from "../../assets/css/GlobalStyle";
import MyContext from "../context/MyContext";
import AddNewCardButton from "../components/AddNewCardButton";
import WorkExpCard from "../components/Cards/WorkExpCard";


const WorkExpTab = ({isEditable,navigation}) => {
  const { workList } = useContext(MyContext);
  return (
    <View style={GlobalStyle.userscreenStyle}>
      {isEditable?<AddNewCardButton onAddPress={()=>{navigation.navigate('AddWorkExpScreen')}} buttonText="Add Work Experience"/>:null}
      {workList.map((item, index) => {
        
        return (
          <TouchableOpacity key={index} onPress={()=>{
            if(isEditable){
              navigation.navigate("EditWorkExpScreen",{id:item.id});
            }
           }}activeOpacity={0.9}>
             <WorkExpCard item={item}/>
           </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default WorkExpTab;
