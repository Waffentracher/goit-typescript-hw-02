import React from 'react';
import styles from './ImageModal.module.css';

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  altDescription: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageUrl, altDescription, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.imageModal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt={altDescription} className={styles.modalImage} />
        <button onClick={onClose} className={styles.closeButton}>×</button>
      </div>
    </div>
  );
};

export default ImageModal;
