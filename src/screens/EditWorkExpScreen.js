import React, { useContext } from "react";
import { Alert, ScrollView, TouchableOpacity } from "react-native";
import WorkExpForm from "../components/forms/WorkExpForm";
import MyContext from "../context/MyContext";
import  MaterialIcons from "react-native-vector-icons/MaterialIcons";
import GlobalStyle, { Colors } from "../../assets/css/GlobalStyle";

let updateWorkList = null;
const EditWorkExpScreen = ({ navigation, route }) => {
  const { workList } = useContext(MyContext);
  updateWorkList = useContext(MyContext).updateWorkList;
  const work = workList.find((wk) => wk.id === route.params.id);
  return (
    <ScrollView style={GlobalStyle.userscreenStyle}>
      <WorkExpForm
        buttonText="Update"
        initialValues={
          work === undefined
            ? {
                workTitle: "",
                company: "",
                employeeType: "",
                startDate: new Date(),
                isCurrent: false,
                endDate: new Date(),
                image: null,
                showMedia: true,
              }
            : {
                workTitle: work.workTitle,
                company: work.company,
                employeeType: work.employeeType,
                startDate: work.startDate,
                isCurrent: work.isCurrent,
                endDate: work.endDate,
                image: work.image,
                showMedia: work.showMedia,
              }
        }
        onSubmitPress={(
          workTitle,
          company,
          employeeType,
          startDate,
          isCurrent,
          endDate,
          image,
          showMedia
        ) => {
          updateWorkList({
            type: "edit_work",
            data: {
              id: work.id,
              workTitle,
              company,
              employeeType,
              startDate,
              isCurrent,
              endDate,
              image,
              showMedia,
            },
            navigation,
          });
        }}
      />
    </ScrollView>
  );
};

EditWorkExpScreen.navigationOptions = ({ navigation, route }) => {
  return {
    headerTitle: "Edit Work Experience",
    headerRight: () => (
      <TouchableOpacity
        style={GlobalStyle.headerRightStyle}
        onPress={() =>
          DialogWithTwoButtons(
            "Confirmation",
            "Are you sure you want to delete this work experience?",
            "No",
            () => {},
            "Yes",
            () =>
              updateWorkList({
                type: "delete_work",
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
export default EditWorkExpScreen;
