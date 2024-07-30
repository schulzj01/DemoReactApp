import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

//Verify the App component properly loads
describe('App', () => {
  it('renders the App component', () => {
    render(<App />);
    //screen.debug(); // prints out the jsx in the App component unto the command line
  });
});

//Example tests
describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});
