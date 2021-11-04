import React from 'react';
import { View, Image, Text } from 'react-native';
import GlobalStyle, { ImagesAndIcons } from '../../../assets/css/GlobalStyle';


const EducationListContainer = ({ educationList }) => {
    return (<View style={GlobalStyle.cardContainer}>
        <Text style={GlobalStyle.cardTitle}>Education</Text>
        {
            educationList.map((item, index) => {
                return (
                    <View style={GlobalStyle.educationItemContainer} key={index}>
                        <Image source={ImagesAndIcons.icon_Education} style={GlobalStyle.educationItemIcon} />
                        <Text style={GlobalStyle.educationItemText}>{item.instituteName}</Text>
                    </View>
                )
            })
        }
    </View>);
}

export default EducationListContainer;