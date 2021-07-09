import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Values} from './Values';

describe('un composant <Values />', () => {
  test('ValuesFrom it should mount', () => {
    render(<Values  values={[1,2]} addValue={()=>{}} deleteValue={()=>{}} />);
    const valuesForm = screen.getByTestId('ValuesFrom');
    expect(valuesForm).toBeInTheDocument();

  });
  test('ValuesViewer should be mount',()=>{
    render(<Values  values={[1,2,3]} addValue={()=>{}} deleteValue={()=>{}} />);
    const valuesViewer = screen.getByTestId('ValuesViewer');
    expect(valuesViewer).toBeInTheDocument();
    const valuestr1 = screen.getByTestId('tab-val-0');
    expect(valuestr1).toBeInTheDocument();
    const valuestr2 = screen.getByTestId('tab-val-1');
    expect(valuestr1).toBeInTheDocument();
    const valuebody = screen.getByTestId('tab-body').children;
    expect(valuebody).toHaveLength(2);
  })
});