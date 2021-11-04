import React, { useContext } from "react";
import {TouchableOpacity, View} from "react-native";
import GlobalStyle from "../../assets/css/GlobalStyle";
import MyContext from "../context/MyContext";
import AddNewCardButton from "../components/AddNewCardButton";
import CertifcateCard from "../components/Cards/CertificateCard";


const CertificateTab = ({isEditable,navigation}) => {
  const { certificateList } = useContext(MyContext);
  return (
    <View style={GlobalStyle.userscreenStyle}>
      {isEditable?<AddNewCardButton onAddPress={()=>{navigation.navigate('AddCertificateScreen')}} buttonText="Add Certificate"/>:null}
      {certificateList.map((item,index)=>{
          return(
          <TouchableOpacity key={index} onPress={()=>{
            if(isEditable){
              navigation.navigate("EditCertificateScreen",{id:item.id});
            }
           }}activeOpacity={0.9}><CertifcateCard item={item}/></TouchableOpacity>
          );
      })}
    </View>
  );
};

export default CertificateTab;
