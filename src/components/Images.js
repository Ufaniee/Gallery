import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const DraggableImage = ({ src, index, moveImage }) => {
  const [, ref] = useDrag({
    type: ItemTypes.IMAGE,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.IMAGE,
    hover: (draggedImage) => {
      if (draggedImage.index !== index) {
        moveImage(draggedImage.index, index);
        draggedImage.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} style={{ display: 'inline-block', padding: '10px' }}>
      <img src={src} alt={`Image ${index}`} width={300} height={300} />
    </div>
  );
};

export default DraggableImage;
