import React from 'react';
// import styles from './JobCardStyles.js';

const JobCard = ({ job, handleTagClick }) => {
  const jobTags = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <div
      className={`flex flex-col lg:flex-row bg-white shadow-lg my-16 lg:my-8 mx-8 p-6 rounded ${
        job.featured && 'border-l-4 border-teal-500 border-solid'
      }`}
    >
      <div>
        <img
          className="w-20 h-20 lg:w-24 lg:h-24 -mt-16 mb-4 lg:mt-0 lg:mb-0"
          src={job.logo}
          alt={job.company}
        ></img>
      </div>
      <div className="flex flex-col justify-between lg:ml-4">
        <h3 className="text-teal-500">
          <span className="mr-3 font-semibold">{job.company}</span>
          {job.new && (
            <span className="font-medium text-sm rounded-full py-1 px-2 m-1 bg-teal-600 text-blue-100">
              NEW!
            </span>
          )}
          {job.featured && (
            <span className="font-medium text-sm rounded-full py-1 px-2 m-1 bg-gray-900 text-blue-100">
              FEATURED
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl my-2 lg:my-0 hover:text-teal-500 cursor-pointer">
          {job.position}
        </h2>
        <div className="text-gray-500 font-light">
          <span className="lg:pr-3 pr-1">{job.postedAt}</span>
          <span className="lg:pr-3 pr-1 font-black">&#183; </span>
          <span className="lg:pr-3 pr-1">{job.contract}</span>
          <span className="lg:pr-3 pr-1 font-black">&#183; </span>
          <span>{job.location}</span>
        </div>
      </div>
      <div className="flex flex-wrap items-center mr-4 mt-6 pt-4 border-t border-gray-500 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0">
        {jobTags &&
          jobTags.map((jobTag, i) => (
            <span
              className="cursor-pointer text-teal-500 hover:text-blue-100 hover:bg-teal-500 bg-blue-100 mr-4 my-2 p-2 rounded text-sm font-bold"
              key={i}
              onClick={() => handleTagClick(jobTag)}
            >
              {jobTag}
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
