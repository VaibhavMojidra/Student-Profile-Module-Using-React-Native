import React,{useContext} from "react";
import { ScrollView } from "react-native";
import MyContext from "../context/MyContext";
import GlobalStyle from "../../assets/css/GlobalStyle";
import CertificateForm from "../components/forms/CertificateForm";

const AddCertificateScreen = ({navigation}) => {
  const {updateCertificateList} = useContext(MyContext)
  return (
    <ScrollView style={GlobalStyle.userscreenStyle}>
    <CertificateForm buttonText="Save"
        onSubmitPress={(title,date,description,image,showMedia)=>{
            updateCertificateList({type:'add_Certificate',data:{id: Math.floor(Math.random() * 999999),title,date,description,image,showMedia},navigation})
        }}
    />
    </ScrollView>
  );
};

export default AddCertificateScreen;
