import React, { useState } from "react";
import { View } from "react-native";
import { ImagesAndIcons } from "../../../assets/css/GlobalStyle";
import MyDatePicker from "../MyDatePicker";
import MyImagePicker from "../MyImagePicker";
import MySwitchButton from "../MySwitchButton";
import SubmitButton from "../SubmitButton";
import TextBox from "../TextBox";

const ExtraCurricularForm = ({
  initialValues = {
    title: "",
    description:"",
    startDate: new Date(),
    endDate: new Date(),
    image:null,
    showMedia:true,
  },
  buttonText = "Submit",
  onSubmitPress
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [titleError, setTitleError] = useState(false);

  const [description, setDescription] = useState(initialValues.description);
  const [descriptionError, setDescriptionError] = useState(false);

  const [startDate, setStartDate] = useState(initialValues.startDate);
  const [endDate, setEndDate] = useState(initialValues.endDate);

  const [image, setImage] = useState(initialValues.image);
  const [showMedia,setShowMedia] = useState(initialValues.showMedia);

  const validate = () => {
      let isTitleValid=true,isDescValid=true,isDatesValid=true;
      if(title.trim()===""){
        isTitleValid=false;
        setTitleError(true);
      }
      if(description.trim()===""){
        isDescValid=false;
        setDescriptionError(true);
      }
      if(startDate > endDate){
        isDatesValid=false;
        alert('Start Date cannot be greater than end date');
      }
      if(isTitleValid && isDescValid && isDatesValid){
          onSubmitPress(title.trim(),startDate,endDate,description.trim(),image,showMedia);
      }else{
        if(isDatesValid){
            alert("Please fill up all the fields.");
        }
      }
  }

  return (
    <View>
      <TextBox
        value={title}
        onChange={setTitle}
        errorText="Please enter extra curricular title"
        showError={titleError}
        setShowError={setTitleError}
        icon={ImagesAndIcons.icon_Facebook}
        placeholder="Extra Curricular Title"
        titleText="Extra Curricular Title"
      />
      <MyDatePicker
        date={startDate}
        setDate={setStartDate}
        titleText="Start Date"
      />
      <MyDatePicker date={endDate} setDate={setEndDate} titleText="End Date" />
      <TextBox
        value={description}
        onChange={setDescription}
        errorText="Please enter description"
        showError={descriptionError}
        setShowError={setDescriptionError}
        icon={ImagesAndIcons.icon_Facebook}
        placeholder="Description"
        titleText="Description"
      />
      <MyImagePicker image={image} setImage={setImage} titleText="Media" />
      <MySwitchButton textOnSwitchOn="Show Media" textOnSwtichOff="Hide Media" switchValue={showMedia} setSwitchValue={setShowMedia}/>
      <SubmitButton buttonText={buttonText} onSubmitPress={()=>{
          validate();
      }}/>
    </View>
  );
};

export default ExtraCurricularForm;
