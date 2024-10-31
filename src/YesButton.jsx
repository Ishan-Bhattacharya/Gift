import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function YesButton() {
    const navigate = useNavigate(); // Get the navigate function

    const handleClick = () => {
        navigate('/page2');
    };

    return (
        <>
         <div style={{ position: 'relative', height: '15vh', width: '50vw' }}>
            <button className="btn-yes" 
            style={{padding: '10px 20px', cursor: 'pointer', backgroundColor: '#69005a' }}
            onClick={handleClick}>Yes</button>
         </div>
        </>
    )

}

export default YesButton