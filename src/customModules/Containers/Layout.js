import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Layout from '../Components/Layout'
import * as pagesActions from '../../reduxSource/actions/pages';
import * as photosActions from '../../reduxSource/actions/photos';

const mapStateToProps = (state) => {
    return {
        photos: state.photos,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onInitPhotos: page => photosActions.initPhotos(page),
        onInitSearchPhotos: (page, searchValue) => photosActions.initSearchPhotos(page, searchValue),
        onInitLazyPhotos: (page, searchValue) => photosActions.initLazyPhotos(page, searchValue),
        onInitLazySearchPhotos: (page, searchValue) =>  photosActions.initLazySearchPhotos(page, searchValue),
        onInitClearPhotos: (page) => photosActions.initClearPhotos(page),
        onPageNumber: () => pagesActions.initPageNumber()
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);