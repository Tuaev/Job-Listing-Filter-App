import React, { useState, useEffect } from 'react';

import JobCard from './components/JobCard/JobCard.js';
import data from './assets/data';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  return (
    <div className="bg-blue-100">
      <h1 className="text-4xl">APP</h1>
      {jobs.length === 0 ? (
        <p>Loading...</p>
      ) : (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      )}
    </div>
  );
}

export default App;
