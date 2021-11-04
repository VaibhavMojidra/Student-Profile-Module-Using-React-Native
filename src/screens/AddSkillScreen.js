import React,{useContext} from 'react';
import { ScrollView } from 'react-native';
import GlobalStyle from '../../assets/css/GlobalStyle';
import SkillForm from '../components/forms/SkillForm';
import MyContext from '../context/MyContext';

const AddSkillScreen=({navigation})=>{
    const {updateSkillList} = useContext(MyContext);
    return(
        <ScrollView style={GlobalStyle.userscreenStyle}>
            <SkillForm buttonText="Save" onSubmitPress={(skill,skillPercent)=>{
                updateSkillList({type:'add_skill',data:{
                    id:Math.floor(Math.random() * 999999),
                    skill,
                    skillPercent:parseInt(skillPercent)
                },navigation});
            }}/>
        </ScrollView>
    );
};

export default AddSkillScreen;

