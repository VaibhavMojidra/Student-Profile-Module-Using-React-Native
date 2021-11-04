import React,{useContext} from 'react';
import { View,TouchableOpacity } from 'react-native';
import GlobalStyle from '../../assets/css/GlobalStyle';
import AddNewCardButton from '../components/AddNewCardButton';
import SkillCard from '../components/Cards/SkillCard';
import MyContext from '../context/MyContext';

const SkillTab=({isEditable=false,navigation})=>{
    const {skillList} = useContext(MyContext);
    
    return(
    <View style={[GlobalStyle.userscreenStyle,{marginBottom:30}]}>
        {isEditable?<AddNewCardButton onAddPress={()=>{navigation.navigate('AddSkillScreen')}} buttonText="Add Skill"/>:null}
        {skillList.map((item,index)=>{
            return(
                <TouchableOpacity key={index} onPress={()=>navigation.navigate('EditSkillScreen',{id:item.id})}>
                    <SkillCard item={item}/>
                </TouchableOpacity>                
            );
        })}
    </View>
    );
};

export default SkillTab;