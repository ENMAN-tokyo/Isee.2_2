import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import ic_logo_2 from "../image/ic_logo_2.png"

function PreHome() {
  const navigate = useNavigate(); 

  const handleLogin = () => {
    navigate("/pre-questionnaire");
  };

  return (
    <div className="home-container">
      <img src={ic_logo_2} alt="ic" className="ic" />
      
      <h2 className="title">家族がもめる確率診断</h2>

      <button className="consult-button" onClick={handleLogin}>
        診断する
      </button>
    </div>
  );
}

export default PreHome;