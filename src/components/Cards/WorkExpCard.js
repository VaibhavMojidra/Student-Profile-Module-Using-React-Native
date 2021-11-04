import React from "react";
import { View, Text, Image} from "react-native";
import GlobalStyle, { Colors, ImagesAndIcons } from "../../../assets/css/GlobalStyle";
import moment from 'moment';
const WorkExpCard = ({item}) => {
  
  return (
    <View style={GlobalStyle.cardContainer}>
      <Text style={GlobalStyle.cardsMainTitle}>{item.company}</Text>
      <View style={{flex:1,flexDirection:'row'}}>
        <View style={{flex:3}}>
          <Text style={GlobalStyle.cardTextGrey}>{moment(item.startDate).format('MMMM YYYY')} - {item.isCurrent?"Current":(moment(item.endDate).format('MMMM YYYY'))}</Text>
          <Text style={GlobalStyle.cardText}>{item.employeeType}</Text>
          <Text style={GlobalStyle.cardSubtitle}>{item.workTitle}</Text>
        </View>
        <View style={{flex:1}}>
          <Image source={item.image===null?ImagesAndIcons.img_icon:(item.showMedia?{uri:item.image}:ImagesAndIcons.img_icon)} style={GlobalStyle.cardImage}/>
        </View>
      </View>
    </View>
  );
};

export default WorkExpCard;
