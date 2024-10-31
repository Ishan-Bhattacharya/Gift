import React from "react";
import { useNavigate} from "react-router-dom";

export default function Fancy() {
const navigate = useNavigate();

const handleClick = () => {
    navigate('/page4');
};

    return (
        <div>
          <button className="animation" style={{padding: '10px 20px', cursor: 'pointer', backgroundColor: '#69005a' }} onClick={handleClick}>Click this button then</button>
        </div>
    )
}