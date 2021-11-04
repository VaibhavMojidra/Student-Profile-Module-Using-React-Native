import React, { useContext, useState, useEffect, useRef } from "react";
import { View, Text, Image, Linking, ScrollView, FlatList, TouchableOpacity } from "react-native";
import EducationListContainer from "../components/TimelineCards/EducationListContainer";
import WorkListContainer from "../components/TimelineCards/WorkListContainer";
import SkillListContainer from "../components/TimelineCards/SkillListContainer";
import ExtraCurricularListContainer from "../components/TimelineCards/ExtraCurricularListContainer";
import GlobalStyle, { ImagesAndIcons } from "../../assets/css/GlobalStyle";
import {
  name,
  userName,
  userBio,
  userWeb,
  posts,
  socials,
} from "../data/UserDetails";
import MyContext from "../context/MyContext";
import EducationTab from "../tabs/EducationTab";
import WorkExpTab from "../tabs/WorkExpTab";
import ExtraCurricularTab from "../tabs/ExtraCurricularTab";
import SkillTab from "../tabs/SkillTab";
import PublicationTab from "../tabs/PublicationTab";
import CertificateTab from "../tabs/CertificateTab";

const UserProfileScreen = ({ navigation }) => {
  const { setTitleText } = useContext(MyContext);
  const { workList, educationList, skillList, extraCurricularList, followingList, followerList } = useContext(MyContext);
  const scrollViewRef = useRef(null);
  const [navigatedFromCard, setNavigatedFromCard] = useState(false);
  let ItemsWidth = 0;

  useEffect(() => {
    tabPress("Timeline");
  }, [])
  const active = {
    isActive: true,
    style: GlobalStyle.tabActiveStyle,
  }
  const inactive = {
    isActive: false,
    style: GlobalStyle.tabInActiveStyle,
  }
  const MyTabsDefault = {
    "Timeline": inactive,
    "Education": inactive,
    "Work": inactive,
    "Extra": inactive,
    "Certificate": inactive,
    "Post": inactive,
    "Publications": inactive,
    "Skills": inactive
  }

  const ScrollToItem = (event, ID) => {
    if (navigatedFromCard) {
      if (ID.isActive) {
        if (ID === MyTabs.Timeline) {
          ItemsWidth = 0;
        }
        scrollViewRef.current.scrollTo({ x: 0 });
        scrollViewRef.current.scrollTo({ x: ItemsWidth });
      }
      ItemsWidth = ItemsWidth + parseInt(event.nativeEvent.layout.width);
    }
  }

  const [MyTabs, setMyTabs] = useState(MyTabsDefault);

  const tabPress = (tab, isNavigatedFromCard) => {
    const MyTabsCopy = MyTabsDefault;
    switch (tab) {
      case 'Timeline':
        MyTabsCopy.Timeline = active;
        break;
      case 'Education':
        MyTabsCopy.Education = active;
        break;
      case 'Work':
        MyTabsCopy.Work = active;
        break;
      case 'Extra':
        MyTabsCopy.Extra = active;
        break;
      case 'Certificate':
        MyTabsCopy.Certificate = active;
        break;
      case 'Post':
        MyTabsCopy.Post = active;
        break;
      case 'Publications':
        MyTabsCopy.Publications = active;
        break;
      case 'Skills':
        MyTabsCopy.Skills = active;
        break;
    }
    setNavigatedFromCard(isNavigatedFromCard);
    setMyTabs(MyTabsCopy);
  }


  navigation.addListener('focus', () => {
    setTitleText(name);
  });

  return (
    <ScrollView style={GlobalStyle.userscreenStyle}>

      {/* Cover Image */}

      <Image source={ImagesAndIcons.cover_pic} style={GlobalStyle.coverImage}></Image>

      {/* Actual Main Container */}

      <View style={GlobalStyle.profileContainer}>

        {/* Profile Image */}
        <Image
          source={ImagesAndIcons.profile_pic}
          style={GlobalStyle.circularImage}
        ></Image>
        <View style={GlobalStyle.profileIntroContainer}>
          <Text style={GlobalStyle.profileUserName}>{userName}</Text>
          {userBio.trim() === "" ? null : <Text style={GlobalStyle.profileBio}>{userBio}</Text>}
          {userWeb.trim() === "" ? null : <Text style={GlobalStyle.profileWeb} onPress={() => Linking.openURL("http://google.com")}>{userWeb}</Text>}
          {/* Posts follwers... */}
          <View style={GlobalStyle.profileUnitContainer}>
            <View>
              <Text style={GlobalStyle.profileUnits}>{posts}</Text>
              <Text style={GlobalStyle.profileLabels}>Posts</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => {
                navigation.navigate('FollowerScreen');
              }}>
                <Text style={GlobalStyle.profileUnits}>{followerList.length}</Text>
                <Text style={GlobalStyle.profileLabels}>Followers</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => {
              navigation.navigate('FollowingScreen');
            }}>
              <Text style={GlobalStyle.profileUnits}>{followingList.length}</Text>
              <Text style={GlobalStyle.profileLabels}>Following</Text>
            </TouchableOpacity>
          </View>
          {
            socials.length === 0 ? null : <FlatList style={GlobalStyle.socialList} showsHorizontalScrollIndicator={false} horizontal data={socials} keyExtractor={(social) => social.name} renderItem={({ item }) => {
              return (
                <Image style={GlobalStyle.socialItemImage} source={item.icon} />
              );
            }} />
          }
          {/* Badges */}
          {/* {
              badges.length===0?null:
            
              <FlatList style={GlobalStyle.badgesList} showsHorizontalScrollIndicator={false} data={badges} horizontal keyExtractor={(badge)=>badge.name} renderItem={({item})=>{
                return(<View>
                  <Image style={GlobalStyle.badgeItemImage}source={item.icon}/>
                  <Text style={GlobalStyle.badgeItemName}>{item.name}</Text>
                  </View>
                );
              }}/>
            } */}

          <ScrollView horizontal showsHorizontalScrollIndicator={false} ref={scrollViewRef} style={{ marginHorizontal: 20 }}>
            <TouchableOpacity onPress={() => tabPress("Timeline", false)} onLayout={(event) => ScrollToItem(event, MyTabs.Timeline)} ><Text style={MyTabs.Timeline.style}>Timeline</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => tabPress("Education", false)} onLayout={(event) => ScrollToItem(event, MyTabs.Education)} ><Text style={MyTabs.Education.style}>Education</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => tabPress("Work", false)} onLayout={(event) => ScrollToItem(event, MyTabs.Work)} ><Text style={MyTabs.Work.style}>Work Experience</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => tabPress("Extra", false)} onLayout={(event) => ScrollToItem(event, MyTabs.Extra)} ><Text style={MyTabs.Extra.style}>Extra Curricular</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => tabPress("Certificate", false)} onLayout={(event) => ScrollToItem(event, MyTabs.Certificate)}  ><Text style={MyTabs.Certificate.style}>Certifcates</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => tabPress("Post", false)} onLayout={(event) => ScrollToItem(event, MyTabs.Post)} ><Text style={MyTabs.Post.style}>Posts</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => tabPress("Publications", false)} onLayout={(event) => ScrollToItem(event, MyTabs.Publications)} ><Text style={MyTabs.Publications.style}>Publications</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => tabPress("Skills", false)} onLayout={(event) => ScrollToItem(event, MyTabs.Skills)} ><Text style={MyTabs.Skills.style}>Skills</Text></TouchableOpacity>
          </ScrollView>
          {MyTabs.Education.isActive ? <EducationTab isEditable={true} navigation={navigation} /> : null}
          {MyTabs.Work.isActive ? <WorkExpTab isEditable={true} navigation={navigation} /> : null}
          {MyTabs.Extra.isActive ? <ExtraCurricularTab isEditable={true} navigation={navigation} /> : null}
          {MyTabs.Skills.isActive ? <SkillTab isEditable={true} navigation={navigation} /> : null}
          {MyTabs.Publications.isActive ? <PublicationTab isEditable={true} navigation={navigation} /> : null}
          {MyTabs.Certificate.isActive ? <CertificateTab isEditable={true} navigation={navigation} /> : null}

          {MyTabs.Timeline.isActive ? <View>
            {educationList.length === 0 ? null : <TouchableOpacity activeOpacity={0.9} onPress={() => tabPress("Education", true)}><EducationListContainer educationList={educationList} /></TouchableOpacity>}
            {skillList.length === 0 ? null : <TouchableOpacity activeOpacity={0.9} onPress={() => tabPress("Skills", true)}><SkillListContainer skillList={skillList} /></TouchableOpacity>}
            {workList.length === 0 ? null : <TouchableOpacity activeOpacity={0.9} onPress={() => tabPress("Work", true)}><WorkListContainer workList={workList} /></TouchableOpacity>}
            {extraCurricularList.length === 0 ? null : <TouchableOpacity activeOpacity={0.9} onPress={() => tabPress("Extra", true)}><ExtraCurricularListContainer extraCurricularList={extraCurricularList} /></TouchableOpacity>}
          </View> : null}
        </View>

      </View>
    </ScrollView>
  );
};

export default UserProfileScreen;
