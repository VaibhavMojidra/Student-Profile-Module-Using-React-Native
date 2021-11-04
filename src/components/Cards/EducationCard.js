import React from "react";
import { View, Text, Image} from "react-native";
import GlobalStyle, { ImagesAndIcons } from "../../../assets/css/GlobalStyle";
import moment from 'moment';
const EducationCard = ({item}) => {
  
  return (
    <View style={GlobalStyle.cardContainer}>
      <Text style={GlobalStyle.cardsMainTitle}>{item.courseName}</Text>
      <View style={{flex:1,flexDirection:'row'}}>
        <View style={{flex:3}}>
          <Text style={GlobalStyle.cardSubtitle}>{item.instituteName}</Text>
          <Text style={GlobalStyle.cardTextGrey}>{moment(item.startDate).format('MMMM YYYY')} - {moment(item.endDate).format('MMMM YYYY')}</Text>
          {item.showGrade?<Text style={GlobalStyle.cardText}>{item.percentGrade}</Text>:null}
        </View>
        <View style={{flex:1}}>
          <Image source={item.image===null?ImagesAndIcons.img_icon:{uri:item.image}} style={GlobalStyle.cardImage}/>
        </View>
      </View>
      <Text style={[GlobalStyle.cardTexBold,{textAlign:'right'}]}>{item.boardName}</Text>
    </View>
  );
};

export default EducationCard;
