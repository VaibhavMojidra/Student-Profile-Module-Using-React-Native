import React,{useContext} from "react";
import { createStackNavigator } from '@react-navigation/stack';
import GlobalStyle, { Colors } from "../../assets/css/GlobalStyle";
import MyContext from "../context/MyContext";
import AddEducationScreen from "../screens/AddEducationScreen";
import StartScreen from "../screens/StartScreen";
import EditEducationScreen from "../screens/EditEducationScreen";
import AddWorkExpScreen from "../screens/AddWorkExpScreen";
import EditWorkExpScreen from "../screens/EditWorkExpScreen";
import AddExtraCurricularScreen from "../screens/AddExtraCurricularScreen";
import EditExtraCurricularScreen from "../screens/EditExtraCurricularScreen";
import FollowingScreen from "../screens/FollowingScreen";
import FollowerScreen from "../screens/FollowerScreen";
import AddSkillScreen from "../screens/AddSkillScreen";
import EditSkillScreen from "../screens/EditSkillScreen";
import AddPublicationScreen from "../screens/AddPublicationScreen";
import EditPublicationScreen from "../screens/EditPublicationScreen";
import AddCertificateScreen from "../screens/AddCertificateScreen";
import EditCertificateScreen from "../screens/EditCertificateScreen";

const Stack = createStackNavigator();
const MyStack = () => {
  const {titleText} = useContext(MyContext);
  return (
    <Stack.Navigator initialRouteName="StartScreen"  screenOptions={{
        headerStyle: GlobalStyle.headerStyle,
        headerTitleStyle: GlobalStyle.headerTitleStyle,
        headerTintColor: Colors.secondaryColor,
        headerTitleAlign:'center'
      }}>
      <Stack.Screen name="StartScreen"  component={StartScreen} options={
        {
          headerTitle: titleText,
        }
      }/>

    <Stack.Screen name="AddEducationScreen"  component={AddEducationScreen} options={
        {
          headerTitle: "Create Education",
        }
      }/>
    <Stack.Screen name="EditEducationScreen"  component={EditEducationScreen} options={EditEducationScreen.navigationOptions}/>
    <Stack.Screen name="AddWorkExpScreen"  component={AddWorkExpScreen} options={
        {
          headerTitle: "Create Work Experience",
        }
      }/>
    <Stack.Screen name="EditWorkExpScreen"  component={EditWorkExpScreen} options={EditWorkExpScreen.navigationOptions}/>
    <Stack.Screen name="AddExtraCurricularScreen"  component={AddExtraCurricularScreen} options={
        {
          headerTitle: "Create Extra Curricular",
        }
      }/>
    <Stack.Screen name="EditExtraCurricularScreen"  component={EditExtraCurricularScreen} options={EditExtraCurricularScreen.navigationOptions}/>
    <Stack.Screen name="AddSkillScreen"  component={AddSkillScreen} options={
        {
          headerTitle: "Create Skills",
        }
      }/>
    <Stack.Screen name="EditSkillScreen"  component={EditSkillScreen} options={EditSkillScreen.navigationOptions}/>
    <Stack.Screen name="AddPublicationScreen"  component={AddPublicationScreen} options={
        {
          headerTitle: "Create Publication",
        }
      }/>
    <Stack.Screen name="EditPublicationScreen"  component={EditPublicationScreen} options={EditPublicationScreen.navigationOptions}/>
    
    <Stack.Screen name="AddCertificateScreen"  component={AddCertificateScreen} options={
        {
          headerTitle: "Create Certificate",
        }
    }/>
    <Stack.Screen name="EditCertificateScreen"  component={EditCertificateScreen} options={EditCertificateScreen.navigationOptions}/>
    
    <Stack.Screen name="FollowingScreen"  component={FollowingScreen} options={
        {
          headerTitle: "Following",
        }
      }/>
      <Stack.Screen name="FollowerScreen"  component={FollowerScreen} options={
        {
          headerTitle: "Followers",
        }
      }/>
    </Stack.Navigator>
    
  );
};

export default MyStack;