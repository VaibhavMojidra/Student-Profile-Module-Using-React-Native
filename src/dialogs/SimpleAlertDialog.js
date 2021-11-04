import { Alert } from "react-native"

export default SimpleAlertDialog=(title,message,buttonText,onPress)=>{
    Alert.alert(
        title,
        message,
        [
          {
            text: "",
            onPress: () => {},
            style: "cancel"
          },
          { text: buttonText, onPress:onPress }
        ]
      );
}