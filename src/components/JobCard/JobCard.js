import React, { useState } from 'react';
// import styles from './JobCardStyles.js';

const JobCard = ({ job }) => {
  // const { classes, jobs } = props;
  const langAndTools = [...job.languages, ...job.tools];
  // console.log(langAndTools);
  return (
    <div className="flex bg-white shadow-md m-4 p-6">
      <div>
        <img src={job.logo} alt={job.company}></img>
      </div>
      <div className="flex flex-col justify-between ml-5">
        <h3 className="font-bold text-teal-500">{job.company}</h3>
        <h2 className="font-bold text-xl">{job.position}</h2>
        <p className="text-gray-500">
          {job.postedAt} &#183; {job.contract} &#183; {job.location}
        </p>
      </div>
      <div className="flex items-center ml-auto">
        {langAndTools &&
          langAndTools.map((langAndTool, i) => (
            <span className="text-teal-500 bg-blue-100 m-1 p-2 rounded text-sm font-bold" key={i}>
              {langAndTool}
            </span>
          ))}
      </div>
    </div>
  );
};

export default JobCard;

// "id": 8,
//     "company": "Insure",
//     "logo": "./images/insure.svg",
//     "new": false,
//     "featured": false,
//     "position": "Junior Frontend Developer",
//     "role": "Frontend",
//     "level": "Junior",
//     "postedAt": "2w ago",
//     "contract": "Full Time",
//     "location": "USA Only",
//     "languages": ["JavaScript"],
//     "tools": ["Vue", "Sass"]
