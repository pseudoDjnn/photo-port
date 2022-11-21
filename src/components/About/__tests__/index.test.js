import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

describe("About component", () => {
  // FIRST
  it("renders", () => {
    render(<About />);
  });

  // SECOND
  it("matches snapsot DOM node structure", () => {
    // RENDER ABOUT
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
