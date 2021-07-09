import React from 'react';
import styles from './ValuesViewer.module.css';

const ValuesViewer = (props:{values:number[]}) => (
  <div className={styles.ValuesViewer} data-testid="ValuesViewer">
    ValuesViewer Component
  </div>
);

export default ValuesViewer;
