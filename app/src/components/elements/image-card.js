import React from 'react';
// import React, {Component} from 'react';
const ImageCard = ({
  profile_picture,
  full_name,
  username,
  numOfLikes,
  numOfComments
  }) => {

  if (!profile_picture) return null;

  return (
    <div className="thumbnail">
      <img src={profile_picture} alt="full_name"/>
      <div className="caption">
        <h3>{username}</h3>
        <p>Likes: {numOfLikes}</p>
        <p>Comments: {numOfComments}</p>
      </div>
    </div>
  );
};

export default ImageCard;