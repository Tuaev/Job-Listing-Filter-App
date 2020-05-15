import React, { useState } from 'react';

const JobCard = ({ job }) => {
  return (
    <div>
      <h2>{job.position}</h2>
    </div>
  );
};

export default JobCard;
