import React from 'react'

const Button = ({color, btnText}) => {

  return <button style = {{backgroundColor: color}} className='btn'>{btnText}</button>
  
}

Button.defaultProps = {
  color: 'green',
}


export default Button