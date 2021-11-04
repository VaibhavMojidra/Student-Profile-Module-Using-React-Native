import React, { useState, useReducer } from "react";
import { ImagesAndIcons } from "../../assets/css/GlobalStyle";
import SimpleAlertDialog from "../dialogs/SimpleAlertDialog";

const MyContext = React.createContext();

const EducationReducer = (educationList, action) => {
  switch (action.type) {
    case "add_education": {
      SimpleAlertDialog("", "Successfully added", "OK", () => {
        action.navigation.pop();
      });
      return [action.data, ...educationList];
    }
    case "edit_education": {
      SimpleAlertDialog("", "Successfully updated", "OK", () => {
        action.navigation.pop();
      });
      return educationList.map((ed) => {
        return ed.id === action.data.id ? action.data : ed;
      });
    }
    case "delete_education": {
      SimpleAlertDialog("", "Successfully deleted", "OK", () => {
        action.navigation.pop();
      });
      return educationList.filter((ed) => ed.id !== action.id);
    }
    default: {
      return educationList;
    }
  }
};

const WorkReducer = (workList, action) => {
  switch (action.type) {
    case "add_work": {
      SimpleAlertDialog("", "Successfully added", "OK", () => {
        action.navigation.pop();
      });
      return [action.data, ...workList];
    }
    case "edit_work": {
      SimpleAlertDialog("", "Successfully updated", "OK", () => {
        action.navigation.pop();
      });
      return workList.map((wk) => {
        return wk.id === action.data.id ? action.data : wk;
      });
    }

    case "delete_work": {
      SimpleAlertDialog("", "Successfully deleted", "OK", () => {
        action.navigation.pop();
      });
      return workList.filter((wk) => wk.id !== action.id);
    }
    default: {
      return workList;
    }
  }
};

const SkillReducer = (skillList, action) => {
  switch (action.type) {
    case "add_skill": {
      SimpleAlertDialog("", "Successfully added", "OK", () => {
        action.navigation.pop();
      });
      return [action.data, ...skillList];
    }
    case "edit_skill": {
      SimpleAlertDialog("", "Successfully updated", "OK", () => {
        action.navigation.pop();
      });
      return skillList.map((sk) => {
        return sk.id === action.data.id ? action.data : sk;
      });
    }
    case "delete_skill": {
      SimpleAlertDialog("", "Successfully deleted", "OK", () => {
        action.navigation.pop();
      });
      return skillList.filter((sk) => sk.id !== action.id);
    }
    default: {
      return skillList;
    }
  }
};

const ExtraCurricularReducer = (extraCurricularList, action) => {
  switch (action.type) {
    case "add_extraCurricular": {
      SimpleAlertDialog("", "Successfully added", "OK", () => {
        action.navigation.pop();
      });
      return [action.data, ...extraCurricularList];
    }
    case "edit_extraCurricular": {
      SimpleAlertDialog("", "Successfully updated", "OK", () => {
        action.navigation.pop();
      });
      return extraCurricularList.map((ex) => {
        return ex.id === action.data.id ? action.data : ex;
      });
    }
    case "delete_extraCurricular": {
      SimpleAlertDialog("", "Successfully deleted", "OK", () => {
        action.navigation.pop();
      });
      return extraCurricularList.filter((ex) => ex.id !== action.id);
    }
    default: {
      return extraCurricularList;
    }
  }
};

const PublicationReducer = (publicationList, action) => {
  switch (action.type) {
    case "add_Publication": {
      SimpleAlertDialog("", "Successfully added", "OK", () => {
        action.navigation.pop();
      });
      return [action.data, ...publicationList];
    }
    case "edit_Publication": {
      SimpleAlertDialog("", "Successfully edited", "OK", () => {
        action.navigation.pop();
      });
      return publicationList.map((pb) => {
        return pb.id === action.data.id ? action.data : pb;
      });
    }
    case "delete_Publication": {
      SimpleAlertDialog("", "Successfully deleted", "OK", () => {
        action.navigation.pop();
      });
      return publicationList.filter((pb) => pb.id !== action.id);
    }
    default: {
      return publicationList;
    }
  }
}

const CertificateReducer = (certificateList, action) => {
  switch (action.type) {
    case "add_Certificate": {
      SimpleAlertDialog("", "Successfully added", "OK", () => {
        action.navigation.pop();
      });
      return [action.data, ...certificateList];
    }
    case "edit_Certificate": {
      SimpleAlertDialog("", "Successfully edited", "OK", () => {
        action.navigation.pop();
      });
      return certificateList.map((c) => {
        return c.id === action.data.id ? action.data : c;
      });
    }
    case "delete_Certificate": {
      SimpleAlertDialog("", "Successfully deleted", "OK", () => {
        action.navigation.pop();
      });
      return certificateList.filter((c) => c.id !== action.id);
    }
    default: {
      return certificateList;
    }
  }
}
const FollowingReducer = (followingList, action) => {
  switch (action.type) {
    case "delete_following": {
      return followingList.filter((fl) => fl.uid !== action.id);
    }
    default: {
      return followingList;
    }
  }
};

const FollowerReducer = (followerList, action) => {
  switch (action.type) {
    case "delete_follower": {
      return followerList.filter((fl) => fl.uid !== action.id);
    }
    default: {
      return followerList;
    }
  }
};

