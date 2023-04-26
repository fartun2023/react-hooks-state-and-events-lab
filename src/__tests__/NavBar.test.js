import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

test("renders three links", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  const links = screen.getAllByRole("link");
  expect(links).toHaveLength(3);
  expect(links[0]).toHaveTextContent("Home");
  expect(links[1]).toHaveTextContent("About");
  expect(links[2]).toHaveTextContent("Projects");
});