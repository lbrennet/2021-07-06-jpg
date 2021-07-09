// import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'
/**
 * interface des props pour mon Button
 */
interface ButtonProps {
    /**
     * contenu text du benjamin
     */
   text: string,
   clickEvt: Function,
   backColor?: string, 
   style?:{} 
}
const Button = (props:ButtonProps ) => {
    return (
        <button className="mon-button"
            style={{...props.style, backgroundColor: props.backColor }}
            onClick={(evt) => {
                console.log(evt);
                props.clickEvt(props.text);
            }} >{props.text}</button>
    );
};

//
Button.propTypes = {
    text: PropTypes.string.isRequired,
    backColor: PropTypes.string,
    clickEvt: PropTypes.func.isRequired
};
//
Button.defaultProps = {
    backColor: 'green',
    clickEvt: (text: string) => {
        console.log('button cliecked -->' + text);
    }
};

export default Button;
