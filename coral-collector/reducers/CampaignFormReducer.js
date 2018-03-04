import {
  CAMPAIGN_UPDATE,
  CAMPAIGN_CREATE,
  CAMPAIGN_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  title: '',
  description: '',
  imageUri: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CAMPAIGN_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CAMPAIGN_CREATE:
      return INITIAL_STATE;
    case CAMPAIGN_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
