import React, { useContext } from "react";
import { ScrollView, View, Alert } from "react-native";
import GlobalStyle from "../../assets/css/GlobalStyle";
import FollowingListItem from "../components/ListItems/FollowingListItem";
import MyContext from "../context/MyContext";

const FollowerScreen = () => {
  const { followerList, updateFollowerList } = useContext(MyContext);
  return (
    <View style={GlobalStyle.userscreenStyle}>
      <ScrollView>
        {followerList.map((item, index) => {
          return (
            <FollowingListItem
              name={item.name}
              key={index}
              profilePic={item.userProfilePic}
              status={item.isFollowing ? "Following" : "Follow Back"}
              onStatusPress={() =>
                DialogWithTwoButtons(
                  "Confirmation",
                  "Are you sure you want to unfollow " + item.name + "?",
                  "No",
                  () => {},
                  "Yes",
                  () =>
                    updateFollowerList({
                      type: "delete_follower",
                      id: item.uid,
                    })
                )
              }
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FollowerScreen;
