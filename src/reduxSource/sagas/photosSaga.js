import { put, call } from 'redux-saga/effects';

import * as _ from 'ramda';
import * as actions from '../actions/photos';
import { Api } from '../../customModules/Common/api/api-exports';

export function* photosSaga(action) {
  try {
    yield put(actions.fetchPhotosLoading());
    const response = yield call(
      Api.collectPhotos,
      action.payload.page,
      action.payload.searchValue
    );
    const photos = response.body.photos.photo;

    let omitProps = [
      'secret',
      'server',
      'farm',
      'ispublic',
      'isfriend',
      'isfamily'
    ];

    const orderedPhotos = photos.map(photo => {
      return _.omit(omitProps, photo);
    });

    yield put(actions.fetchPhotosSuccess(orderedPhotos));
  } catch (error) {
    yield call(actions.fetchPhotosFaild(error.message));
  }
}

export function* photosLazySaga(action) {
  try {
    yield put(actions.fetchPhotosLazyLoading());
    const response = yield call(
      Api.collectPhotos,
      action.payload.page,
      action.payload.searchValue
    );
    const photos = response.body.photos.photo;

    let omitProps = [
      'secret',
      'server',
      'farm',
      'ispublic',
      'isfriend',
      'isfamily'
    ];

    const orderedPhotos = photos.map(photo => {
      return _.omit(omitProps, photo);
    });

    yield put(actions.fetchPhotosSuccess(orderedPhotos));
  } catch (error) {
    yield call(actions.fetchPhotosFaild(error.message));
  }
}

export function* searchPhotosSaga(action) {
  try {
    yield put(actions.fetchPhotosLoading());
    const response = yield call(
      Api.searchPhotos,
      action.payload.page,
      action.payload.searchValue
    );
    const photos = response.body.photos.photo;

    let omitProps = [
      'secret',
      'server',
      'farm',
      'ispublic',
      'isfriend',
      'isfamily'
    ];

    const orderedPhotos = photos.map(photo => {
      return _.omit(omitProps, photo);
    });

    yield put(actions.fetchPhotosSearchSuccess(orderedPhotos));
  } catch (error) {
    yield call(actions.fetchPhotosFaild(error.message));
  }
}

export function* searchPhotosLazySaga(action) {
    try {
        yield put(actions.fetchPhotosLazyLoading());
        const response = yield call(
            Api.collectPhotos,
            action.payload.page,
            action.payload.searchValue
        );
        const photos = response.body.photos.photo;

        let omitProps = [
            'secret',
            'server',
            'farm',
            'ispublic',
            'isfriend',
            'isfamily'
        ];

        const orderedPhotos = photos.map(photo => {
            return _.omit(omitProps, photo);
        });

        yield put(actions.fetchPhotosSearchSuccess(orderedPhotos));
    } catch (error) {
        yield call(actions.fetchPhotosFaild(error.message));
    }
}
