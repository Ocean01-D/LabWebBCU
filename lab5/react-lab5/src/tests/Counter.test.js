import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // thêm matchers cho expect
import Exercise18 from "../components/Exercise18";

test("renders initial count correctly", () => {
  render(<Exercise18 />);
  expect(screen.getByText(/Count:/)).toHaveTextContent("Count: 0");
});

test("increments count when Increment button is clicked", () => {
  render(<Exercise18 />);
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.getByText(/Count:/)).toHaveTextContent("Count: 1");
});

test("decrements count when Decrement button is clicked", () => {
  render(<Exercise18 />);
  fireEvent.click(screen.getByText("Decrement"));
  expect(screen.getByText(/Count:/)).toHaveTextContent("Count: -1");
});

test("resets count when Reset button is clicked", () => {
  render(<Exercise18 />);
  fireEvent.click(screen.getByText("Increment"));
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.getByText(/Count:/)).toHaveTextContent("Count: 2");
  fireEvent.click(screen.getByText("Reset"));
  expect(screen.getByText(/Count:/)).toHaveTextContent("Count: 0");
});
