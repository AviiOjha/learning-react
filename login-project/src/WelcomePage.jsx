import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const [counter, setCounter] = useState(15)

  const incCounter = () => {
    if(counter != 20){
    setCounter(counter + 1)
    }
  }

  const decCounter = () => {
    if(counter != 0){
    setCounter(counter - 1)
    }
  }

  return (
    <div className="welcome-container">
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <h1>Welcome!</h1>
    </div>
  );
};

export default WelcomePage;
