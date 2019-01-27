import * as actionTypes from '../actionTypes/pages';

export const initPageNumber = () => {
    return {
        type: actionTypes.INIT_PAGE_NUMBER,
        payload: {
            pageNumber: 1
        }
    }
};