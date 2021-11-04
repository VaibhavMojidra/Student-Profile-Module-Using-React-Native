import React, { useContext } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import MyContext from "../context/MyContext";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import GlobalStyle, { Colors } from "../../assets/css/GlobalStyle";
import PublicationForm from "../components/forms/PublicationForm";

let updatePublicationList = null;

const EditPublicationScreen = ({ navigation, route }) => {
  const { publicationList } = useContext(MyContext);
  updatePublicationList = useContext(MyContext).updatePublicationList;
  const pub = publicationList.find((p) => p.id === route.params.id);

  return (
    <ScrollView style={GlobalStyle.userscreenStyle}>
      <PublicationForm
        buttonText="Update"
        initialValues={
          pub === undefined
            ? {
                title:"",
                publisher:"",
                publicationDate:new Date(),
                authors:[],
                description:"",
                image:null,
                showMedia:true
              }
            : pub
        }
        onSubmitPress={(title,publisher,publicationDate,authors,description,image,showMedia) => {
            updatePublicationList({
            type: "edit_Publication",
            data: {id: pub.id,title,publisher,publicationDate,authors,description,image,showMedia},
            navigation,
          });
        }}
      />
    </ScrollView>
  );
};

EditPublicationScreen.navigationOptions = ({ navigation, route }) => {
  return {
    headerTitle: "Edit Publication",
    headerRight: () => (
      <TouchableOpacity
        style={GlobalStyle.headerRightStyle}
        onPress={() =>
          DialogWithTwoButtons(
            "Confirmation",
            "Are you sure you want to delete this publication?",
            "No",
            () => {},
            "Yes",
            () =>
              updatePublicationList({
                type: "delete_Publication",
                id: route.params.id,
                navigation,
              })
          )
        }
      >
        <MaterialIcons name="delete" size={27} color={Colors.secondaryColor} />
      </TouchableOpacity>
    ),
  };
};
export default EditPublicationScreen;
