import React, { useState } from 'react';
import './App.css';
import ImageDropZone from './ImageDropZone';
import Footer from "./Footer";
import Images from './Images';
import SearchComponent from './Search';


function HomeScreen() {
  const [image, setImage] = useState(null);

  const handleImageDrop = (file) => {
    // Process the dropped image file
    setImage(URL.createObjectURL(file));
  };

  const [searchResult, setSearchResult] = useState('');
  const handleSearch = (query) => {
    // Perform the search using the query (e.g., an API request)
    // Set the search result in state
    setSearchResult(query);
  };


  return (
    <div className="App">
      <h1>Drag and Drop Images</h1>
      <SearchComponent onSearch={handleSearch} />
      <p>Search Result: {searchResult}</p>
      <ImageDropZone onImageDrop={handleImageDrop} />
      {image && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={image} alt="Uploaded" className="uploaded-image"  height={250} width={300}/>
        </div>
      )}
      <Images/>
       <Footer/>
    </div>
  );
}

export default HomeScreen;
