// Heart.jsx
import React from 'react';
import './Heart.css';

const Heart = ({ position }) => {
  return (
    <div className="heart" style={{ left: position }}>
      ❤️
    </div>
  );
};

export default Heart;
