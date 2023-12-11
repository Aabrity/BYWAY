// ScrollableContainer.tsx
import React from 'react';

interface ScrollableContainerProps {
  children: React.ReactNode;
}

const ScrollableContainer: React.FC<ScrollableContainerProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', marginTop: '10px', overflowX: 'auto', width: '100%' }}>
      {children}
    </div>
  );
};

export default ScrollableContainer;
