import React,{useContext} from 'react';
import { ScrollView } from 'react-native';
import GlobalStyle from '../../assets/css/GlobalStyle';
import ExtraCurricularForm from '../components/forms/ExtraCurricularForm';
import MyContext from '../context/MyContext';

const AddExtraCurricularScreen=({navigation})=>{
    const {updateExtraCurricularList} = useContext(MyContext);
    return(
        <ScrollView style={GlobalStyle.userscreenStyle}>
           <ExtraCurricularForm buttonText="Save" onSubmitPress={(title,startDate,endDate,description,image,showMedia)=>{
               updateExtraCurricularList({type:"add_extraCurricular",data:{id: Math.floor(Math.random() * 999999),title,startDate,endDate,description,image,showMedia},navigation});
           }}/> 
        </ScrollView>
    );
};

export default AddExtraCurricularScreen;