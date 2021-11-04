import React from "react";
import GlobalStyle ,{Colors} from "../../assets/css/GlobalStyle";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddButton from "../components/AddButton";
import HomeScreen from '../screens/HomeScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 

const Tab = createBottomTabNavigator();


const StartScreen = ({navigation}) => {
  return (
      <Tab.Navigator
        tabBarOptions={{
          style: GlobalStyle.tabNavigatorStyle,
          showLabel: false,
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                color={Colors.secondaryColor}
                name="home-outline"
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={HomeScreen}
          options={{ tabBarIcon: () => <AddButton /> }}
        />
        <Tab.Screen
          name="UserProfileScreen"
          component={UserProfileScreen}
          options={{
            tabBarIcon: () => (
              <AntDesign name="user" size={30} color={Colors.secondaryColor} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default StartScreen;
