import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import ButtonLink from "../../../src/components/UI/ButtonLink";

describe("ArrowLinkButton component", () => {
  it("It should render a link button with arrow svg", () => {
    render(
      <BrowserRouter>
        <ButtonLink text="link" path="/" />
      </BrowserRouter>
    );
    const text = screen.getByText("link");
    expect(text).toBeDefined();
  });
});
