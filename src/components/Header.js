import PropTypes from 'prop-types';

//Arrow function syntax
const Header = ({ title}) => {  
  return (
    <div>
        <header>
            <h1 style={{textAlign:'center'}}>To-Do-App</h1>
            <h2 style={headingStyle}>{title}</h2>
        </header>
    </div>
  )
}

// Header.defaultProps = {
//   title: 'Task Tracker'
// }

Header.propTypes = {
  title: PropTypes.string.isRequired
}

const headingStyle = {  
  color: 'blue',
  textAlign: 'center',
  backgroundColor: 'aqua',
}

export default Header

