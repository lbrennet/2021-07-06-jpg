import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'


const Button = (props:{text:string, backColor?:string}) => {
    return (
        <button className="mon-button" style={{backgroundColor:props.backColor}}>{props.text}</button>
    );
};


Button.propTypes = {

};


export default Button;
