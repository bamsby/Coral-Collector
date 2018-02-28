import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  CAMPAIGN_UPDATE,
  CAMPAIGN_CREATE,
  CAMPAIGN_FETCH_SUCCESS,
  CAMPAIGN_SAVE_SUCCESS
} from './types';

export const campaignUpdate = ({ prop, value }) => {
  return {
    type: CAMPAIGN_UPDATE,
    payload: { prop, value }
  };
};

export const campaignCreate = ({ title, description }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/campaigns`)
      .push({ title, description })
      .then(() => {
        dispatch({ type: CAMPAIGN_CREATE });
        Actions.campaignList({ type: 'reset' });
      });
  };
};

export const campaignFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/campaigns`)
      .on('value', snapshot => {
        dispatch({ type: CAMPAIGN_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const campaignSave = ({ title, description, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/campaigns/${uid}`)
      .set({ title, description })
      .then(() => {
        dispatch({ type: CAMPAIGN_SAVE_SUCCESS });
        Actions.campaignList({ type: 'reset' });
      });
  };
};

export const campaignDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/campaigns/${uid}`)
      .remove()
      .then(() => {
        Actions.campaignList({ type: 'reset' });
      });
  };
};
