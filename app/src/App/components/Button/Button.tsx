import PropTypes from 'prop-types'
import './Button.css'

// si on declare une classe à la place d'une interface pour definir les props
// elle sera transpilée pour rien,
// avec interface pas de génération de code inutile
interface ButtonProps {
    /**
     * text du bouton
     */
    text: string,
    clickEvt: Function,
    backColor?: string,
    style?: {}
}


const Button = (props:ButtonProps) => {
    return (
        <button className="mon-button" 
            style={{...props.style, backgroundColor: props.backColor}}
            onClick={(evt) => {
                console.log(evt);
                props.clickEvt(props.text);
            }}
            data-test-id="MonButton"
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
