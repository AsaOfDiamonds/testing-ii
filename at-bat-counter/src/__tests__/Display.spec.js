import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from '../components/Display.js';
import Dashboard from "../components/Dashboard";

describe('<Display /> tests', () => {
  it('should display balls and strikes', () => {
    const { getByText } = render(<Display />);

    const balls = getByText(/Balls/i);
    const strikes = getByText(/Strikes/i);
    const fouls = getByText(/Fouls/i);

    expect(balls).toBeInTheDocument();
    expect(strikes).toBeInTheDocument();
    expect(fouls).toBeInTheDocument();

  });

  // it('should display balls, fouls, and strikes set to 0 when press the hit button', () => {
  //   const { getByText, getByTestId } = render(<Display />, <Dashboard />);

  //   const balls = getByText(/Balls/i);
  //   const strikes = getByText(/Strikes/i);
  //   const fouls = getByText(/Fouls/i);
  //   const hitBtn = getByTestId('hit-btn');

  //   fireEvent.click(hitBtn);

  //   expect(balls).toHaveTextContent(/0/i);
  //   // expect(strikes).toHaveTextContent(/0/i);
  //   // expect(fouls).toHaveTextContent(/0/i);
  // })
}); 
