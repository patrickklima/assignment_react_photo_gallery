import React from 'react';
// import React, {Component} from 'react';
import ImageCard from './elements/image-card';

const ImageIndex = ({images}) => {  
  console.log(images);
  const imagesMap = images.map(image => (
    <ImageCard image={image} key={image.profile_picture} />
  ));
  
  return (
    <div className="row container">
      <div className="col-sm-6 col-md-4">
        {imagesMap}
      </div>
    </div>
    
  );
};

export default ImageIndex;


//class ImageIndex extends Component {
//  constructor () {