export const MyProvider = ({ children }) => {
  const [educationList, updateEducationList] = useReducer(EducationReducer, [
    {
      id: 1,
      instituteName: "Narsee Monjee College of Commerce and Economics",
      courseName: "Bachelor of Science in Information Technology",
      boardName: "Mumbai University",
      startDate: new Date(),
      endDate: new Date(),
      percentGrade: "Grade A",
      showGrade: true,
      image: null,
    },
  ]);

  const [workList, updateWorkList] = useReducer(WorkReducer, [
    {
      id: 637458,
      company: "Deloitte USI",
      employeeType: "IT Consulting",
      endDate: new Date("February 18, 2022 11:13:00"),
      image: "https://d8it4huxumps7.cloudfront.net/bites/wp-content/uploads/2019/07/26103543/How-an-internship-at-Deloitte-Consulting-USI-helped-me-improve-my-skills-in-strategic-development-Shwetha-story.jpg",
      isCurrent: false,
      showMedia: true,
      startDate: new Date("January 18, 2021 11:13:00"),
      workTitle: "SAP Basis Administrator",
    },
    {
      id: 637459,
      company: "Deloitte USI",
      employeeType: "IT Consulting",
      endDate: new Date("September 10, 2024 11:13:00"),
      image: "https://d8it4huxumps7.cloudfront.net/bites/wp-content/uploads/2019/07/26103543/How-an-internship-at-Deloitte-Consulting-USI-helped-me-improve-my-skills-in-strategic-development-Shwetha-story.jpg",
      isCurrent: true,
      showMedia: true,
      startDate: new Date("February 18, 2022 11:13:00"),
      workTitle: "Android Developer",
    },
  ]);

  const [skillList, updateSkillList] = useReducer(SkillReducer, [
    { id: 1, skill: "Photoshop", skillPercent: "80" },
    { id: 2, skill: "Lightroom", skillPercent: "90" },
    { id: 3, skill: "Illustrator", skillPercent: "99" },
    { id: 4, skill: "PowerPoint", skillPercent: "20" },
    { id: 5, skill: "Adobe XD", skillPercent: "10" },
  ]);
  const [extraCurricularList, updateExtraCurricularList] = useReducer(
    ExtraCurricularReducer,
    [
      {
        description: "Work as Designer at College Event - Intent",
        endDate: new Date(),
        id: 984805,
        image: null,
        showMedia: true,
        startDate: new Date(),
        title: "Designer at College Event",
      },
    ]
  );
  const [publicationList, updatePublicationList] = useReducer(PublicationReducer, [
    {
      title: "Publication Title",
      publisher: "Publisher Name",
      publicationDate: new Date(),
      authors: [],
      description: "Hello this is the desciption of this publication and we have work.",
      image: null,
      showMedia: true,
    },
  ]);
  const [certificateList, updateCertificateList] = useReducer(CertificateReducer, [
    {
      title: "Certificate Title",
      date: new Date(),
      description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
      image: null,
      showMedia: true,
    }
  ]);
  const [followerList, updateFollowerList] = useReducer(FollowerReducer, [
    {
      uid: 1223,
      name: "Vaibhav Mojidra3",
      userProfilePic: ImagesAndIcons.profile_pic,
      isFollowing: true,
      isFollower: true,
    },
    {
      uid: 1224,
      name: "Vaibhav Mojidra4",
      userProfilePic: ImagesAndIcons.profile_pic,
      isFollowing: true,
      isFollower: true,
    },
    {
      uid: 1225,
      name: "Vaibhav Mojidra5",
      userProfilePic: ImagesAndIcons.profile_pic,
      isFollowing: false,
      isFollower: true,
    },
    {
      uid: 1226,
      name: "Vaibhav Mojidra6",
      userProfilePic: ImagesAndIcons.profile_pic,
      isFollowing: true,
      isFollower: true,
    },
    {
      uid: 1227,
      name: "Vaibhav Mojidra7",
      userProfilePic: ImagesAndIcons.profile_pic,
      isFollowing: true,
      isFollower: true,
    },
    {
      uid: 1228,
      name: "Vaibhav Mojidra8",
      userProfilePic: ImagesAndIcons.profile_pic,
      isFollowing: false,
      isFollower: true,
    },
  ]);

  const [followingList, updateFollowingList] = useReducer(FollowingReducer, [
    {
      uid: 1223,
      name: "Vaibhav Mojidra3",
      userProfilePic: ImagesAndIcons.profile_pic,
      isFollowing: true,
    },
    {
      uid: 1224,
      name: "Vaibhav Mojidra4",
      userProfilePic: ImagesAndIcons.profile_pic,
      isFollowing: true,
    },
    {
      uid: 1225,
      name: "Vaibhav Mojidra5",
      userProfilePic: ImagesAndIcons.profile_pic,
      isFollowing: true,
    },
    {
      uid: 1226,
      name: "Vaibhav Mojidra6",
      userProfilePic: ImagesAndIcons.profile_pic,
      isFollowing: true,
    },
    {
      uid: 1227,
      name: "Vaibhav Mojidra7",
      userProfilePic: ImagesAndIcons.profile_pic,
      isFollowing: true,
    },
    {
      uid: 1228,
      name: "Vaibhav Mojidra8",
      userProfilePic: ImagesAndIcons.profile_pic,
      isFollowing: true,
    },
  ]);

  const [titleText, setTitleText] = useState("");

  return (
    <MyContext.Provider
      value={{
        titleText,
        setTitleText,
        educationList,
        updateEducationList,
        workList,
        updateWorkList,
        skillList,
        updateSkillList,
        extraCurricularList,
        updateExtraCurricularList,
        publicationList,
        updatePublicationList,
        certificateList,
        updateCertificateList,
        followingList,
        updateFollowingList,
        followerList,
        updateFollowerList,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
