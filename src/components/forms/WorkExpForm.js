import React, { useState } from "react";
import { View } from "react-native";
import TextBox from "../../components/TextBox";
import MyDatePicker from "../../components/MyDatePicker";
import MyImagePicker from "../../components/MyImagePicker";
import GlobalStyle, { ImagesAndIcons } from "../../../assets/css/GlobalStyle";
import MyCheckBox from "../MyCheckBox";
import MySwitchButton from "../MySwitchButton";
import SubmitButton from "../SubmitButton";

const WorkExpForm = ({
  initialValues = {
    workTitle: "",
    company:"",
    employeeType:"",
    startDate: new Date(),
    isCurrent:false,
    endDate: new Date(),
    image: null,
    showMedia:true,
  },
  buttonText = "Submit",
  onSubmitPress,
}) => {
  const [workTitle, setWorkTitle] = useState(initialValues.workTitle);
  const [workTitleError, setWorkTitleError] = useState(false);

  const [company, setCompany] = useState(initialValues.company);
  const [companyError, setCompanyError] = useState(false);

  const [employeeType, setEmployeeType] = useState(initialValues.employeeType);
  const [employeeTypeError, setEmployeeTypeError] = useState(false);

  const [startDate, setStartDate] = useState(initialValues.startDate);
  const [isCurrent, setIsCurrent] = useState(initialValues.isCurrent);
  const [endDate, setEndDate] = useState(initialValues.endDate);

  const [image, setImage] = useState(initialValues.image);
  const [showMedia,setShowMedia] = useState(initialValues.showMedia);

  const validate = () => {
      let isWorkTitleValid=true,isCompanyValid=true,isEmployeeTypeValid=true,isDatesValid=true;
      if(workTitle.trim()===""){
        setWorkTitleError(true);
        isWorkTitleValid=false;
      }
      if(company.trim()===""){
        setCompanyError(true);
        isCompanyValid=false;
      }
      if(employeeType.trim()===""){
        setEmployeeTypeError(true);
        isEmployeeTypeValid=false;
      }
      if(startDate > endDate){
        isDatesValid=false;
        alert('Start Date cannot be greater than end date');
      }
      if(isWorkTitleValid && isCompanyValid && isEmployeeTypeValid && isDatesValid){
        onSubmitPress(workTitle.trim(),company.trim(),employeeType.trim(),startDate,isCurrent,endDate,image,showMedia);
      }else{
        if(isDatesValid){
            alert("Please fill up all the fields.");
        }
      }
  }
  
  return (
    <View style={GlobalStyle.userscreenStyle}>
      <TextBox
        value={workTitle}
        onChange={setWorkTitle}
        errorText="Please enter work title"
        showError={workTitleError}
        setShowError={setWorkTitleError}
        icon={ImagesAndIcons.icon_Facebook}
        placeholder="Work Title"
        titleText="Work Title"
      />
      <TextBox
        value={company}
        onChange={setCompany}
        errorText="Please enter company name"
        showError={companyError}
        setShowError={setCompanyError}
        icon={ImagesAndIcons.icon_Facebook}
        placeholder="Company"
        titleText="Company"
      />
      <TextBox
        value={employeeType}
        onChange={setEmployeeType}
        errorText="Please enter employee"
        showError={employeeTypeError}
        setShowError={setEmployeeTypeError}
        icon={ImagesAndIcons.icon_Facebook}
        placeholder="Employee Type"
        titleText="Employee Type"
      />
      <MyDatePicker
        date={startDate}
        setDate={setStartDate}
        titleText="Start Date"
      />
      <MyCheckBox setCheck={setIsCurrent} check={isCurrent} titleText="Currently Working"/>
      {isCurrent?null:<MyDatePicker date={endDate} setDate={setEndDate} titleText="End Date" />}
      <MyImagePicker image={image} setImage={setImage} titleText="Media" />
      <MySwitchButton textOnSwitchOn="Show Media" textOnSwtichOff="Hide Media" switchValue={showMedia} setSwitchValue={setShowMedia}/>
      <SubmitButton
        buttonText={buttonText}
        onSubmitPress={() => {
          validate();
        }}
      />
    </View>
  );
};

export default WorkExpForm;
