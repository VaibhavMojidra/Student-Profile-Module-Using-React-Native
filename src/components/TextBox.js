import React, { useState } from "react";
import { View, TextInput, Image,Text } from "react-native";
import GlobalStyle, {
  ImagesAndIcons,
} from "../../assets/css/GlobalStyle";

const TextBox = ({
  value,
  onChange,
  icon = null,
  placeholder = "Enter the text",
  titleText="",
  showError=false,
  errorText="Error",
  setShowError,
  isNumeric=false
}) => {
  const [focusOrBlurStyle, setFocusOrBlurStyle] = useState(
    GlobalStyle.textBoxBlur
  );

  const OnTextChange=(text)=>{
    onChange(text);
    setShowError(false);
  }
  return (
    <View style={GlobalStyle.formItem}>
      {titleText===""?null:<Text style={GlobalStyle.formTitle}>{titleText}</Text>}
      <View style={[GlobalStyle.textBox, focusOrBlurStyle]}>
        {icon === null ? null : (
          <Image
            source={ImagesAndIcons.icon_Facebook}
            style={GlobalStyle.textBoxTextIcon}
          />
        )}
        <TextInput
          placeholder={placeholder}
          style={GlobalStyle.textBoxTextInput}
          value={value}
          keyboardType={isNumeric?'numeric':'default'}
          onChangeText={(txt) => OnTextChange(isNumeric?txt.replace(/[^0-9]/g, ''):txt)}
          underlineColorAndroid="transparent"
          onFocus={() => setFocusOrBlurStyle(GlobalStyle.textBoxFocus)}
          onBlur={() => setFocusOrBlurStyle(GlobalStyle.textBoxBlur)}
        />
      </View>
      {showError?<Text style={GlobalStyle.errorText}>{errorText}</Text>:null}
    </View>
  );
};

export default TextBox;
