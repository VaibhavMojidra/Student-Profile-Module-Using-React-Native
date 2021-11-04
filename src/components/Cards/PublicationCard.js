import React from "react";
import { View, Text, Image} from "react-native";
import GlobalStyle, {ImagesAndIcons } from "../../../assets/css/GlobalStyle";
import moment from 'moment';
const PublicationCard = ({item}) => {
  
  return (
    <View style={GlobalStyle.cardContainer}>
      <Text style={GlobalStyle.cardsMainTitle}>{item.title}</Text>
      <View style={{flex:1,flexDirection:'row'}}>
        <View style={{flex:3}}>
          <Text style={GlobalStyle.cardTextGrey}>{moment(item.publicationDate).format('DD/MM/YYYY')}</Text>
          <Text style={GlobalStyle.cardSubtitle}>Description</Text>
          <Text style={GlobalStyle.cardText}>{item.description}</Text>
        </View>
        <View style={{flex:1}}>
          <Image source={item.image===null?ImagesAndIcons.img_icon:(item.showMedia?{uri:item.image}:ImagesAndIcons.img_icon)} style={GlobalStyle.cardImage}/>
        </View>
      </View>
    </View>
  );
};

export default PublicationCard;
