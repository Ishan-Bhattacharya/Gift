import React, { useState, useEffect } from 'react';

function Cat() {
  const [emojiIndex, setEmojiIndex] = useState(0);

  const emojis = ["😺", "😸", "😽", "😻"];
  const transitionDuration = 500; // Duration in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
    }, transitionDuration + 200); // Interval slightly longer than transition for a smooth loop

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        bottom: '30px',
        fontSize: '200px',
        transition: `opacity ${transitionDuration}ms ease-in-out`,
        opacity: 1,
        display: 'inline-block',
        animation: `fade ${transitionDuration}ms ease-in-out infinite`,
      }}
    >
      {emojis[emojiIndex]}
    </div>
  );
}

export default Cat;
