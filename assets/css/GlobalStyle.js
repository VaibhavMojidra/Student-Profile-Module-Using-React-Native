import { StyleSheet, Dimensions } from "react-native";

export const Colors = {
  subtitleGrayColor: "#7C7E7D",
  primaryColor: "#1e88e5", //#000000
  secondaryColor: "#FFFFFF", // #232D36
  redColor: "#f4511e",
  greenColor: "#43a047",
  textBlackColor: "#000000", //#FDFDFD
  headerTextColor: "#FDFDFD", // #FDFDFD
  userName: "#1e88e5", //#FDFDFD
  website: "#0C5794", //#FDFDFD
  whiteColor: "#FFFFFF",
  // subtitleGrayColor: "#7C7E7D",
  // primaryColor: "#000000",
  // secondaryColor: "#232D36",
  // redColor:'#f4511e',
  // greenColor:'#43a047',
  // textBlackColor:"#FDFDFD",
  // headerTextColor:"#FDFDFD",
  // userName:"#FDFDFD",
  // website:"#FDFDFD",
};

export const getSkillColor = (value) => {
  let color = "#000000";
  if (0 < value && value < 20) {
    color = "#e53935";
  }
  if (20 < value && value <= 40) {
    color = "#039be5";
  }
  if (40 < value && value <= 60) {
    color = "#2e7d32";
  }
  if (60 < value && value <= 80) {
    color = "#4527a0";
  }
  if (80 < value && value <= 100) {
    color = "#fdd835";
  }
  return color;
};

export const ImagesAndIcons = {
  icon_Instagram: require("./../img/icon/icon_instagram.png"),
  icon_Facebook: require("./../img/icon/icon_facebook.png"),
  icon_Youtube: require("./../img/icon/icon_youtube.png"),
  icon_Twitter: require("./../img/icon/icon_twitter.png"),
  icon_Git: require("./../img/icon/icon_git.png"),
  icon_Un: require("./../img/icon/icon_un.png"),
  icon_Education: require("./../img/icon/icon_education.png"),
  profile_pic: require("./../img/images/profile_pic.png"),
  cover_pic: require("./../img/images/cover_img.jpg"),
  img_icon: require("./../img/images/img.jpg"),
};

