import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Values from './Values';

describe('<Values />', () => {
  test('it should mount', () => {
    render(<Values />);
    
    const values = screen.getByTestId('Values');

    expect(values).toBeInTheDocument();
  });
});