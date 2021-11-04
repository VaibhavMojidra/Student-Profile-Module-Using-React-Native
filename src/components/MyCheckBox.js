import React from 'react';
import { View,Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import GlobalStyle, { Colors } from '../../assets/css/GlobalStyle';

const MyCheckBox=({check=false,setCheck,titleText=""})=>{
    return(
    <View style={[GlobalStyle.formItem,{flexDirection:'row'}]}>
        <Text style={[GlobalStyle.formTitle,{marginRight:10}]}>{titleText}</Text>
        <CheckBox
             tintColors={{ true: Colors.primaryColor, false: Colors.textBlackColor }}
             tintColor={Colors.textBlackColor}
             onFillColor={Colors.primaryColor}
             value={check}
             onValueChange={(newValue) => setCheck(newValue)}
        />
    </View>);
};

export default MyCheckBox;