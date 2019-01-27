import React from 'react';

import ErrorContainer from '../Common/components/ErrorContainer';

const SearchBar = props => {
  return (
    <div className="col-md-12">
      <div className="searchBarContainer">
        <form action="#" className="form">
          <div className="searchWrapper">
            <i className="fa fa-search searchIcon" />
            <input
              onChange={props.getValue}
              type="text"
              className="searchInput"
            />
          </div>
          <div className="buttonWrapper">
            <button
              disabled={props.invalid}
              className="searchBtn"
              onClick={props.searchEvent}
            >
              Search
            </button>
            <button className="clearBtn" onClick={props.clearEvent}>
              Clear
            </button>
          </div>
          <ErrorContainer touched={props.touched} invalid={props.invalid} />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
