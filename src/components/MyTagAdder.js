import React,{useState} from 'react';
import { View,TouchableOpacity,Text } from 'react-native';
import GlobalStyle, { Colors } from '../../assets/css/GlobalStyle';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-gesture-handler';

const MyTagAdder=({errorText="Please enter text to add a tag",tags=[],setTags,placeholder=""})=>{
    const [text, setText] = useState("");
    const [showError,setShowError]= useState(false);

    const onAddPress=()=>{
        if(text.trim()===""){
            setShowError(true);
        }else{
        let found=false;
        tags.forEach((t)=>{
            if(t.toLowerCase()===text.trim().toLowerCase()?true:false){
                found=true;
                return;
            }
        })
            if(!found){
                setTags([text,...tags]);
                setText("");
            }
        }
    }
    const onDeletePress=(tg)=>{
        setTags(tags.filter((tag) => tag.toLowerCase()!== tg.toLowerCase()));
    }
    return(
        <View style={[GlobalStyle.formItem,{marginLeft:35}]}>
            <View style={GlobalStyle.tagAdderTextBox}>
                <TextInput value={text} onChangeText={(tx)=>{setShowError(false);setText(tx);}} style={{maxWidth:130,marginLeft:20,marginRight:10,color:Colors.primaryColor,fontSize:18,}} placeholderTextColor={Colors.subtitleGrayColor} placeholder={placeholder} />
                <TouchableOpacity style={GlobalStyle.tagAdderAddButton} onPress={onAddPress}>
                    <AntDesign name="pluscircle" size={30} color={Colors.primaryColor} />
                </TouchableOpacity>                
            </View>
            {showError?<Text style={[GlobalStyle.errorText,{marginLeft:0}]}>{errorText}</Text>:null}
            {
                tags.map((item,index)=>{
                    return(
                        <View key={index}>
                            <View style={GlobalStyle.tagContainer}>
                                <Text style={GlobalStyle.tagText}>{item}</Text>
                                <TouchableOpacity style={GlobalStyle.tagDeleteButton} onPress={()=>onDeletePress(item)}>
                                    <MaterialIcons name="cancel" size={24} color={Colors.secondaryColor} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                })
            }
        </View>
    );
};

export default MyTagAdder;