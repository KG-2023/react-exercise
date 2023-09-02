import PropTypes from 'prop-types';
import Button from './Button';

//Arrow function syntax
const Header = ({ title}) => {  
  return (
    <header>
        <div className='header'>
            <h1 style={{textAlign:'center'}}>To-Do-App</h1>
            <h2 style={headingStyle}>{title}</h2>
            <Button btnText = 'Add' />
            <Button btnText = 'Delete' />
            <Button btnText = 'Info' />
        
        </div>
    </header>
  )
}


Header.propTypes = {
  title: PropTypes.string.isRequired
}

const headingStyle = {  
  color: 'blue',
  textAlign: 'center',
  backgroundColor: 'aqua',
}

export default Header

