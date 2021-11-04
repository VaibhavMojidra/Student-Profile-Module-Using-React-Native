import React,{useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import GlobalStyle, { Colors } from "../../assets/css/GlobalStyle";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import moment from 'moment';

const MyDatePicker = ({date=new Date(),setDate,titleText=""}) => {
  const [showCalender, setShowCalender] = useState(false);
  const onButtonPress=(date)=>{
    setShowCalender(false);
    setDate(date);
  }
  return (
    <View style={GlobalStyle.formItem}>
      {titleText===""?null:<Text style={GlobalStyle.formTitle}>{titleText}</Text>}
      <TouchableOpacity onPress={()=>setShowCalender(true)}>
        <View style={GlobalStyle.calender}>
          <Text style={GlobalStyle.calenderDateText}>{moment(date).format('DD-MM-YYYY')}</Text>
          <EvilIcons
            style={GlobalStyle.calenderDateIcon}
            name="calendar"
            size={30}
            color={Colors.textBlackColor}
          />
        </View>
      </TouchableOpacity>
      {showCalender?<RNDateTimePicker
        value={date}
        mode="date"
        display="calendar"
        maximumDate={new Date()}
        minimumDate={new Date(1950, 0, 1)}
        placeholder="select date"
        format="YYYY-MM-DD"
        onChange={(event,date)=>onButtonPress(date)}
        />:null}
    </View>
  );
};

export default MyDatePicker;
