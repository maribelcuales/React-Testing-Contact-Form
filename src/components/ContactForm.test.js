import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders Contact Form without crashing", () => {
  render(<ContactForm />);
});

test("input labels are visible", () => {
  const { getByText } = render(<ContactForm />);
  
  expect(getByText(/First Name/i)).toBeVisible();
  expect(getByText(/Last Name/i)).toBeVisible();
  expect(getByText(/email/i)).toBeVisible();
  expect(getByText(/message/i)).toBeVisible();
}); 

