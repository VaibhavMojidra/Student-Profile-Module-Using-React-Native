import React, { useContext } from "react";
import { Alert, ScrollView, TouchableOpacity } from "react-native";
import MyContext from "../context/MyContext";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import GlobalStyle, { Colors } from "../../assets/css/GlobalStyle";
import ExtraCurricularForm from "../components/forms/ExtraCurricularForm";

let updateExtraCurricularList = null;

const EditExtraCurricularScreen = ({ navigation, route }) => {
  const { extraCurricularList } = useContext(MyContext);
  updateExtraCurricularList = useContext(MyContext).updateExtraCurricularList;
  const ext = extraCurricularList.find((ex) => ex.id === route.params.id);

  return (
    <ScrollView style={GlobalStyle.userscreenStyle}>
      <ExtraCurricularForm
        buttonText="Update"
        initialValues={
          ext === undefined
            ? {
                title: "",
                description: "",
                startDate: new Date(),
                endDate: new Date(),
                image: null,
                showMedia: true,
              }
            : ext
        }
        onSubmitPress={(
          title,
          startDate,
          endDate,
          description,
          image,
          showMedia
        ) => {
          updateExtraCurricularList({
            type: "edit_extraCurricular",
            data: {
              id: ext.id,
              title,
              startDate,
              endDate,
              description,
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

EditExtraCurricularScreen.navigationOptions = ({ navigation, route }) => {
  return {
    headerTitle: "Edit Extra Curricular",
    headerRight: () => (
      <TouchableOpacity
        style={GlobalStyle.headerRightStyle}
        onPress={() =>
          DialogWithTwoButtons(
            "Confirmation",
            "Are you sure you want to delete this extra curricular?",
            "No",
            () => {},
            "Yes",
            () =>
              updateExtraCurricularList({
                type: "delete_extraCurricular",
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
export default EditExtraCurricularScreen;
