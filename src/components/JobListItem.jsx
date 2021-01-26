import React from "react";
import { Link } from "react-router-dom";

export default function JobListItem({ job }) {
  return (
    <div className="jobListItem-div">
      <Link to={`/${job.id}`}>{job.title}</Link>
    </div>
  );
}
