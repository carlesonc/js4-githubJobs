import React from "react";
import { mount, shallow } from "enzyme";
import JobDetailItem from "../JobDetailItem";

describe("Test JobDetailItem component", () => {
  const jobDetails = {
    description: "test-description",
    title: "test-title",
    type: "test-type",
    company_url: "test-company_url",
    url: "test-url",
    company: "test-company",
    company_logo: "test-company_logo",
  };
  it("renders div correctly", () => {
    const wrapper = mount(<JobDetailItem jobDetails={jobDetails} />);
    expect(wrapper.find("div").first().prop("style")).toHaveProperty(
      "margin",
      15,
      "padding",
      10,
      "borderWidth",
      2,
      "borderColor",
      "black",
      "borderStyle",
      "outset"
    );
  });
  it("renders h2 correctly", () => {
    const wrapper = shallow(<JobDetailItem jobDetails={jobDetails} />);
    expect(wrapper.find("h2").text()).toBe(`${jobDetails.title}`);
  });
  it("renders strong correctly", () => {
    const wrapper = shallow(<JobDetailItem jobDetails={jobDetails} />);
    expect(wrapper.find("strong").text()).toBe(`${jobDetails.type}`);
  });
  it("renders a with company_url correctly", () => {
    const wrapper = shallow(<JobDetailItem jobDetails={jobDetails} />);
    expect(wrapper.find("a").first().prop("href")).toBe(`${jobDetails.company_url}`);
    expect(wrapper.find("a").first().text()).toBe(`${jobDetails.company}`);
  });
  it("renders div with description correctly", () => {
    const wrapper = mount(<JobDetailItem jobDetails={jobDetails} />);
    expect(wrapper.find("div").last().text()).toBe("test-description");
  });
  it("renders a with url correctly", () => {
    const wrapper = shallow(<JobDetailItem jobDetails={jobDetails} />);
    expect(wrapper.find("a").last().prop("href")).toBe(`${jobDetails.url}`);
    expect(wrapper.find("a").last().text()).toBe(`Visit original job listing`);
  });
  it("renders img correctly", () => {
    const wrapper = shallow(<JobDetailItem jobDetails={jobDetails} />);
    expect(wrapper.find("img").last().prop("src")).toBe(`${jobDetails.company_logo}`);
  });
});
