import React, { useState, useEffect } from 'react';
import JobCard from './components/JobCard/JobCard.js';
import jobData from './assets/data';

function App() {
  const [data, setData] = useState(jobData);
  console.log(data);

  return (
    <div className="App">
      <h1>APP</h1>
      <JobCard />
    </div>
  );
}

export default App;
