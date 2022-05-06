export const SET_LOCK = 'SET_LOCK';
export const SET_BACKUP = 'SET_BACKUP';
export const SET_WIFI = 'SET_WIFI';
export const SET_FISHING = 'SET_FISHING';
export const SET_LOCATION = 'SET_LOCATION';
export const SET_EXPERIENCE = 'SET_EXPERIENCE';

export const setBackup = backup => dispatch => {
    dispatch({type: SET_BACKUP,
    payload: backup});
};

export const setLock = lock => dispatch => {
    dispatch({type: SET_LOCK,
    payload: lock});
};

export const setWifi = wifiIsScanned => dispatch => {
    dispatch({
        type: SET_WIFI,
        payload: wifiIsScanned, 
    });
};

export const setFishing = hasFishingProtection => dispatch => {
    dispatch({
        type: SET_FISHING,
        payload: hasFishingProtection,
    });
};

export const setLocation = LocationIsOff => dispatch => {
    dispatch({
        type: SET_LOCATION,
        payload: LocationIsOff,
    });
};

export const setExperience = experience => dispatch => {
    dispatch({
        type: SET_LOCATION,
        payload: experience,
    });
};