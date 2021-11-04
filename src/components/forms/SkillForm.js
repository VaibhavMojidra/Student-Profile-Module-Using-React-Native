import React, { useState } from "react";
import { View } from "react-native";
import SubmitButton from "../SubmitButton";
import TextBox from "../TextBox";

const SkillForm = ({
  initialValues = {
    skill: "",
    skillPercent: "",
  },
  buttonText = "Submit",
  onSubmitPress,
}) => {
  const [skill, setSkill] = useState(initialValues.skill);
  const [skillError, setSkillError] = useState(false);

  const [skillPercent, setSkillPercent] = useState(initialValues.skillPercent);
  const [skillPercentError, setSkillPercentError] = useState({
    errorText: "Please enter percentage of your skill",
    showError: false,
  });

  const validate = () => {
    let isSkillValid = true,
      isSkillPercentValid = true;
    if (skill.trim() === "") {
      isSkillValid = false;
      setSkillError(true);
    }
    if (skillPercent.trim() === "") {
      isSkillPercentValid = false;
      setSkillPercentError({
        errorText: "Please enter percentage of your skill",
        showError: true,
      });
    }
    let per = parseInt(skillPercent.trim());
    if (!(0 <= per && per <= 100)) {
      isSkillPercentValid = false;
      setSkillPercentError({
        errorText: "Please enter valid percentage",
        showError: true,
      });
    }
    if (isSkillValid && isSkillPercentValid) {
      onSubmitPress(skill, skillPercent);
    }
  };

  return (
    <View>
      <TextBox
        value={skill}
        onChange={setSkill}
        setShowError={setSkillError}
        showError={skillError}
        errorText="Please enter skill"
        placeholder="Enter skills"
      />
      <TextBox
        value={skillPercent}
        onChange={setSkillPercent}
        setShowError={setSkillPercentError}
        showError={skillPercentError.showError}
        errorText={skillPercentError.errorText}
        titleText="Percentage"
        placeholder="Enter skill's percentage"
        isNumeric={true}
      />
      <SubmitButton onSubmitPress={() => validate()} buttonText={buttonText} />
    </View>
  );
};

export default SkillForm;
