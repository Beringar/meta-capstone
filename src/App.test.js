import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders Reserve a Table link", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getAllByText(/reserve a table/i);
  expect(linkElement[0]).toBeInTheDocument();
});
