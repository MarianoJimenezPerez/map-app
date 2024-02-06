import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

describe("<Header >", () => {
  test("Should render without crash", () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(getByText("Home")).toBeDefined();
    expect(getByText("Devices")).toBeDefined();
  });
});
