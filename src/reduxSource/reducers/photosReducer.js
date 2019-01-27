import * as photoActionTypes from '../actionTypes/photos';
import * as pageActionTypes from '../actionTypes/pages';

const initialState = {
  photos: [],
  searchedPhotos: [],
  searched: false,
  error: false,
  errorMessage: '',
  pageNumber: 1,
  loading: false,
  lazyLoading: false,
  cleared: false
};

export const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case pageActionTypes.INIT_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: state.pageNumber + action.payload.pageNumber
      };
    case photoActionTypes.INIT_CLEAR_PHOTOS:
      return {
        ...state,
        photos: [],
        searchedPhotos: [],
        searched: false,
        error: false,
        errorMessage: '',
        pageNumber: 1,
        loading: false,
        lazyLoading: false,
        cleared: true
      };
    case photoActionTypes.FETCH_PHOTOS_LOADING:
      return {
        ...state,
        loading: true,
        cleared: false
      };
    case photoActionTypes.FETCH_PHOTOS_LAZY_LOADING:
      return {
        ...state,
        lazyLoading: true,
        cleared: false
      };
    case photoActionTypes.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: state.photos.concat(action.payload.data),
        searched: false,
        error: false,
        errorMessage: '',
        loading: false,
        lazyLoading: false,
        cleared: false
      };
    case photoActionTypes.FETCH_PHOTOS_SEARCH_SUCCESS:
      return {
        ...state,
        photos: [],
        searchedPhotos: state.searchedPhotos.concat(action.payload.data),
        searched: true,
        error: false,
        errorMessage: '',
        loading: false,
        lazyLoading: false,
        cleared: false
      };
    case photoActionTypes.FETCH_PHOTOS_FAILD:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.error,
        loading: false,
        lazyLoading: false,
        cleared: false
      };
    default:
      return state;
  }
};
