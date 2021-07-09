import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = (props) => {
    return (
        <button type="submit" className="sbutton" style={{
            backgroundColor: props.backColor,
            border: 'none',
            color: 'white',
            fontSize: '32pt',
            fontWeight: '900',
            padding: '5px 10px',
            borderRadius: '8px',
            boxShadow: '10px 10px 25px grey',
            margin: '10px 20px',
        }}>
            { props.children}
        </button >
    );
}


SubmitButton.propTypes = {
    children: PropTypes.node.isRequired,
    backColor:PropTypes.string.isRequired
}

export default SubmitButton;