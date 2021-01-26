import React from "react";
import { mount, shallow } from "enzyme";
import InputComponent from "../InputComponent";

describe("Test InputComponent.jsx", () => {
  it("it renders a div", () => {
    const wrapper = shallow(<InputComponent />);
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("it renders label correctly", () => {
    const wrapper = shallow(<InputComponent />);
    expect(wrapper.find("label").text()).toBe("Search for a job: ");
  });

  it("it renders input correctly", () => {
    const wrapper = mount(<InputComponent />);
    expect(wrapper.find("input").prop("placeholder")).toBe("Your job here...");
  });

  it("it renders button correctly", () => {
    const wrapper = shallow(<InputComponent />);
    expect(wrapper.find("button").text()).toBe("🔍");
  });
});
