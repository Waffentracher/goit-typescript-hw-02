import React from 'react';
import styles from './ImageCard.module.css';

interface ImageCardProps {
  id: string;
  url: string;
  altDescription: string;
  onClick: (id: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ id, url, altDescription, onClick }) => {
  return (
    <div className={styles.imageCard} onClick={() => onClick(id)}>
      <img src={url} alt={altDescription} className={styles.image} />
    </div>
  );
};

export default ImageCard;