import React from 'react';
import { View,Text } from 'react-native';
import GlobalStyle from '../../../assets/css/GlobalStyle';


const ExtraCurricularListContainer=({extraCurricularList})=>
{
    return(<View style={GlobalStyle.cardContainer}>
        <Text style={GlobalStyle.cardTitle}>Extra Curricular</Text>
        {
            extraCurricularList.map((item, index) => {
                return(
                    <View key={index} >
                    <Text style={GlobalStyle.extraCItemText}>{item.title}</Text>
                </View>
                )
            })
        }
    </View>);
}

export default ExtraCurricularListContainer;