import React from 'react';
import '../App.css';
import ImageGallery from './ImageDropZone';
import Footer from "./Footer";

function HomeScreen() {
  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <ImageGallery />
      <Footer/>
    </div>
  );
}

export default HomeScreen;
