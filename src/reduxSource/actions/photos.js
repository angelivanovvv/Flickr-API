import * as actionTypes from '../actionTypes/photos';

const initPhotos = page => {
  return {
    type: actionTypes.INIT_PHOTOS,
    payload: {
      page: page
    }
  };
};

const initLazyPhotos = (page, searchValue) => {
  return {
    type: actionTypes.INIT_LAZY_PHOTOS,
    payload: {
      page: page,
      searchValue: searchValue
    }
  };
};

const initSearchPhotos = (page, searchValue) => {
  return {
    type: actionTypes.INIT_SEARCH_PHOTOS,
    payload: {
      page: page,
      searchValue: searchValue
    }
  };
};

const initLazySearchPhotos = (page, searchValue) => {
  return {
    type: actionTypes.INIT_LAZY_SEARCH_PHOTOS,
    payload: {
      page: page,
      searchValue: searchValue
    }
  };
};

const initClearPhotos = page => {
  return {
    type: actionTypes.INIT_CLEAR_PHOTOS,
    payload: {
      page: page
    }
  };
};

const fetchPhotosLoading = () => {
  return {
    type: actionTypes.FETCH_PHOTOS_LOADING
  };
};

const fetchPhotosLazyLoading = () => {
  return {
    type: actionTypes.FETCH_PHOTOS_LAZY_LOADING
  };
};

const fetchPhotosSuccess = data => {
  return {
    type: actionTypes.FETCH_PHOTOS_SUCCESS,
    payload: {
      data: data
    }
  };
};

const fetchPhotosSearchSuccess = data => {
  return {
    type: actionTypes.FETCH_PHOTOS_SEARCH_SUCCESS,
    payload: {
      data: data
    }
  };
};

const fetchPhotosFaild = error => {
  return {
    type: actionTypes.FETCH_PHOTOS_FAILD,
    payload: {
      error: error
    }
  };
};

export {
  initPhotos,
  initLazyPhotos,
  initSearchPhotos,
  initLazySearchPhotos,
  initClearPhotos,
  fetchPhotosSuccess,
  fetchPhotosSearchSuccess,
  fetchPhotosFaild,
  fetchPhotosLoading,
  fetchPhotosLazyLoading
};
