import { PropTypes } from 'prop-types'

function Button ({ text }){
    return (
        <a className="button w-fit hover:bg-[#04314d]" href="https://cv-portfolio-json-danieltb92s-projects.vercel.app/" download target="_blank" rel="noopener" >
            {text}
        </a>
    )
} 
Button.propTypes = {
    text: PropTypes.string.isRequired
};
export default Button;
