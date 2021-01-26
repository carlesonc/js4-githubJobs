import React, { useState } from "react";

import InputComponent from "../components/InputComponent";
import JobListItem from "../components/JobListItem";

export default function JobListPage() {
  const [jobList, setJobList] = useState(null);

  return (
    <div>
      <InputComponent jobList={jobList} setJobList={setJobList} />
      {jobList &&
        (jobList.length > 0 ? (
          jobList.map((job) => {
            return <JobListItem key={job.id} job={job} />;
          })
        ) : (
          <h2>No jobs found.</h2>
        ))}
    </div>
  );
}
