import React, { useContext } from "react";
import EducationForm from "../components/forms/EducationForm";
import { ScrollView, TouchableOpacity, Alert } from "react-native";
import MyContext from "../context/MyContext";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import GlobalStyle, { Colors } from "../../assets/css/GlobalStyle";
import DialogWithTwoButtons from "../dialogs/DialogWithTwoButtons";

let updateEducationList = null;

const EditEducationScreen = ({ navigation, route }) => {
  const { educationList } = useContext(MyContext);
  updateEducationList = useContext(MyContext).updateEducationList;
  const education = educationList.find((ed) => ed.id === route.params.id);

  return (
    <ScrollView style={GlobalStyle.userscreenStyle}>
      <EducationForm
        buttonText="Update"
        initialValues={
          education === undefined
            ? {
                instituteName: "",
                courseName: "",
                boardName: "",
                startDate: new Date(),
                endDate: new Date(),
                percentGrade: "",
                image: null,
                showGrade: true,
              }
            : {
                instituteName: education.instituteName,
                courseName: education.courseName,
                boardName: education.boardName,
                startDate: education.startDate,
                endDate: education.endDate,
                percentGrade: education.percentGrade,
                image: education.image,
                showGrade: education.showGrade,
              }
        }
        onSubmitPress={(
          instituteName,
          courseName,
          boardName,
          startDate,
          endDate,
          percentGrade,
          showGrade,
          image
        ) => {
          updateEducationList({
            type: "edit_education",
            data: {
              id: education.id,
              instituteName,
              courseName,
              boardName,
              startDate,
              endDate,
              percentGrade,
              showGrade,
              image,
            },
            navigation,
          });
        }}
      />
    </ScrollView>
  );
};

EditEducationScreen.navigationOptions = ({ navigation, route }) => {
  return {
    headerTitle: "Edit Education",
    headerRight: () => (
      <TouchableOpacity
        style={GlobalStyle.headerRightStyle}
        onPress={() =>
          DialogWithTwoButtons(
            "Confirmation",
            "Are you sure you want to delete this education?",
            "No",
            () => {},
            "Yes",
            () => 
              updateEducationList({
                type: "delete_education",
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

export default EditEducationScreen;
