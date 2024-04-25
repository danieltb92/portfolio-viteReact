import { PropTypes } from 'prop-types'

function Button ({ text }){
    return (
        <a className="button w-fit" href="https://drive.google.com/file/d/18oWUDMiA1A_97Tim8I-doJrXEq76lNwP/view?usp=sharing" download target="_blank" rel="noopener" >
            {text}
        </a>
    )
} 
Button.propTypes = {
    text: PropTypes.string.isRequired
};
export default Button;
