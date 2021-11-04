import React, { useContext } from "react";
import {TouchableOpacity, View} from "react-native";
import GlobalStyle from "../../assets/css/GlobalStyle";
import MyContext from "../context/MyContext";
import AddNewCardButton from "../components/AddNewCardButton";
import PublicationCard from "../components/Cards/PublicationCard";


const PublicationTab = ({isEditable,navigation}) => {
  const { publicationList } = useContext(MyContext);
  return (
    <View style={GlobalStyle.userscreenStyle}>
      {isEditable?<AddNewCardButton onAddPress={()=>{navigation.navigate('AddPublicationScreen')}} buttonText="Add Publication"/>:null}
      {publicationList.map((item, index) => {
        
        return (
          <TouchableOpacity key={index} onPress={()=>{
            if(isEditable){
              navigation.navigate("EditPublicationScreen",{id:item.id});
            }
           }}activeOpacity={0.9}><PublicationCard item={item}/></TouchableOpacity>
        );
      })}
    </View>
  );
};

export default PublicationTab;
