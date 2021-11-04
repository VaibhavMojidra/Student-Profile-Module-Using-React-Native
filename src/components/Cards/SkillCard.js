import React,{useContext} from 'react';
import { Dimensions, View,Text} from 'react-native';
import GlobalStyle,{getSkillColor,Colors} from '../../../assets/css/GlobalStyle';

const SkillCard = ({ item }) => {
  let max = (Dimensions.get('window').width/100)*75;

  return (
    <View style={GlobalStyle.skillCard}>
      <Text style={GlobalStyle.skillItemText}>{item.skill}</Text>
      <View
        style={[
          GlobalStyle.skillPool,
          {
            width: (max / 100) * item.skillPercent,
            backgroundColor: getSkillColor(item.skillPercent),
          },
        ]}
      >
        <Text
          style={{
            color: Colors.secondaryColor,
            textAlign: "right",
            paddingRight: 3,
          }}
        >
          {item.skillPercent}%
        </Text>
      </View>
    </View>
  );
};

export default SkillCard;
