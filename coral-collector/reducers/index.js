import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CampaignFormReducer from './CampaignFormReducer';
import CampaignReducer from './CampaignReducer';

export default combineReducers({
  auth: AuthReducer,
  campaignForm: CampaignFormReducer,
  campaigns: CampaignReducer
});
