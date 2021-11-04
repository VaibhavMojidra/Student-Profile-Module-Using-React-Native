import React from "react";
import { View, Text, Switch } from "react-native";
import GlobalStyle, { Colors } from "../../assets/css/GlobalStyle";

const MySwitchButton = ({
  switchValue = false,
  setSwitchValue,
  textOnSwitchOn,
  textOnSwtichOff,
}) => {
  return (
    <View style={[GlobalStyle.formItem,GlobalStyle.switchContainer]}>
        <Text style={[GlobalStyle.formTitle,GlobalStyle.switchText]}>{switchValue ? textOnSwitchOn : textOnSwtichOff}</Text>
      <Switch
        style={GlobalStyle.switchButton}
        thumbColor={switchValue?Colors.primaryColor:"#c7c5c1"}
        value={switchValue}
        onValueChange={(switchValue) => {
          setSwitchValue(switchValue);
        }}
      />
    </View>
  );
};

export default MySwitchButton;
