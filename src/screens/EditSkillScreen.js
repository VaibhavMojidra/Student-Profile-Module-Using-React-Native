import React, { useContext } from "react";
import { Alert, ScrollView, TouchableOpacity } from "react-native";
import MyContext from "../context/MyContext";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import GlobalStyle, { Colors } from "../../assets/css/GlobalStyle";
import SkillForm from "../components/forms/SkillForm";

let updateSkillList = null;

const EditSkillScreen = ({ navigation, route }) => {
  const {skillList } = useContext(MyContext);
  updateSkillList = useContext(MyContext).updateSkillList;
  const skillObj = skillList.find((sk) => sk.id === route.params.id);

  return (
    <ScrollView style={GlobalStyle.userscreenStyle}>
      <SkillForm
        buttonText="Update"
        initialValues={
          skillObj === undefined
            ? {
               skill:"",
               skillPercent:""
              }
            : {skill:skillObj.skill,skillPercent:skillObj.skillPercent.toString()}
        }
        onSubmitPress={(skill,skillPercent) => {
          updateSkillList({
            type: "edit_skill",
            data: {
              id: skillObj.id,
              skill,
              skillPercent:parseInt(skillPercent)
            },
            navigation,
          });
        }}
      />
    </ScrollView>
  );
};

EditSkillScreen.navigationOptions = ({ navigation, route }) => {
  return {
    headerTitle: "Edit Skill",
    headerRight: () => (
      <TouchableOpacity
        style={GlobalStyle.headerRightStyle}
        onPress={() => 
          DialogWithTwoButtons(
            "Confirmation",
            "Are you sure you want to delete this skill?",
            "No",
            () => {},
            "Yes",
            () =>
            updateSkillList({
              type: "delete_skill",
              id: route.params.id,
              navigation,
            })
          )}
      >
        <MaterialIcons name="delete" size={27} color={Colors.secondaryColor} />
      </TouchableOpacity>
    ),
  };
};
export default EditSkillScreen;
