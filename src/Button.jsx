import React, { useState } from 'react';

function Button() {
  const [visible, setVisible] = useState(true);

  const handleMouseEnter = () => {
    setVisible(false);
  };

  return (
    <div style={{ position: 'relative', height: '15vh', width: '50vw' }}>
      {visible && (
        <button
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.1s ease-in',
            backgroundColor: '#69005a',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = 0)}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
        >
          No
        </button>
      )}
    </div>
  );
}

export default Button;
