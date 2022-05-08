export const SET_LOCK = "SET_LOCK";
export const SET_BACKUP = "SET_BACKUP";
export const SET_WIFI = "SET_WIFI";
export const SET_FISHING = "SET_FISHING";
export const SET_LOCATION = "SET_LOCATION";
export const SET_EXPERIENCE = "SET_EXPERIENCE";
export const UPDATE_APP = "UPDATE_APP";
export const REMOVE_PERMISSION = "REMOVE_PERMISSION";
export const SET_START_TIME = "SET_START_TIME";
export const SET_END_TIME = "SET_END_TIME";
export const SET_NOT_SEND_START_TIME = "SET_NOT_SEND_START_TIME";
export const SET_NOT_SEND_END_TIME = "SET_NOT_SEND_END_TIME";
export const Set_FIRST_TIME = "Set_FIRST_TIME";

export const setBackup = (backup) => (dispatch) => {
  dispatch({ type: SET_BACKUP, payload: backup });
};

export const setLock = (lock) => (dispatch) => {
  dispatch({ type: SET_LOCK, payload: lock });
};

export const setWifi = (wifiIsScanned) => (dispatch) => {
  dispatch({
    type: SET_WIFI,
    payload: wifiIsScanned,
  });
};

export const setFishing = (hasFishingProtection) => (dispatch) => {
  dispatch({
    type: SET_FISHING,
    payload: hasFishingProtection,
  });
};

export const setLocation = (LocationIsOff) => (dispatch) => {
  dispatch({
    type: SET_LOCATION,
    payload: LocationIsOff,
  });
};

export const setExperience = (experience) => (dispatch) => {
  dispatch({
    type: SET_LOCATION,
    payload: experience,
  });
};

export const updateApp = (appname) => (dispatch) => {
  dispatch({
    type: UPDATE_APP,
    payload: appname,
  });
};

export const removePermission = (permission) => (dispatch) => {
  dispatch({
    type: REMOVE_PERMISSION,
    payload: permission,
  });
};

export const setStartTime = (time) => (dispatch) => {
  dispatch({
    type: SET_START_TIME,
    payload: time,
  });
};
export const setEndTime = (time) => (dispatch) => {
  dispatch({
    type: SET_END_TIME,
    payload: time,
  });
};
export const setDoNotSendStartTime = (time) => (dispatch) => {
  dispatch({
    type: SET_NOT_SEND_START_TIME,
    payload: time,
  });
};
export const setDoNotSendEndTime = (time) => (dispatch) => {
  dispatch({
    type: SET_NOT_SEND_END_TIME,
    payload: time,
  });
};

export const setFirstTime = (time) => (dispatch) => {
  dispatch({
    type: Set_FIRST_TIME,
    payload: time,
  });
};
