import React,{useContext} from 'react';
import { View ,TouchableOpacity} from 'react-native';
import GlobalStyle from '../../assets/css/GlobalStyle';
import AddNewCardButton from '../components/AddNewCardButton';
import ExtraCurricularCard from '../components/Cards/ExtraCurricularCard';
import MyContext from '../context/MyContext';


const ExtraCurricularTab=({isEditable,navigation})=>{
    const { extraCurricularList } = useContext(MyContext);
    return(
        <View style={GlobalStyle.userscreenStyle}>
            {isEditable?<AddNewCardButton onAddPress={()=>{navigation.navigate('AddExtraCurricularScreen')}} buttonText="Add Extra Curricular"/>:null}
            {extraCurricularList.map((item, index) => {
                return (
                    <TouchableOpacity key={index} onPress={()=>{
                      if(isEditable){
                        navigation.navigate("EditExtraCurricularScreen",{id:item.id});
                      }
                     }}activeOpacity={0.9}>
                       <ExtraCurricularCard item={item}/>
                     </TouchableOpacity>
                  );
            })}
        </View>
    );
};

export default ExtraCurricularTab;