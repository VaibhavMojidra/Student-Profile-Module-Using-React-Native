import React, { useContext } from "react";
import { Alert, ScrollView, TouchableOpacity } from "react-native";
import MyContext from "../context/MyContext";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import GlobalStyle, { Colors } from "../../assets/css/GlobalStyle";
import ExtraCurricularForm from "../components/forms/ExtraCurricularForm";
import CertificateForm from "../components/forms/CertificateForm";

let updateCertificateList = null;

const EditCertificateScreen = ({ navigation, route }) => {
  const { certificateList } = useContext(MyContext);
  updateCertificateList = useContext(MyContext).updateCertificateList;
  const cert = certificateList.find((c) => c.id === route.params.id);
  return (
    <ScrollView style={GlobalStyle.userscreenStyle}>
      <CertificateForm
        buttonText="Update"
        initialValues={
            cert === undefined
            ? {
                title:"",
                date:new Date(),
                description:"",
                image: null,
                showMedia:true,
              }
            : cert
        }
        onSubmitPress={(
            title,
            date,
            description,
            image,
            showMedia
        ) => {
          updateCertificateList({
            type: "edit_Certificate",
            data: {
              id: cert.id,
              title,
              date,
              description,
              image,
              showMedia
            },
            navigation,
          });
        }}
      />
    </ScrollView>
  );
};

EditCertificateScreen.navigationOptions = ({ navigation, route }) => {
  return {
    headerTitle: "Edit Certificate",
    headerRight: () => (
      <TouchableOpacity
        style={GlobalStyle.headerRightStyle}
        onPress={() =>
          DialogWithTwoButtons(
            "Confirmation",
            "Are you sure you want to delete this certificate?",
            "No",
            () => {},
            "Yes",
            () =>
              updateCertificateList({
                type: "delete_Certificate",
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

export default EditCertificateScreen;
