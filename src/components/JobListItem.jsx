import React from "react";
import { Link } from "react-router-dom";

export default function JobListItem({ job }) {
  return (
    <div className="jobListItem-div">
      <Link to={`/js4-githubJobs/${job.id}`}>{job.title}</Link>
    </div>
  );
}
