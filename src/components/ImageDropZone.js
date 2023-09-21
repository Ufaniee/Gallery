import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageDropZone = ({ onImageDrop }) => {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle dropped files here
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      onImageDrop(file);
    }
  }, [onImageDrop]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    
    <div
      {...getRootProps()}
      className={`dropzone ${isDragActive ? 'active' : ''}`}
    >
      <button>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the image here...</p>
      ) : (
        <p>Drag and drop an image here, or click to select one</p>
      )}
      </button>
      
    </div>
  );
};

export default ImageDropZone;
