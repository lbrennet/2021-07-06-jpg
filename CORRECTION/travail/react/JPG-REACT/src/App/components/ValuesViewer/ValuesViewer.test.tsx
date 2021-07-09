import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ValuesViewer from './ValuesViewer';

describe('<ValuesViewer />', () => {
  test('it should mount', () => {
    render(<ValuesViewer />);
    
    const valuesViewer = screen.getByTestId('ValuesViewer');

    expect(valuesViewer).toBeInTheDocument();
  });
});