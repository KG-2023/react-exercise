import PropTypes from 'prop-types';
import Button from './Button';

//Arrow function syntax
const Header = ({ title}) => {  
  const onClick = () => {
    console.log('Test click for the console log');
    alert('Test the onClick prop function inside of the console.');
  }
  return (
    <header>
        <div className='header'>
            <h1 style={{textAlign:'center'}}>To-Do-App</h1>
            <h2 style={headingStyle}>{title}</h2>
            <Button text = 'Add' onClick={onClick}/>
            <Button text = 'Delete' />
            <Button text = 'Info' />
        
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
  backgroundColor: 'aqua'
}

export default Header

