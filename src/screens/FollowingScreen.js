import React,{useContext} from "react";
import { ScrollView,View,Alert } from "react-native";
import GlobalStyle from "../../assets/css/GlobalStyle";
import FollowingListItem from "../components/ListItems/FollowingListItem";
import MyContext from "../context/MyContext";

const FollowingScreen = () => {
    const {followingList,updateFollowingList} = useContext(MyContext)
  return (
    <View style={GlobalStyle.userscreenStyle}>
      <ScrollView>
          {followingList.map((item, index) => {
              return(<FollowingListItem name={item.name} key={index} profilePic={item.userProfilePic} status={item.isFollowing?"Following":"Follow"} onStatusPress={()=>{
                DialogWithTwoButtons(
                  "Confirmation",
                  "Are you sure you want to unfollow "+item.name+"?",
                  "No",
                  () => {},
                  "Yes",
                  () =>
                  updateFollowingList({type:'delete_following',id:item.uid}))
              }}/>);
          })}
      </ScrollView>
    </View>
  );
};

export default FollowingScreen;
