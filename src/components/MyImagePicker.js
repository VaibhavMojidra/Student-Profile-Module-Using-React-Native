import React, { useEffect } from "react";
import { View, ImageBackground, TouchableOpacity,Text } from "react-native";
import GlobalStyle, { Colors, ImagesAndIcons } from "../../assets/css/GlobalStyle";
// import * as ImagePicker from "expo-image-picker";
import MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo  from "react-native-vector-icons/Entypo";

const MyImagePicker = ({ image, setImage,titleText="" }) => {
  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== "web") {
  //       const {
  //         status,
  //       } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== "granted") {
  //         alert("Please, Grant permission to upload media");
  //       }
  //     }
  //   })();
  // }, []);

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });
  //   if (!result.cancelled) {
  //     setImage(result.uri);
  //   }
  // };

  return (
    <View style={GlobalStyle.formItem}>
      {titleText===""?null:<Text style={GlobalStyle.formTitle}>{titleText}</Text>}
      {image === null ? (
        <ImageBackground source={ImagesAndIcons.img_icon} style={GlobalStyle.image_ImageBackgroud}>
          <TouchableOpacity style={GlobalStyle.imageUploadDeleteTouchOpacity} activeOpacity={0.9} onPress={()=>{}}>
            <Entypo name="upload" size={27} color={Colors.whiteColor} />
          </TouchableOpacity>
          <TouchableOpacity style={GlobalStyle.imageUploadDeleteTouchOpacity} activeOpacity={0.9}>
            <MaterialCommunityIcons name="delete-forever" size={30} color={Colors.whiteColor} onPress={()=>setImage(null)}/>
          </TouchableOpacity>
        </ImageBackground>
      ) : (
        <ImageBackground source={{ uri: image }} style={GlobalStyle.image_ImageBackgroud}>
          <TouchableOpacity style={GlobalStyle.imageUploadDeleteTouchOpacity} activeOpacity={0.9} onPress={()=>{}}>
            <Entypo name="upload" size={27} color={Colors.whiteColor} />
          </TouchableOpacity>
          <TouchableOpacity style={GlobalStyle.imageUploadDeleteTouchOpacity} activeOpacity={0.9} onPress={()=>setImage(null)}>
            <MaterialCommunityIcons name="delete-forever" size={30} color={Colors.whiteColor}/>
          </TouchableOpacity>
        </ImageBackground>
      )}
    </View>
  );
};

export default MyImagePicker;
