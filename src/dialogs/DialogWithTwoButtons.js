import { Alert } from "react-native"

export default DialogWithTwoButtons=(title,message,negativeButtonText,onPressNegative,positiveButtonText,onPressPositive)=>{
    Alert.alert(
        title,
        message,
        [
          {
            text: negativeButtonText,
            onPress: onPressNegative,
            style: "cancel"
          },
          { text: positiveButtonText, onPress:onPressPositive }
        ]
      );
}