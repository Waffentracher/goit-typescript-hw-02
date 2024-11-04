import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

interface Image {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (id: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <div className={styles.imageGallery}>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          id={image.id}
          url={image.urls.small}
          altDescription={image.alt_description || 'Image'}
          onClick={onImageClick}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
