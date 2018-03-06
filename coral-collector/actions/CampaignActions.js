import React, { Component } from 'react';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  CAMPAIGN_UPDATE,
  CAMPAIGN_CREATE,
  CAMPAIGN_FETCH_SUCCESS,
  CAMPAIGN_SAVE_SUCCESS
} from './types';
import { RNS3 } from 'react-native-aws3';

export const campaignUpdate = ({ prop, value }) => {
  console.log(prop);
  console.log(value);
  return {
    type: CAMPAIGN_UPDATE,
    payload: { prop, value }
  };
};

export const campaignCreate = ({ title, description, imageUri, recycleType, date, time, campaignType, goal, unit, location }) => {
  // const { currentUser } = firebase.auth();

  const file = {
    uri: imageUri,
    name: title + "Cover.png",
    type: "image/png"
  }

  console.log('Units in Create: ' + unit);

  const options = {
    keyPrefix: "campaigns/",
    bucket: "coral-community",
    region: "ap-southeast-1",
    accessKey: "AKIAJ2XBHT5AGKRG6XQA",
    secretKey: "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",
    successActionStatus: 201
  }
  
  RNS3.put(file, options).then(response => {
    if (response.status !== 201)
      throw new Error("Failed to upload image to S3");
    console.log(response.body);
  });

  return (dispatch) => {
    firebase.database().ref(`/users/campaigns`)
      .push().set({ title, description, recycleType, date, time, campaignType, goal, unit, location })
      .then(() => {
        dispatch({ type: CAMPAIGN_CREATE });
      });
  };
};

export const campaignFetch = () => {
  // const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/campaigns`)
      .on('value', snapshot => {
        dispatch({ type: CAMPAIGN_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const campaignSave = ({ title, description, uid }) => {
  // const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/campaigns/${uid}`)
      .set({ title, description })
      .then(() => {
        dispatch({ type: CAMPAIGN_SAVE_SUCCESS });
        // Actions.campaignList({ type: 'reset' });
      });
  };
};

export const campaignDelete = ({ uid }) => {
  // const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/campaigns/${uid}`)
      .remove()
      .then(() => {
        // Actions.campaignList({ type: 'reset' });
      });
  };
};
