import React from "react";
import { View,Image,Text,TouchableOpacity } from "react-native";
import GlobalStyle from "../../../assets/css/GlobalStyle";

const FollowingListItem = ({profilePic,name,onStatusPress,status}) => {
  return (
    <View style={{paddingHorizontal:15,paddingVertical:7,flexDirection:'row',alignItems:'center',flex:1}}>
      <Image source={profilePic} style={GlobalStyle.listItemProfilePic}/>
      <Text style={GlobalStyle.listItemName}>{name}</Text>
      <View style={{flex:1}}>
      <TouchableOpacity onPress={onStatusPress}>
        <Text style={GlobalStyle.listItemStatus}>{status}</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default FollowingListItem;
