import React from 'react';
import './ImageModal.module.css';
interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  altDescription: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageUrl, altDescription, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="image-modal" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt={altDescription} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;
