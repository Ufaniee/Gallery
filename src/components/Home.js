import React, { useState } from 'react';
import './App.css';
import ImageDropZone from './ImageDropZone';
import Footer from "./Footer";

function HomeScreen() {
  const [image, setImage] = useState(null);

  const handleImageDrop = (file) => {
    // Process the dropped image file
    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="App">
      <h1>Drag and Drop Images</h1>
      <ImageDropZone onImageDrop={handleImageDrop} />
      {image && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={image} alt="Uploaded" className="uploaded-image"  height={200} width={200}/>
        </div>
      )}
       <Footer/>
    </div>
  );
}

export default HomeScreen;
