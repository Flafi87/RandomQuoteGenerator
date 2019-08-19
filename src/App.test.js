import React from "react";
import { create } from "react-test-renderer";
import Quotes from "./components/Quotes";
import App from "./components/App";

// eslint-disable-next-line prettier/prettier
describe('Quotes snapshot test', () => {
  test("testing Quotes", () => {
    const tree = create(<Quotes />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe("App snapshot test", () => {
  test("testing App", () => {
    const tree = create(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
