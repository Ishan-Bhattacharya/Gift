import React from "react";
import Page3 from "./Page3";
import { useNavigate } from "react-router-dom";

export default function Booboolink() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/page3');
    };

    return (
        <div>
            <button className="next" style={{padding: '10px 20px', cursor: 'pointer', backgroundColor: '#69005a' }} onClick={handleClick}>Yes</button>
        </div>
    );
}