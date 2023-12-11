// Components/DetailView.tsx
import React, { useState } from 'react';

interface DetailViewProps {
  onClose: () => void;
  title: string;
  content: string;
}

const DetailView: React.FC<DetailViewProps> = ({ onClose, title, content }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="detail-view-container">
      <h2>{title}</h2>
      <div>
        {showFullContent ? (
          <p>{content}</p>
        ) : (
          <p>{content.length > 200 ? `${content.slice(0, 200)}...` : content}</p>
        )}
        {content.length > 200 && (
          <button onClick={toggleContent}>{showFullContent ? 'Read Less' : 'Read More'}</button>
        )}
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default DetailView;
