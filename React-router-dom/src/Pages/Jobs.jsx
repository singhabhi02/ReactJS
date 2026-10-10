import React from "react";
import { Link } from "react-router-dom";

const Jobs = () => {
  const Jobs = [
    {
      id: 101,
      title: "Software Developer",
      company: "Infosys",
      location: "Mumbai",
    },
    {
      id: 102,
      title: "Backend Developer",
      company: "Apple",
      location: "America",
    },
    {
      id: 103,
      title: "Frontend Developer",
      company: "Wipro",
      location: "Pune",
    },
    {
      id: 104,
      title: "Mechanical Engineer",
      company: "Tata Motors",
      location: "Bangalore",
    },
  ];
  return (
    <div>
      <h1>Available Jobs</h1>

      {Jobs.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location}</p>

          <Link to={`/jobs/${job.id}`}> View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
