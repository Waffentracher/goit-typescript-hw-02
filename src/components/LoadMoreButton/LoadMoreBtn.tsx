import React from 'react';
import './LoadMoreBtn.module.css';
interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className="load-more-btn" onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
