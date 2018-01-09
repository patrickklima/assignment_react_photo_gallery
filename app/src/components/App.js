import React, { Component } from 'react';
// import logo from '../logo.svg';
import ImageIndex from './image-index.js';


const images = [
  {
    profile_picture: "https://placekitten.com/200/200?image=1",
    full_name: "Aidan Shah",
    username: "el_capit4n",
    numOfLikes: "10",
    numOfComments: "20"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageIndex images={images} />          
      </div>
    );
  }
}

export default App;
