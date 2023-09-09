import PropTypes from 'prop-types';

const Button = ({color, text, clickEvent}) => {  
 
  return <button 
      onClick={clickEvent} 
      style = {{backgroundColor: color}} 
      className='btn'>
        {text
      }</button>
}

Button.defaultProps = {
  color: 'green',
}

Button.propTypes = {
   text: PropTypes.string,
   color: PropTypes.string,
   onClick: PropTypes.func,
}


export default Button


