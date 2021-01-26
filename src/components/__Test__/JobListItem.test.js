import React from "react";
import { mount } from "enzyme";
import JobListItem from "../JobListItem";
import { BrowserRouter } from "react-router-dom";

describe("Test JobListItem component", () => {
  const job = { id: "test-id", title: "test-title" };
  it("renders div correctly", () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobListItem key={job.id} job={job} />
      </BrowserRouter>
    );
    expect(wrapper.find("div").hasClass("jobListItem-div")).toBe(true);
  });
  it("renders Link correctly", () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobListItem key={job.id} job={job} />
      </BrowserRouter>
    );
    expect(wrapper.find("Link").prop("to")).toBe(`/${job.id}`);
    expect(wrapper.find("Link").text()).toBe(`${job.title}`);
  });
});
