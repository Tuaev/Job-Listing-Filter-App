import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import JobCard from './components/JobCard/JobCard.js';
import data from './assets/data';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const filteredJobs = jobs.filter((job) => {
    if (filters.length === 0) {
      return true;
    }
    const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
    return jobTags.some((tag) => filters.includes(tag));
  });

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) {
      return;
    }
    return setFilters([...filters, tag]);
  };

  const removeFilterTag = (tag) => {
    setFilters(filters.filter((f) => f !== tag));
  };
  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <React.Fragment>
      <header className="bg-teal-500 mb-24">
        <img className="object-cover h-48 w-full " src="/images/bg-header-desktop.svg" alt="" />
      </header>
      <div className="container m-auto">
        {filters.length > 0 && (
          <div
            className={
              'relative flex flex-wrap lg:flex-row bg-white shadow-lg -mt-32 mx-8 p-6 rounded z-5'
            }
          >
            {filters.map((filterTag) => (
              <React.Fragment key={uuid()}>
                <span
                  onClick={() => removeFilterTag(filterTag)}
                  className="cursor-pointer text-teal-500 bg-blue-100 p-2 rounded-l text-sm font-bold"
                >
                  {filterTag}
                </span>
                <span
                  onClick={() => removeFilterTag(filterTag)}
                  className="cursor-pointer hover:bg-gray-900  bg-teal-500 p-2 rounded-r text-sm font-bold mr-3"
                >
                  <img className="mt-1" src="/images/icon-remove.svg" alt="Remove" />
                </span>
              </React.Fragment>
            ))}
            <button
              onClick={() => clearFilters()}
              className="ml-auto font-bold text-gray-600 cursor-pointer hover:underline hover:text-teal-500"
            >
              Clear
            </button>
          </div>
        )}
        {jobs.length === 0 ? (
          <p>Loading...</p>
        ) : (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} handleTagClick={handleTagClick} />
          ))
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
