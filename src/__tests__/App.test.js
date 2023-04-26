import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the navigation bar", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const navBarElement = screen.getByTestId("nav-bar");
    expect(navBarElement).toBeInTheDocument();
  });

  it("renders the home page by default", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const homePageElement = screen.getByText(/Welcome to the Home page/i);
    expect(homePageElement).toBeInTheDocument();
  });
});