import PropTypes from 'prop-types';

//Arrow function syntax
const Header = ({ title}) => {
  return (
    <div>
        <header>
            <h1 style={{textAlign:'center'}}>To-Do-App</h1>
            <h2 style={{textAlign:'center'}}>{title}</h2>
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

export default Header

