import { SET_LOCATION, SET_BACKUP, SET_FISHING, SET_LOCK, SET_WIFI, SET_EXPERIENCE} from './actions';

const INITIAL_STATE = {
    experience: 115,
    hasBackUp: false,
    hasLock: false,
    wifiIsScanned: false,
    allAppsUpdated: false,
    hasFishingProtection: false,
    LocationIsOff: false,
    friends: [
    {id:0, image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Tom", experience: 123},
    {id:1, image: "https://bootdey.com/img/Content/avatar/avatar2.png", username:"John", experience: 124},
    {id:2, image: "https://bootdey.com/img/Content/avatar/avatar3.png", username:"Tim", experience: 134},
    {id:3, image: "https://bootdey.com/img/Content/avatar/avatar4.png", username:"Demarcus", experience: 142},
    {id:4, image: "https://bootdey.com/img/Content/avatar/avatar1.png", username:"Jerome", experience: 154},
    ]
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_BACKUP:
        return {...state, experience: action.payload? state.experience + 3 : state.experience, hasBackUp: action.payload};
    case SET_LOCK:
        return {...state, experience: action.payload? state.experience + 3 : state.experience, hasLock: action.payload};
    case SET_LOCATION:
        return {...state, experience: action.payload? state.experience + 3 : state.experience, LocationIsOff: action.payload};
    case SET_FISHING:
        return {...state, experience: action.payload? state.experience + 3 : state.experience, hasFishingProtection: action.payload};
    case SET_WIFI:
        return {...state, experience: action.payload? state.experience + 3 : state.experience, wifiIsScanned: action.payload};
    case SET_EXPERIENCE:
        const newExperience = parseInt(action.payload) + parseInt(state.experience);

        return {...state, experience: newExperience};
    default:
      return state;
  }
};

export default userReducer;