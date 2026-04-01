import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import App from "./App";

expect.extend(toHaveNoViolations);

test("renders skip link and primary navigation", async () => {
  render(<App />);

  expect(await screen.findByText(/skip to main content/i)).toBeInTheDocument();
  expect(await screen.findByText(/about/i)).toBeInTheDocument();
  expect(await screen.findByText(/work/i)).toBeInTheDocument();
  expect(await screen.findByText(/contact/i)).toBeInTheDocument();
});

test("app has no basic accessibility violations", async () => {
  const { container } = render(<App />);

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
