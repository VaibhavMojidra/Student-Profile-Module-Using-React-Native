import React from "react";
import { TouchableOpacity, Text } from "react-native";
import GlobalStyle from "../../assets/css/GlobalStyle";

const AddNewCardButton = ({ onAddPress,buttonText="Add" }) => {
  return (
    <TouchableOpacity style={GlobalStyle.tabsAddButton} onPress={onAddPress}>
      <Text style={GlobalStyle.tabsAddButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default AddNewCardButton;
