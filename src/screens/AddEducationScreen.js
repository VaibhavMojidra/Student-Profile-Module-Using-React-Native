import React,{useContext} from "react";
import EducationForm from "../components/forms/EducationForm";
import { ScrollView } from "react-native";
import MyContext from "../context/MyContext";
import GlobalStyle from "../../assets/css/GlobalStyle";

const AddEducationScreen = ({navigation}) => {
  const {updateEducationList} = useContext(MyContext)
  return (
    <ScrollView style={GlobalStyle.userscreenStyle}>
    <EducationForm buttonText="Save"
      onSubmitPress={(instituteName,courseName,boardName,startDate,endDate,percentGrade,showGrade,image)=>{
        updateEducationList({type:'add_education',data:{id: Math.floor(Math.random() * 999999),instituteName,courseName,boardName,startDate,endDate,percentGrade,showGrade,image},navigation})
      }}
    />
    </ScrollView>
  );
};

export default AddEducationScreen;
