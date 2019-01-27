// import { put, call } from 'redux-saga/effects';
//
// import * as actions from '../actions/pages';
// import { Api } from '../../customModules/Common/api/api-exports';
//
// export function* pagesSaga (action) {
//     try {
//         const response =  yield call(Api.collectPhotos, action.payload.page);
//         yield put(actions.fetchPagesSuccess(response.body.photos));
//
//     } catch(error) {
//         yield put(actions.fetchPagesFaild(error.message))
//     }
// };