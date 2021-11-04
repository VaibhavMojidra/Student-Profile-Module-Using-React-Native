import React from "react";
import { View, Animated,Text, TouchableOpacity } from "react-native";
import GlobalStyle, { Colors } from "../../assets/css/GlobalStyle";
import AntDesign  from 'react-native-vector-icons/AntDesign'; 
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AddButton() {
  const mode =new Animated.Value(0);
  const handlePress = () => {
    Animated.sequence([
        Animated.timing(mode, {
            toValue: mode._value===0 ? 1: 0,
            useNativeDriver: false
        })
    ]).start();
  };

  const rotation =mode.interpolate({
      inputRange:[0,1],
      outputRange:["0deg","45deg"]
  })

  const blogX =mode.interpolate({
    inputRange:[0,1],
    outputRange:[0,-80]
  })

  const blogY =mode.interpolate({
    inputRange:[0,1],
    outputRange:[0,-60]
  })


  const postX =mode.interpolate({
    inputRange:[0,1],
    outputRange:[0,0]
  })

  const postY =mode.interpolate({
    inputRange:[0,1],
    outputRange:[0,-100]
  })

  const qaaX =mode.interpolate({
    inputRange:[0,1],
    outputRange:[0,80]
  })

  const qaaY =mode.interpolate({
    inputRange:[0,1],
    outputRange:[0,-60]
  })

  return (
    <View style={GlobalStyle.addButtonStyleHolder}>
      <View style={GlobalStyle.secondaryButtonsContainer}>
      <Animated.View style={{position:"absolute",left:blogX,top:blogY}}>
            <View style={GlobalStyle.secondaryButton}>
                <FontAwesome5 name="blogger" size={45} color={Colors.blackColor} />
            </View>
        </Animated.View>
        <Animated.View style={{position:"absolute",left:postX,top:postY}}>
            <View style={GlobalStyle.secondaryButton}>
              <MaterialIcons name="post-add" size={45} color={Colors.blackColor} />
            </View>
        </Animated.View>
        <Animated.View style={{position:"absolute",left:qaaX,top:qaaY}}>
            <View style={GlobalStyle.secondaryButton}>
            <MaterialCommunityIcons name="frequently-asked-questions" size={45} color={Colors.blackColor} />
            </View>
        </Animated.View>
      </View>
      <View style={GlobalStyle.outerAddButtonStyle}>
        <Animated.View style={[GlobalStyle.addButtonStyle ,{transform:[{rotate:rotation}]}  ]}>
          <TouchableOpacity onPress={()=>handlePress()}>
            <AntDesign name="pluscircle" size={60} color={Colors.primaryColor} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}
