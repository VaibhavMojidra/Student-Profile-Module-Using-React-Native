import React,{useContext} from "react";
import { ScrollView } from "react-native";
import MyContext from "../context/MyContext";
import GlobalStyle from "../../assets/css/GlobalStyle";
import PublicationForm from "../components/forms/PublicationForm";

const AddPublicationScreen = ({navigation}) => {
  const {updatePublicationList} = useContext(MyContext)
  return (
    <ScrollView style={GlobalStyle.userscreenStyle}>
    <PublicationForm buttonText="Save"
    onSubmitPress={(title,publisher,publicationDate,authors,description,image,showMedia)=>{
      updatePublicationList({type:'add_Publication',data:{
        id:Math.floor(Math.random() * 999999),
        title,publisher,publicationDate,authors,description,image,showMedia
    },navigation});
    }}/>
    </ScrollView>
  );
};

export default AddPublicationScreen;
