import React from 'react';
import { View,Text,Dimensions } from 'react-native';
import GlobalStyle,{getSkillColor} from '../../../assets/css/GlobalStyle';


const SkillListContainer=({skillList})=>
{
    let max = (Dimensions.get('window').width/100)*75;
    
    return(<View style={GlobalStyle.cardContainer}>
        <Text style={GlobalStyle.cardTitle}>Skills</Text>
        {
            skillList.map((item, index) => {
                return(
                    <View style={[GlobalStyle.educationItemContainer,{flexDirection:'column'}]} key={index}>
                        <Text style={GlobalStyle.skillItemText}>{item.skill}</Text>
                        <View style={[GlobalStyle.skillPool,{width:(max/100)*item.skillPercent,backgroundColor:getSkillColor(item.skillPercent)}]}/>
                    </View>
                )
            })
        }
    </View>);
}

export default SkillListContainer;