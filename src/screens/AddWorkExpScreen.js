import React,{useContext} from "react";
import { ScrollView } from "react-native";
import MyContext from "../context/MyContext";
import WorkExpForm from "../components/forms/WorkExpForm";
import GlobalStyle from "../../assets/css/GlobalStyle";

const AddWorkExpScreen = ({navigation}) => {
  const {updateWorkList} = useContext(MyContext)
  return (
    <ScrollView style={GlobalStyle.userscreenStyle}>
        <WorkExpForm buttonText="Save" onSubmitPress={(workTitle,company,employeeType,startDate,isCurrent,endDate,image,showMedia)=>{
            updateWorkList({type:'add_work',data:{id:Math.floor(Math.random() * 999999),workTitle,company,employeeType,startDate,isCurrent,endDate,image,showMedia },navigation})
        }}/>
    </ScrollView>
  );
};

export default AddWorkExpScreen;
