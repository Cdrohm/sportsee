import { render, screen } from '@testing-library/react';
import App from './App';
import * as axios from "axios";


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// Mock out all top level functions, such as get, put, delete and post:
jest.mock("axios");

// ...

test("good response", () => {
  axios.get.mockImplementation(() => Promise.resolve({ data: {...} }));
  // ...
});

test("bad response", () => {
  axios.get.mockImplementation(() => Promise.reject({ ... }));
  // ...
});