import PropTypes from 'prop-types'
import './Button.css'




const Button = (props: { text: string, backColor?: string, clickEvt: Function, style?:{} }) => {
    return (
        <button className="mon-button" 
            style={{...props.style, backgroundColor: props.backColor}}
            onClick={(evt) => {
                console.log(evt);
                props.clickEvt(props.text);
            }}
        >{props.text}</button>
    );
};

// controle sur les types
Button.propTypes = {
    text: PropTypes.string.isRequired,
    backColor: PropTypes.string.isRequired,
    clickEvt: PropTypes.func.isRequired,        
};

Button.defaultProps = {
    backColor: 'green',
    clickEvt: (text: string) => { console.log(text); }
};


export default Button;
