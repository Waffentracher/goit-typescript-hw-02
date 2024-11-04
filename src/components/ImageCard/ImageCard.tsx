import React from 'react';
import './ImageCard.module.css';
// Інший код...

interface ImageCardProps {
  id: string;
  url: string;
  altDescription: string;
  onClick: (id: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ id, url, altDescription, onClick }) => {
  return (
    <div className="image-card" onClick={() => onClick(id)}>
      <img src={url} alt={altDescription} />
    </div>
  );
};

export default ImageCard;
