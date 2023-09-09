import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; RBSL-2023</p>
        {/* <a href='/version'>App Version 1.0.0.0</a> */}
        <Link  to='/version'>App Version</Link>
    </footer>
  )
}

export default Footer