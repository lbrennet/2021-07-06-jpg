import React from 'react';
import PropTypes from 'prop-types';
import  './SubmitButton.css';

const SubmitButton = (props) => {
    return (
        <button type="submit" className="sbutton" style={{
            backgroundColor: props.backColor,
            border: 'none',
            color: 'white',
            fontSize: '18pt',
            fontWeight: '900',
            padding: '3px 6px',
            borderRadius: '8px',
            boxShadow: '10px 10px 25px grey',
            margin: '5px 10px',
        }}>
            { props.children}
        </button >
    );
};


SubmitButton.propTypes = {
    children: PropTypes.node.isRequired,
    backColor: PropTypes.string.isRequired
};
SubmitButton.defaultProps={ backColor: 'green' }

export default SubmitButton;
