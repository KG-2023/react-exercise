import PropTypes from 'prop-types';
import Button from './Button';

//Arrow function syntax
const Header = ({ title, onAdd, showAdd}) => {  
  const onClick = () => {
    console.log('Test click for the console log');
    alert('Test the onClick prop function inside of the console.');
  }
  return (
    <header>
        <div className='header'>
            {/* <h1 style={{textAlign:'center'}}></h1> */}
            <h2 style={headingStyle}>{title}</h2>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
           
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
 
}

export default Header

