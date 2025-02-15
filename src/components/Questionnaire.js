// components/Questionnaire.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background-bw.png';

const Questionnaire = () => {
  const navigate = useNavigate();
  const [selectedHoodie, setSelectedHoodie] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Hoodie:", selectedHoodie);
    navigate('/questionnaire');
  };

  return (
    <section className="questionnaire" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="questionnaire-content">
        <div className="questionnaire-title">
          <h2>Create with us</h2>
        </div>
        <div className="questionnaire-form">
          <p>Which hoodie do you like?</p>
          <form onSubmit={handleSubmit}>
            <label>
              <input type="radio" value="blue" checked={selectedHoodie === 'blue'} onChange={(e) => setSelectedHoodie(e.target.value)} /> Blue
            </label>
            <label>
              <input type="radio" value="yellow" checked={selectedHoodie === 'yellow'} onChange={(e) => setSelectedHoodie(e.target.value)} /> Yellow
            </label>
            <label>
              <input type="radio" value="white" checked={selectedHoodie === 'white'} onChange={(e) => setSelectedHoodie(e.target.value)} /> White
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Questionnaire;