import React from 'react';
import { View,Text } from 'react-native';
import GlobalStyle from '../../../assets/css/GlobalStyle';
import moment from 'moment';

const WorkListContainer=({workList})=>
{
    return(<View style={GlobalStyle.cardContainer}>
        <Text style={GlobalStyle.cardTitle}>Work Experience</Text>
        {
            workList.map((item, index) => {
                return(
                    <View key={index} >
                    <Text style={GlobalStyle.workItemText}>{moment(item.startDate).format('YYYY')} {item.company}</Text>
                </View>
                )
            })
        }
    </View>);
}

export default WorkListContainer;