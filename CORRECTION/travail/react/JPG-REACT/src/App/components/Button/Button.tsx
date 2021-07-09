import React from 'react';
import styles from './Button.module.css';
interface ButtonProps{
  text:string,
  bgcolor?:string
}
const Button = (props:ButtonProps) => (
  <button className={styles.Button} data-testid="Button" style={{backgroundColor:props.bgcolor}}>
    {props.text}
  </button>
);

export default Button;
