import React from "react";
import { shallow } from "../../enzyme";
import Quotes from "../Quotes";

describe("Quotes tests", () => {
  it("renders quotes", () => {
    const quote = "something something";
    const author = "Valaki";
    const handleClick = () => {
      console.log("handle click");
    };
    const wrapper = shallow(
      <Quotes quote={quote} author={author} handleClick={handleClick} />
    );
    console.log(wrapper.debug());

    // Expect the wrapper object to be defined
    expect(wrapper.exists(".quote")).toBe(true);
    expect(wrapper.exists(".author")).toBe(true);
  });
});
