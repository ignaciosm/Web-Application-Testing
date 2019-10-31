import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App, {addBall} from './App';
import Display from './components/Display'
import Dashboard from './components/Dashboard'

test('balls are displayed', () => {
  const { getByText } = render(<Display />);
  getByText("Balls:");
})

test('strikes are displayed', () => {
  const { getByText } = render(<Display />);
  getByText("Strikes:");
})

// test('sum example', () => {
//   const ballCount = 3;
//   // expect(addBall().toBe(0))
//   console.log('ignacio', addBall.debug())
// })

// test('balls go to 0 after we add one when It is 3', () => {
//   const { getByTestId } = render(<Display />);
//   expect(getByTestId("balls")).toBe("0");
// })


it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />)
});
