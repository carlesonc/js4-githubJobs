import React from "react";

export default function JobDetailItem({ jobDetails }) {
  function createMarkup() {
    return { __html: jobDetails.description };
  }

  return (
    <>
      <div
        className="jobDetailItem-div"
        style={{ margin: 15, padding: 10, borderWidth: 2, borderColor: "black", borderStyle: "outset" }}
      >
        <h2>{jobDetails.title}</h2>
        <strong>{jobDetails.type}</strong>
        <br />
        <a href={jobDetails.company_url}>{jobDetails.company}</a>
        <br />
        <div dangerouslySetInnerHTML={createMarkup()} />
        <br />
        <a href={jobDetails.url}>Visit original job listing</a>
        <img src={jobDetails.company_logo} alt="Company Logo" style={{ maxWidth: "80vw" }} />
      </div>
    </>
  );
}
