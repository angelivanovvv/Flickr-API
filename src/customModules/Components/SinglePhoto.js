import React from 'react';

const SinglePhoto = props => {
  return (
    <div className="cardPhotoContainer">
      <div className="imageWrapper">
        <img src={props.imageUrl} alt="image"/>
      </div>
      <div className="contentWrapper">
        <div className="header">
          <span className="title">
            <a href={"https://www.flickr.com/photos/" + props.ownerId+ "/" + props.photoId }>{props.title}</a>
          </span>
          <span className="author">
            <a href={"https://www.flickr.com/photos/" + props.ownerId}>{props.ownerName}</a>
          </span>
        </div>
        <div className="body">
          <p className="description">{props.description}</p>
        </div>
        <div className="footer">
          <p className="tags">Tags: {props.tags}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePhoto;
