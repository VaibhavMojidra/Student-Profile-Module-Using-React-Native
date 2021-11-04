import React, { useState } from "react";
import { View } from "react-native";
import GlobalStyle, { ImagesAndIcons } from "../../../assets/css/GlobalStyle";
import TextBox from "../../components/TextBox";
import MyDatePicker from "../../components/MyDatePicker";
import MyImagePicker from "../../components/MyImagePicker";
import SubmitButton from "../SubmitButton";
import MySwitchButton from "../MySwitchButton";

const EducationForm = ({
  initialValues = {
    instituteName: "",
    courseName: "",
    boardName: "",
    startDate: new Date(),
    endDate: new Date(),
    percentGrade: "",
    image: null,
    showGrade: true,
  },
  buttonText = "Submit",
  onSubmitPress,
}) => {
  const [instituteName, setInstituteName] = useState(initialValues.instituteName);
  const [instituteNameError, setInstituteNameError] = useState(false);
  
  const [courseName, setCourseName] = useState(initialValues.courseName);
  const [courseNameError, setCourseNameError] = useState(false);

  const [boardName, setBoardName] = useState(initialValues.boardName);
  const [boardNameError, setBoardNameError] = useState(false);

  const [percentGrade, setPercentGrade] = useState(initialValues.percentGrade);
  const [percentGradeError, setPercentGradeError] = useState(false);

  const [startDate, setStartDate] = useState(initialValues.startDate);
  const [endDate, setEndDate] = useState(initialValues.endDate);
  const [image, setImage] = useState(initialValues.image);
  const [showGrade,setShowGrade] = useState(initialValues.showGrade);


  const validate = () => {
    let isInsituteValid=true,isCourseValid=true,isBoardValid=true,isPercentValid=true,isDatesValid=true;
    if (instituteName.trim() === "") {
        isInsituteValid=false;
        setInstituteNameError(true);
    }
    if (courseName.trim() === "") {
        isCourseValid=false;
        setCourseNameError(true);
    }
    if (boardName.trim() === "") {
        isBoardValid=false;
        setBoardNameError(true);
    }
    if (percentGrade.trim() === "") {
        isPercentValid=false;
        setPercentGradeError(true);
    }
    if(startDate > endDate){
        isDatesValid=false;
        alert('Start Date cannot be greater than end date');
    }
    if(isInsituteValid && isCourseValid && isBoardValid && isDatesValid && isPercentValid){
        onSubmitPress(instituteName.trim(),courseName.trim(),boardName.trim(),startDate,endDate,percentGrade.trim(),showGrade,image);
    }else{
      if(isDatesValid){
        alert("Please fill up all the fields.");
      }
    }
  };
  return (
    <View style={GlobalStyle.userscreenStyle}>
      <TextBox
        value={instituteName}
        onChange={setInstituteName}
        errorText="Please enter institute name"
        showError={instituteNameError}
        setShowError={setInstituteNameError}
        icon={ImagesAndIcons.icon_Facebook}
        placeholder="Institute Name"
        titleText="Institute Name"
      />
      <TextBox
        value={courseName}
        onChange={setCourseName}
        icon={ImagesAndIcons.icon_Facebook}
        errorText="Please enter course name"
        showError={courseNameError}
        setShowError={setCourseNameError}
        placeholder="Course Name"
        titleText="Course Name"
      />
      <TextBox
        value={boardName}
        onChange={setBoardName}
        icon={ImagesAndIcons.icon_Facebook}
        errorText="Please enter board name"
        showError={boardNameError}
        setShowError={setBoardNameError}
        placeholder="Board Name"
        titleText="Board Name"
      />
      <MyDatePicker
        date={startDate}
        setDate={setStartDate}
        titleText="Start Date"
      />
      <MyDatePicker date={endDate} setDate={setEndDate} titleText="End Date" />
      <TextBox
        value={percentGrade}
        onChange={setPercentGrade}
        icon={ImagesAndIcons.icon_Facebook}
        placeholder="Percentage/Grade"
        titleText="Percentage/Grade"
        errorText="Please enter percentage/grade"
        showError={percentGradeError}
        setShowError={setPercentGradeError}
      />
      
      <MySwitchButton textOnSwitchOn="Show Grade" textOnSwtichOff="Hide Grade" switchValue={showGrade} setSwitchValue={setShowGrade} />
      <MyImagePicker image={image} setImage={setImage} titleText="Media" />
      <SubmitButton
        buttonText={buttonText}
        onSubmitPress={() => {
          validate();
        }}
      />
    </View>
  );
};

export default EducationForm;
