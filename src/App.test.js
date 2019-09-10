import React from "react";
import { create } from "react-test-renderer";
import Quotes from "./components/Quotes";
import App from "./components/App";

// eslint-disable-next-line prettier/prettier
describe('Quotes snapshot test', () => {
  test("testing Quotes", () => {
    const quote = "something something";
    const author = "Valaki";
    const handleClick = () => {
      console.log("handle click");
    };
    const tree = create(
      <Quotes quote={quote} author={author} handleClick={handleClick} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe("App snapshot test", () => {
  test("testing App", () => {
    const tree = create(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
