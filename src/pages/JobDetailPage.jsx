import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContextProvider";
import JobDetailItem from "../components/JobDetailItem";
import { Link } from "react-router-dom";

export default function JobDetailPage(props) {
  const { jobContext } = useContext(SearchContext);
  const id = props.match.params.id;

  const jobDetails = Object.values(jobContext)
    .flat()
    .find((i) => i.id === id);

  return (
    <>
      <Link to={`/js4-githubJobs/`}>Go Back</Link>
      {jobDetails ? <JobDetailItem jobDetails={jobDetails} /> : <p>Something went wrong, please try again.</p>}
    </>
  );
}
