import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyDatePicker from '../MyDatePicker';
import MyImagePicker from '../MyImagePicker';
import MySwitchButton from '../MySwitchButton';
import SubmitButton from '../SubmitButton';
import TextBox from '../TextBox';

const CertificateForm = ({initialValues={
    title:"",
    date:new Date(),
    description:"",
    image: null,
    showMedia:true,
},buttonText = "Submit",
onSubmitPress}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [titleError, setTitleError] = useState(false);

    const [date, setDate] = useState(initialValues.date);

    const [description, setDescription] = useState(initialValues.description);
    const [descriptionError, setDescriptionError] = useState(false);

    const [image, setImage] = useState(initialValues.image);
    const [showMedia,setShowMedia] = useState(initialValues.showMedia);

    
    const validate=()=>{
        let istitleValid=true,isDescriptionValid=true;
        if(title.trim()===""){
            istitleValid=false;
            setTitleError(true);
        }
        if(description.trim()===""){
            isDescriptionValid=false;
            setDescription(true);
        }
        if(istitleValid&&isDescriptionValid){
            onSubmitPress(title,date,description,image,showMedia);
        }
    }
    return (
        <View>
            <TextBox
                titleText="Certificate Title"
                placeholder="Certificate Title"
                onChange={setTitle}
                value={title}
                errorText="Please enter certificate title"
                setShowError={setTitleError}
                showError={titleError}
            />
            <MyDatePicker
                date={date}
                setDate={setDate}
                titleText="Date"
            />
            <TextBox
                titleText="Description"
                placeholder="Description"
                onChange={setDescription}
                value={description}
                errorText="Please enter description"
                setShowError={setDescriptionError}
                showError={descriptionError}
            />
            <MyImagePicker image={image} setImage={setImage} titleText="Media" />
            <MySwitchButton textOnSwitchOn="Show Media" textOnSwtichOff="Hide Media" switchValue={showMedia} setSwitchValue={setShowMedia}/>
            <SubmitButton buttonText={buttonText} onSubmitPress={validate}/>
        </View>
    )
}

export default CertificateForm;