export default StyleSheet.create({
  //Common
  tabNavigatorStyle: {
    backgroundColor: Colors.primaryColor,
    height: 50,
  },
  headerStyle: {
    backgroundColor: Colors.primaryColor,
    elevation: 0,
  },
  headerTitleStyle: {
    color: Colors.headerTextColor,
    alignSelf: "center",
  },
  cardContainer: {
    width: "90%",
    marginHorizontal: "5%",
    marginTop: 10,
    marginBottom: 5,
    height: "auto",
    padding: 10,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: "#bbb",
    shadowColor: "#333",
    shadowOffset: { width: -1, height: -1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: Colors.secondaryColor,
  },
  cardTitle: {
    paddingLeft: 10,
    fontWeight: "bold",
    color: Colors.textBlackColor,
    fontSize: 22,
    paddingBottom: 10,
  },
  userscreenStyle: {
    //Whole User Profile Screen
    flex: 1,
    backgroundColor: Colors.secondaryColor,
  },
  tabsAddButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    marginTop: 10,
    backgroundColor: Colors.primaryColor,
    marginHorizontal: 20,
    height: 35,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  tabsAddButtonText: {
    color: Colors.secondaryColor,
    textAlign: "center",
    textAlignVertical: "center",
    height: 35,
    fontSize: 16,
  },
  submitButton: {
    borderRadius: 100,
    width: 150,
    marginTop: 20,
    backgroundColor: Colors.primaryColor,
    height: 35,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 30,
  },
  submitButtonText: {
    color: Colors.secondaryColor,
    textAlign: "center",
    textAlignVertical: "center",
    height: 35,
    fontSize: 18,
    fontWeight: "700",
  },
  switchContainer: {
    flexDirection: "row",
  },
  switchButton: {
    alignSelf: "flex-start",
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
    marginLeft: 10,
  },
  switchText: {
    marginRight: 0,
  },
  formTitle: {
    marginHorizontal: 35,
    fontWeight: "bold",
    color: Colors.textBlackColor,
    fontSize: 18,
    marginBottom: 5,
  },
  formItem: {
    marginTop: 20,
  },
  textBoxTextInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    color: Colors.textBlackColor,
  },
  textBoxTextIcon: {
    marginLeft: 5,
  },
  textBox: {
    height: 43,
    marginHorizontal: 35,
    flexDirection: "row",
    paddingHorizontal: 5,
    borderRadius: 6,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    marginHorizontal: 35,
    color: Colors.redColor,
    fontSize: 13,
  },
  textBoxFocus: {
    borderColor: Colors.primaryColor,
    borderWidth: 1.5,
  },
  textBoxBlur: {
    borderColor: Colors.subtitleGrayColor,
    borderWidth: 1,
  },
  calender: {
    height: 43,
    marginHorizontal: 35,
    width: 160,
    flexDirection: "row",
    padding: 5,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    borderColor: Colors.subtitleGrayColor,
    borderWidth: 1,
  },
  calenderDateText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    color: Colors.textBlackColor,
  },
  imageUploadDeleteTouchOpacity: {
    flex: 1,
    backgroundColor: "#000000AA",
    alignItems: "center",
    justifyContent: "center",
  },
  image_ImageBackgroud: {
    height: 120,
    width: 180,
    flexDirection: "row",
    marginHorizontal: 35,
  },
  listItemProfilePic: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  listItemName: {
    marginLeft: 10,
    fontSize: 20,
  },
  listItemStatus: {
    fontSize: 20,
    alignSelf: "flex-end",
    color: Colors.primaryColor,
    marginRight: 10,
  },
  headerRightStyle: {
    marginRight: 15,
  },
  /*  UserProfileScreen  */
  coverImage: {
    //Cover Image
    width: "100%",
    height: 135,
    position: "absolute",
  },
  profileContainer: {
    //Container Below The Cover Image
    flex: 1,
    marginTop: 120,
    backgroundColor: Colors.secondaryColor,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  circularImage: {
    //Circular Image Profile
    height: 100,
    width: 100,
    top: -35,
    alignSelf: "flex-start",
    marginLeft: 30,
    borderColor: Colors.secondaryColor,
    borderWidth: 3,
    borderRadius: 100,
    marginBottom: 15,
  },
  profileIntroContainer: {
    //ScrollView
    flex: 1,
    top: -45,
    marginBottom: -45,
    width: "100%",
  },

  profileUserName: {
    color: Colors.userName,
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
  },
  profileBio: {
    color: Colors.subtitleGrayColor,
    width: "80%",
    justifyContent: "center",
    marginTop: 5,
    alignSelf: "center",
    textAlign: "center",
  },
  profileWeb: {
    color: Colors.website,
    width: "80%",
    justifyContent: "center",
    marginTop: 5,
    alignSelf: "center",
    textAlign: "center",
  },
  profileUnitContainer: {
    width: 350,
    alignSelf: "center",
    marginTop: 13,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  profileUnits: {
    fontSize: 25,
    color: Colors.textBlackColor,
    alignSelf: "center",
  },
  profileSocialsContainer: {
    width: 300,
    alignSelf: "center",
    marginTop: 13,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  circularSocialImage: {
    height: 35,
    width: 35,
    alignSelf: "center",
    borderRadius: 100,
  },
  profileEditButton: {
    borderRadius: 8,
    width: 130,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    marginTop: 15,
    fontSize: 18,
    padding: 8,
    backgroundColor: "#C9151E",
    color: Colors.secondaryColor,
  },
  profileLabels: {
    fontSize: 13,
    color: Colors.subtitleGrayColor,
    alignSelf: "center",
  },
  badgesList: {
    marginTop: 10,
    marginHorizontal: "10%",
  },
  badgeItemImage: {
    width: 60,
    height: 60,
    margin: 10,
  },
  badgeItemName: {
    fontSize: 10,
    alignSelf: "center",
  },
  socialList: {
    marginTop: 10,
    marginHorizontal: "10%",
    alignSelf: "center",
  },
  socialItemImage: {
    width: 40,
    height: 40,
    margin: 10,
  },
  educationItemContainer: {
    flexDirection: "row",
  },
  educationItemIcon: {
    alignSelf: "center",
    margin: 10,
    height: 40,
    width: 40,
  },
  educationItemText: {
    alignSelf: "center",
    fontSize: 15,
    paddingRight: 80,
    color: Colors.primaryColor,
    fontWeight: "bold",
  },
  workItemText: {
    marginRight: 20,
    marginTop: 12,
    fontSize: 15,
    paddingLeft: 10,
    color: Colors.primaryColor,
    fontWeight: "bold",
  },
  extraCItemText: {
    marginRight: 20,
    marginTop: 12,
    fontSize: 15,
    paddingLeft: 10,
    color: Colors.primaryColor,
    fontWeight: "bold",
  },
  skillItemText: {
    marginRight: 20,
    marginTop: 12,
    fontSize: 15,
    paddingLeft: 10,
    color: Colors.primaryColor,
    fontWeight: "bold",
  },
  skillPool: {
    borderRadius: 3,
    height: 20,
    marginLeft: 10,
    marginTop: 5,
  },
  tabActiveStyle: {
    padding: 10,
    color: Colors.primaryColor,
    fontSize: 18,
    fontWeight: "700",
    borderBottomColor: Colors.primaryColor,
    borderBottomWidth: 2,
  },

  tabInActiveStyle: {
    padding: 10,
    color: Colors.primaryColor,
    fontSize: 18,
    fontWeight: "600",
    borderBottomColor: Colors.secondaryColor,
    borderBottomWidth: 0,
  },

  //Add Button of  StartScreen
  addButtonStyleHolder: {
    position: "absolute",
    alignItems: "center",
  },

  secondaryButtonsContainer: {
    top: -20,
    left: (Dimensions.get("window").width - 50) / 2,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#1a1a1a",
    width: Dimensions.get("window").width,
  },
  secondaryButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  outerAddButtonStyle: {
    top: -5,
    backgroundColor: Colors.secondaryColor,
    width: 80,
    height: 40,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    alignItems: "center",
  },
  addButtonStyle: {
    backgroundColor: Colors.secondaryColor,
    width: 60,
    height: 60,
    top: -30,
    color: Colors.secondaryColor,
    fontSize: 40,
    borderRadius: 100,
    lineHeight: 58,
    textAlign: "center",
  },
  //Cards:
  cardsMainTitle: {
    color: Colors.primaryColor,
    fontSize: 16,
    fontWeight: "700",
    marginTop: 3,
  },
  cardSubtitle: {
    color: Colors.primaryColor,
    fontSize: 14,
    marginTop: 5,
  },
  cardTextGrey: {
    color: Colors.subtitleGrayColor,
    fontSize: 13,
    marginTop: 3,
  },
  cardText: {
    color: Colors.textBlackColor,
    fontSize: 14,
    marginTop: 5,
  },
  cardTexBold: {
    color: Colors.textBlackColor,
    fontSize: 14,
    marginTop: 5,
    fontWeight: "700",
  },
  cardImage: {
    width: 83,
    height: 62,
  },
  skillCard: {
    marginHorizontal: 20,
    flexDirection: "column",
  },
  //MyTagAdder:
  tagAdderTextBox: {
    height: 45,
    alignSelf: "flex-start",
    maxWidth: 200,
    borderColor: Colors.primaryColor,
    borderWidth: 2,
    borderRadius: 100,
    justifyContent: "center",
    flexDirection: "row",
  },
  tagAdderAddButton: {
    alignSelf: "center",
    marginRight: 7,
  },
  tagContainer: {
    backgroundColor: Colors.primaryColor,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  tagText: {
    color: Colors.secondaryColor,
    paddingLeft: 10
  },
  tagDeleteButton: {
    marginLeft: 5
  },
});
