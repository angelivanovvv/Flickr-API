import { combineReducers } from 'redux';

import { photoReducer } from './reducers/photosReducer';

export const rootReducer = combineReducers({
    photos: photoReducer
});