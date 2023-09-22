import React, { useState } from 'react';
import DraggableImage from './Images';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SearchBar from './Search';


const ImageGallery = () => {
  const [images, setImages] = useState([
    "https://media.istockphoto.com/id/1458215547/photo/brown-bear.webp?b=1&s=170667a&w=0&k=20&c=1ADJtvC9wQFy1Arglt8YEDLy-rqU2ZNAYHTongfTJJU=",
   "https://media.istockphoto.com/id/1399799270/photo/extreme-close-up-of-great-white-shark-looking-directly-at-camera-smiling.webp?b=1&s=170667a&w=0&k=20&c=rN6jdN4og6v1UBlYIR3fgg2IjprUeVbKnTyHdiHdGiI=",
    "https://media.istockphoto.com/id/1333977253/photo/male-lion-resting-on-a-rock.webp?b=1&s=170667a&w=0&k=20&c=RtsqEhhNPcCFz3GF8PzddrBbL7s1Sr-r3W9hGP9h9yg=",
    "https://media.istockphoto.com/id/1472824601/photo/majestic-wild-horses-in-autumn-in-wyoming.webp?b=1&s=170667a&w=0&k=20&c=8-aXrw531-iWyrfviwur2WHxXA9vKMMhNXWP6qAonhc=",
    "https://media.istockphoto.com/id/1435255379/photo/marine-iguana-on-a-sandy-beach-on-espanola-island-galapagos-islands-ecuador.webp?b=1&s=170667a&w=0&k=20&c=0xNvLxShc9WVpywkLNm5nIhpegcanWFmqmp3qIMMfRw=",
    "https://media.istockphoto.com/id/1435255379/photo/marine-iguana-on-a-sandy-beach-on-espanola-island-galapagos-islands-ecuador.webp?b=1&s=170667a&w=0&k=20&c=0xNvLxShc9WVpywkLNm5nIhpegcanWFmqmp3qIMMfRw=","https://images.unsplash.com/photo-1567633090480-f19f2f67c088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1623645481161-0d8160281cbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://media.istockphoto.com/id/1458215547/photo/brown-bear.webp?b=1&s=170667a&w=0&k=20&c=1ADJtvC9wQFy1Arglt8YEDLy-rqU2ZNAYHTongfTJJU=",
   "https://media.istockphoto.com/id/1399799270/photo/extreme-close-up-of-great-white-shark-looking-directly-at-camera-smiling.webp?b=1&s=170667a&w=0&k=20&c=rN6jdN4og6v1UBlYIR3fgg2IjprUeVbKnTyHdiHdGiI=",
    "https://media.istockphoto.com/id/1333977253/photo/male-lion-resting-on-a-rock.webp?b=1&s=170667a&w=0&k=20&c=RtsqEhhNPcCFz3GF8PzddrBbL7s1Sr-r3W9hGP9h9yg=",
    "https://media.istockphoto.com/id/1472824601/photo/majestic-wild-horses-in-autumn-in-wyoming.webp?b=1&s=170667a&w=0&k=20&c=8-aXrw531-iWyrfviwur2WHxXA9vKMMhNXWP6qAonhc=",
    "https://media.istockphoto.com/id/1435255379/photo/marine-iguana-on-a-sandy-beach-on-espanola-island-galapagos-islands-ecuador.webp?b=1&s=170667a&w=0&k=20&c=0xNvLxShc9WVpywkLNm5nIhpegcanWFmqmp3qIMMfRw=",
    "https://media.istockphoto.com/id/1458215547/photo/brown-bear.webp?b=1&s=170667a&w=0&k=20&c=1ADJtvC9wQFy1Arglt8YEDLy-rqU2ZNAYHTongfTJJU=",
   "https://media.istockphoto.com/id/1399799270/photo/extreme-close-up-of-great-white-shark-looking-directly-at-camera-smiling.webp?b=1&s=170667a&w=0&k=20&c=rN6jdN4og6v1UBlYIR3fgg2IjprUeVbKnTyHdiHdGiI=",
    "https://media.istockphoto.com/id/1333977253/photo/male-lion-resting-on-a-rock.webp?b=1&s=170667a&w=0&k=20&c=RtsqEhhNPcCFz3GF8PzddrBbL7s1Sr-r3W9hGP9h9yg=",
    "https://media.istockphoto.com/id/1435255379/photo/marine-iguana-on-a-sandy-beach-on-espanola-island-galapagos-islands-ecuador.webp?b=1&s=170667a&w=0&k=20&c=0xNvLxShc9WVpywkLNm5nIhpegcanWFmqmp3qIMMfRw=","https://images.unsplash.com/photo-1567633090480-f19f2f67c088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1623645481161-0d8160281cbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://media.istockphoto.com/id/1472824601/photo/majestic-wild-horses-in-autumn-in-wyoming.webp?b=1&s=170667a&w=0&k=20&c=8-aXrw531-iWyrfviwur2WHxXA9vKMMhNXWP6qAonhc=",
    "https://media.istockphoto.com/id/1435255379/photo/marine-iguana-on-a-sandy-beach-on-espanola-island-galapagos-islands-ecuador.webp?b=1&s=170667a&w=0&k=20&c=0xNvLxShc9WVpywkLNm5nIhpegcanWFmqmp3qIMMfRw=",
    "https://media.istockphoto.com/id/1458215547/photo/brown-bear.webp?b=1&s=170667a&w=0&k=20&c=1ADJtvC9wQFy1Arglt8YEDLy-rqU2ZNAYHTongfTJJU=",
   "https://media.istockphoto.com/id/1399799270/photo/extreme-close-up-of-great-white-shark-looking-directly-at-camera-smiling.webp?b=1&s=170667a&w=0&k=20&c=rN6jdN4og6v1UBlYIR3fgg2IjprUeVbKnTyHdiHdGiI=",
    "https://media.istockphoto.com/id/1333977253/photo/male-lion-resting-on-a-rock.webp?b=1&s=170667a&w=0&k=20&c=RtsqEhhNPcCFz3GF8PzddrBbL7s1Sr-r3W9hGP9h9yg=",
    "https://media.istockphoto.com/id/1472824601/photo/majestic-wild-horses-in-autumn-in-wyoming.webp?b=1&s=170667a&w=0&k=20&c=8-aXrw531-iWyrfviwur2WHxXA9vKMMhNXWP6qAonhc=",
    "  https://media.istockphoto.com/id/1435255379/photo/marine-iguana-on-a-sandy-beach-on-espanola-island-galapagos-islands-ecuador.webp?b=1&s=170667a&w=0&k=20&c=0xNvLxShc9WVpywkLNm5nIhpegcanWFmqmp3qIMMfRw=",
    "https://media.istockphoto.com/id/1458215547/photo/brown-bear.webp?b=1&s=170667a&w=0&k=20&c=1ADJtvC9wQFy1Arglt8YEDLy-rqU2ZNAYHTongfTJJU=",
    "https://media.istockphoto.com/id/1399799270/photo/extreme-close-up-of-great-white-shark-looking-directly-at-camera-smiling.webp?b=1&s=170667a&w=0&k=20&c=rN6jdN4og6v1UBlYIR3fgg2IjprUeVbKnTyHdiHdGiI=",
     "https://media.istockphoto.com/id/1333977253/photo/male-lion-resting-on-a-rock.webp?b=1&s=170667a&w=0&k=20&c=RtsqEhhNPcCFz3GF8PzddrBbL7s1Sr-r3W9hGP9h9yg=",
     "https://media.istockphoto.com/id/1472824601/photo/majestic-wild-horses-in-autumn-in-wyoming.webp?b=1&s=170667a&w=0&k=20&c=8-aXrw531-iWyrfviwur2WHxXA9vKMMhNXWP6qAonhc=",
     "https://media.istockphoto.com/id/1435255379/photo/marine-iguana-on-a-sandy-beach-on-espanola-island-galapagos-islands-ecuador.webp?b=1&s=170667a&w=0&k=20&c=0xNvLxShc9WVpywkLNm5nIhpegcanWFmqmp3qIMMfRw=","https://images.unsplash.com/photo-1567633090480-f19f2f67c088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1623645481161-0d8160281cbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
]);

  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setImages(updatedImages);
  };
  const [filteredImages, setFilteredImages] = useState(images);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
        setFilteredImages(images);
    } else {
      const filtered = images.filter((image) =>
        image.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredImages(filtered);
;
    }
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <SearchBar handleSearch={handleSearch} />
        {filteredImages.map((src, index) => (
          <DraggableImage key={index} src={src} index={index} moveImage={moveImage} />
        ))}
      </div>
    </DndProvider>
  );
};

export default ImageGallery;
