import React from "react";
import { TouchableOpacity, Text } from "react-native";
import GlobalStyle from "../../assets/css/GlobalStyle";

const SubmitButton = ({ onSubmitPress,buttonText="Submit" }) => {
  return (
    <TouchableOpacity style={GlobalStyle.submitButton} onPress={onSubmitPress}>
      <Text style={GlobalStyle.submitButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
