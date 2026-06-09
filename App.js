import React, { useState } from 'react';

function App() {
  const [travel, setTravel] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [footprint, setFootprint] = useState(0);

  const calculateFootprint = () => {
    // Simple formula example (customize as needed)
    const total = (travel * 0.2) + (energy * 0.5);
    setFootprint(total);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Carbon Footprint Calculator</h1>
      <div>
        <label>Monthly Travel (km): </label>
        <input
          type="number"
          value={travel}
          onChange={(e) => setTravel(e.target.value)}
        />
      </div>
      <div>
        <label>Monthly Energy Use (kWh): </label>
        <input
          type="number"
          value={energy}
          onChange={(e) => setEnergy(e.target.value)}
        />
      </div>
      <button onClick={calculateFootprint}>Calculate</button>
      <h2>Your Carbon Footprint: {footprint.toFixed(2)} kg CO₂/month</h2>
    </div>
  );
}

export default App;
