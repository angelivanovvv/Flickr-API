import { takeEvery } from 'redux-saga/effects'

import * as photosActionTypes from './actionTypes/photos';
import { photosSaga, photosLazySaga, searchPhotosSaga, searchPhotosLazySaga } from './sagas/photosSaga';

export function* rootSata () {
    yield takeEvery(photosActionTypes.INIT_PHOTOS, photosSaga);
    yield takeEvery(photosActionTypes.INIT_CLEAR_PHOTOS, photosSaga);
    yield takeEvery(photosActionTypes.INIT_LAZY_PHOTOS, photosLazySaga);
    yield takeEvery(photosActionTypes.INIT_SEARCH_PHOTOS, searchPhotosSaga);
    yield takeEvery(photosActionTypes.INIT_LAZY_SEARCH_PHOTOS, searchPhotosLazySaga);
};
