import React from 'react';

import SinglePhoto from '../Components/SinglePhoto';
import Spinner from '../Common/components/Spinner';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let Photos;
    let randomID = (min_value, max_value) => {
      return Math.random() * (max_value - min_value) + min_value;
    };

    if (this.props.photos.length === 0) {
      Photos = <Spinner />;
      return Photos;
    }

    if (this.props.photos.searched) {
      Photos = this.props.photos.searchedPhotos.map(item => {
        return (
          <div key={randomID(1, 1000)} className="col-md-4 col-sm-6 col-xs-12">
            <SinglePhoto
              key={item.id}
              photoId={item.id}
              ownerId={item.owner}
              ownerName={item.ownername}
              title={item.title}
              description={item.description._content}
              tags={item.tags}
              imageUrl={item.url_m}
            />
          </div>
        );
      });
      return <div className="row">{Photos}</div>;
    }

    Photos = this.props.photos.photos.map(item => {
      return (
        <div key={randomID(1, 1000)} className="col-md-4 col-sm-6 col-xs-12">
          <SinglePhoto
            key={item.id}
            photoId={item.id}
            ownerId={item.owner}
            ownerName={item.ownername}
            title={item.title}
            description={item.description._content}
            tags={item.tags}
            imageUrl={item.url_m}
          />
        </div>
      );
    });

    if (this.props.photos.loading) {
      Photos = <Spinner />;
      return Photos;
    }

    return <div className="row">{Photos}</div>;
  }
}

export default Photos;
