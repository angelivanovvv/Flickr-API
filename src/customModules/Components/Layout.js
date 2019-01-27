import React from 'react';

import Wrapper from '../Common/components/Wrapper';
import SearchBar from '../Components/SearchBar';
import Photos from '../Components/Photos';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      validation: {
        required: true,
        minLength: 3
      },
      valid: false,
      touched: false
    };
  }
  checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    return isValid;
  };

  getValueHandler = e => {
    this.setState({
      ...this.state,
      value: e.target.value,
      valid: this.checkValidity(e.target.value, this.state.validation),
      touched: true
    });
  };

  searchHandler = e => {
    e.preventDefault();
    this.props.onInitSearchPhotos(
      this.props.photos.pageNumber,
      this.state.searchValue
    );
  };

  clearHandler = e => {
    e.preventDefault();

    let randomPage = (min_value, max_value) => {
      return Math.ceil(Math.random() * (max_value - min_value) + min_value);
    };

    this.props.onInitClearPhotos(randomPage(1, 100));
  };

  onScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.props.onPageNumber();

      if (this.props.photos.searched) {
        this.props.onInitLazySearchPhotos(
          this.props.photos.pageNumber,
          this.state.searchValue
        );
      }

      if (!this.props.photos.searched) {
        this.props.onInitLazyPhotos(
          this.props.photos.pageNumber,
          this.state.searchValue
        );
      }
    }
  };

  componentDidMount() {
    this.props.onInitPhotos(this.props.photos.pageNumber);
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  render() {
      console.log(this.props.photos);
    return (
      <Wrapper className="Wrapper">
        <div className="container">
          <div className="row">
            <SearchBar
              getValue={this.getValueHandler}
              invalid={!this.state.valid}
              touched={this.state.touched}
              shouldValidate={this.state.validation}
              searchEvent={this.searchHandler}
              clearEvent={this.clearHandler}
            />
          </div>
          <Photos {...this.props} />
        </div>
      </Wrapper>
    );
  }
}

export default Layout;
