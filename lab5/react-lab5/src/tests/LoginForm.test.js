import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Exercise19 from "../components/Exercise19";

test("renders form with empty inputs initially", () => {
  render(<Exercise19 />);
  expect(screen.getByLabelText(/Email/i)).toHaveValue("");
  expect(screen.getByLabelText(/Password/i)).toHaveValue("");
});

test("shows error when inputs are invalid", () => {
  render(<Exercise19 />);
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "invalid" } });
  fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: "123" } });
  fireEvent.click(screen.getByRole("button", { name: /submit/i }));
  expect(screen.getByText("Invalid input")).toBeInTheDocument();
});

test("disables submit button when fields are empty", () => {
  render(<Exercise19 />);
  expect(screen.getByRole("button", { name: /submit/i })).toBeDisabled();
});

test("submits successfully with valid input", () => {
  render(<Exercise19 />);
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "test@example.com" } });
  fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: "12345" } });
  fireEvent.click(screen.getByRole("button", { name: /submit/i }));
  expect(screen.getByText("Login successful!")).toBeInTheDocument();
});
