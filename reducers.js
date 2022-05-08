import {
  SET_LOCATION,
  SET_BACKUP,
  SET_FISHING,
  SET_LOCK,
  SET_WIFI,
  SET_EXPERIENCE,
  UPDATE_APP,
  REMOVE_PERMISSION,
  SET_END_TIME,
  SET_NOT_SEND_END_TIME,
  SET_NOT_SEND_START_TIME,
  SET_START_TIME,
  Set_FIRST_TIME,
  RESET_STATE,
} from "./actions";

const INITIAL_STATE = {
  experience: 115,
  hasBackUp: false,
  hasLock: false,
  wifiIsScanned: false,
  allAppsUpdated: false,
  hasFishingProtection: false,
  LocationIsOff: false,
  getNotificationsStartTime: "16",
  getNotificationsEndTime: "20",
  DontGetNotificationsStartTime: "15",
  DontGetNotificationsEndTime: "18",
  firstLogin: true,
  friends: [
    {
      id: 0,
      image: "https://bootdey.com/img/Content/avatar/avatar6.png",
      username: "Tom",
      experience: 123,
    },
    {
      id: 1,
      image: "https://bootdey.com/img/Content/avatar/avatar2.png",
      username: "John",
      experience: 124,
    },
    {
      id: 2,
      image: "https://bootdey.com/img/Content/avatar/avatar3.png",
      username: "Tim",
      experience: 134,
    },
    {
      id: 3,
      image: "https://bootdey.com/img/Content/avatar/avatar4.png",
      username: "Demarcus",
      experience: 142,
    },
    {
      id: 4,
      image: "https://bootdey.com/img/Content/avatar/avatar1.png",
      username: "Jerome",
      experience: 154,
    },
  ],
  appUpdates: [
    {
      icon: "logo-linkedin",
      appName: "LinkedIn",
      size: "30 MB",
      color: "blue",
    },
    {
      icon: "logo-playstation",
      appName: "Playstation",
      size: "25 MB",
      color: "blue",
    },
    {
      icon: "logo-reddit",
      appName: "Reddit",
      size: "40 MB",
      color: "red",
    },
    {
      icon: "logo-google",
      appName: "Google",
      size: "10 MB",
      color: "green",
    },
    {
      icon: "logo-javascript",
      appName: "Javascript",
      size: "12 MB",
      color: "#FDDA0D",
    },
    {
      icon: "logo-snapchat",
      appName: "Snapchat",
      size: "11 MB",
      color: "#FDDA0D",
    },
    {
      icon: "logo-react",
      appName: "Twitter",
      size: "31 MB",
      color: "cyan",
    },
    {
      icon: "logo-xbox",
      appName: "Xbox",
      size: "123 MB",
      color: "green",
    },
    {
      icon: "logo-dropbox",
      appName: "Dropbox",
      size: "25 MB",
      color: "blue",
    },
    {
      icon: "logo-youtube",
      appName: "Youtube",
      size: "231 MB",
      color: "red",
    },
  ],
  appPermissions: [
    {
      icon: "logo-linkedin",
      appName: "LinkedIn",
      color: "blue",
      permissions: ["Location", "Calls", "Microphone"],
    },
    {
      icon: "logo-playstation",
      appName: "Playstation",
      color: "blue",
      permissions: [
        "Location",
        "Calls",
        "Storage",
        "Camera",
        "Photos",
        "Microphone",
        "Calendar",
      ],
    },
    {
      icon: "logo-reddit",
      appName: "Reddit",
      color: "red",
      permissions: [
        "Location",
        "Calls",
        "Storage",
        "Camera",
        "Photos",
        "Microphone",
        "Calendar",
      ],
    },
    {
      icon: "logo-google",
      appName: "Google",
      color: "green",
      permissions: [
        "Location",
        "Calls",
        "Storage",
        "Camera",
        "Photos",
        "Microphone",
        "Calendar",
      ],
    },
    {
      icon: "logo-javascript",
      appName: "Javascript",
      color: "#FDDA0D",
      permissions: [
        "Location",
        "Calls",
        "Camera",
        "Photos",
        "Microphone",
        "Calendar",
      ],
    },
    {
      icon: "logo-snapchat",
      appName: "Snapchat",
      color: "#FDDA0D",
      permissions: [
        "Location",
        "Calls",
        "Camera",
        "Photos",
        "Microphone",
        "Calendar",
      ],
    },
    {
      icon: "logo-react",
      appName: "Twitter",
      color: "cyan",
      permissions: ["Location", "Storage", "Camera", "Photos", "Calendar"],
    },
    {
      icon: "logo-xbox",
      appName: "Xbox",
      color: "green",
      permissions: ["Location", "Storage", "Camera", "Photos", "Calendar"],
    },
    {
      icon: "logo-dropbox",
      appName: "Dropbox",
      color: "blue",
      permissions: ["Location", "Photos", "Microphone", "Calendar"],
    },
    {
      icon: "logo-youtube",
      appName: "Youtube",
      color: "red",
      permissions: [
        "Location",
        "Calls",
        "Camera",
        "Photos",
        "Microphone",
        "Calendar",
      ],
    },
  ],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_BACKUP:
      return {
        ...state,
        experience: action.payload ? state.experience + 3 : state.experience,
        hasBackUp: action.payload,
      };
    case SET_LOCK:
      return {
        ...state,
        experience: action.payload ? state.experience + 3 : state.experience,
        hasLock: action.payload,
      };
    case SET_LOCATION:
      return {
        ...state,
        experience: action.payload ? state.experience + 3 : state.experience,
        LocationIsOff: action.payload,
      };
    case SET_FISHING:
      return {
        ...state,
        experience: action.payload ? state.experience + 3 : state.experience,
        hasFishingProtection: action.payload,
      };
    case SET_WIFI:
      return {
        ...state,
        experience: action.payload ? state.experience + 3 : state.experience,
        wifiIsScanned: action.payload,
      };
    case SET_EXPERIENCE:
      const newExperience =
        parseInt(action.payload) + parseInt(state.experience);

      return { ...state, experience: newExperience };
    case UPDATE_APP:
      return {
        ...state,
        appUpdates: state.appUpdates.filter((app) => {
          return app.appName != action.payload;
        }),
        experience: state.experience + 1,
      };
    case REMOVE_PERMISSION:
      return {
        ...state,
        appPermissions: state.appPermissions.map((app) => {
          return {
            ...app,
            permissions: app.permissions.filter((permission) => {
              return (
                permission != action.payload.permission ||
                app.appName != action.payload.appName
              );
            }),
          };
        }),
        experience: state.experience + 1,
      };
    case SET_START_TIME:
      return {
        ...state,
        getNotificationsStartTime: action.payload,
      };
    case SET_END_TIME:
      return {
        ...state,
        getNotificationsEndTime: action.payload,
      };
    case SET_NOT_SEND_START_TIME:
      return {
        ...state,
        DontGetNotificationsStartTime: action.payload,
      };
    case SET_NOT_SEND_END_TIME:
      return {
        ...state,
        DontGetNotificationsEndTime: action.payload,
      };
    case Set_FIRST_TIME:
      return {
        ...state,
        firstLogin: action.payload,
      };
    case RESET_STATE:
      return {
        ...state,
        experience: INITIAL_STATE.experience,
        friends: INITIAL_STATE.friends,
        hasBackUp: false,
        hasLock: false,
        wifiIsScanned: false,
        allAppsUpdated: false,
        hasFishingProtection: false,
        LocationIsOff: false,
        getNotificationsStartTime: "16",
        getNotificationsEndTime: "20",
        DontGetNotificationsStartTime: "15",
        DontGetNotificationsEndTime: "18",
        firstLogin: false,
        appUpdates: INITIAL_STATE.appUpdates,
        appPermissions: INITIAL_STATE.appPermissions,
      };
    default:
      return state;
  }
};

export default userReducer;
