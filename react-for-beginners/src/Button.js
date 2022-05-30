import PropTypes from "prop-types";
import styled from "./Button.module.css";

function Button({ text, onClick }){
    return <button onClick={onClick} className={styled.btn}>{ text }</button>
}

// isRequired : prop이 제공되지 않았을때 경고가 보이도록
Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;