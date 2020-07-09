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

test("Input data in form inputs", () => {
  const { getByLabelText } = render(<ContactForm />);

  const firstNameInput = getByLabelText(/First Name*/i);
  const lastNameInput = getByLabelText(/Last Name*/i);
  const emailInput = getByLabelText(/Email*/i);  
  const messagesInput = getByLabelText(/Message/i);

  fireEvent.change(firstNameInput, {target: { value: 'dae' }});
  fireEvent.change(lastNameInput, {target: { value: 'targaryen' }});
  fireEvent.change(emailInput, {target: { value: 'dtargaryen@email.com' }});
  fireEvent.change(messagesInput, {target: { value: 'Order pizza in Westeros' }});

  expect(firstNameInput.value).toBe('dae');
  expect(lastNameInput.value).toBe('targaryen');
  expect(emailInput.value).toBe('dtargaryen@email.com');
  expect(messagesInput.value).toBe('Order pizza in Westeros');
});

test("first name input is required", () => {
  const { getByTestId } = render(<ContactForm />);
  expect(getByTestId(/first-name/i)).toBeRequired();
});

test("last name and email inputs are required", () => {
  const { getByTestId } = render(<ContactForm />);
  expect(getByTestId(/last-name/i)).toBeRequired();
  expect(getByTestId(/email/i)).toBeRequired();
});


test("email input type should be email", () => {
  const { getByTestId } = render(<ContactForm />);

  const emailInput = getByTestId(/Email/i);  
  
  expect(emailInput).toHaveAttribute('type', 'email')
});


