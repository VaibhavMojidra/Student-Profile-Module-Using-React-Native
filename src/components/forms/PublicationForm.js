import React, { useState } from "react";
import { View } from "react-native";
import { ImagesAndIcons } from "../../../assets/css/GlobalStyle";
import MyDatePicker from "../MyDatePicker";
import MyImagePicker from "../MyImagePicker";
import MySwitchButton from "../MySwitchButton";
import MyTagAdder from "../MyTagAdder";
import SubmitButton from "../SubmitButton";
import TextBox from "../TextBox";

const PublicationForm=({
    initialValues={
        title:"",
        publisher:"",
        publicationDate:new Date(),
        authors:[],
        description:"",
        image: null,
        showMedia:true,
    },
    buttonText = "Submit",
    onSubmitPress,
}
)=> {
    const [title, setTitle] = useState(initialValues.title);
    const [titleError, setTitleError] = useState(false);

    const [publisher, setPublisher] = useState(initialValues.publisher);
    const [publisherError, setPublisherError] = useState(false);

    const [authors,setAuthors]= useState(initialValues.authors);

    const [publicationDate, setPublicationDate] = useState(initialValues.publicationDate);

    const [description, setDescription] = useState(initialValues.description);
    const [descriptionError, setDescriptionError] = useState(false);

    const [image, setImage] = useState(initialValues.image);
    const [showMedia,setShowMedia] = useState(initialValues.showMedia);
    
    const validate = () => {
        let isTitleValid=true,isPublisherValid=true,isDescriptionValid=true;
        if(title.trim()===""){
            isTitleValid=false;
            setTitleError(true);
        }
        if(publisher.trim()===""){
            isPublisherValid=false;
            setPublisherError(true);
        }
        if(description.trim()===""){
            isDescriptionValid=false;
            setDescriptionError(true);
        }
        if(isTitleValid&&isPublisherValid&&isDescriptionValid){
            onSubmitPress(title,publisher,publicationDate,authors,description,image,showMedia);
        }else{
            alert("Please fill up all the fields.");
        }
    }
    return (
        <View>
            <TextBox
                titleText="Publication Title"
                icon={ImagesAndIcons.icon_Facebook}
                placeholder="Publication Title"
                errorText="Please enter publication title"
                onChange={setTitle}
                showError={titleError}
                setShowError={setTitleError}
                value={title}
            />
            <TextBox
                value={publisher}
                titleText="Publication/Publisher"
                errorText="Please enter publication/publisher"
                icon={ImagesAndIcons.icon_Facebook}
                placeholder="Publication/Publisher"
                onChange={setPublisher}
                showError={publisherError}
                setShowError={setPublisherError}
            />
            <MyDatePicker
                date={publicationDate}
                setDate={setPublicationDate}
                titleText="Publication Date"
            />
            <MyTagAdder
            tags={authors}
            setTags={setAuthors}
            errorText="Please enter author name to add an author"
            placeholder="AUTHOR"
            />
            <TextBox
                value={description}
                titleText="Description"
                icon={ImagesAndIcons.icon_Facebook}
                placeholder="Description"
                errorText="Please enter description"
                onChange={setDescription}
                showError={descriptionError}
                setShowError={setDescriptionError}
            />
            <MyImagePicker image={image} setImage={setImage} titleText="Media" />
            <MySwitchButton textOnSwitchOn="Show Media" textOnSwtichOff="Hide Media" switchValue={showMedia} setSwitchValue={setShowMedia}/>
            <SubmitButton buttonText={buttonText} onSubmitPress={() => {validate();}}
      />
        </View>
    )
}
export default PublicationForm;