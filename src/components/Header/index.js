import {Link} from 'react-router-dom'

const Header = () => (
  <ul className="nav-items-container">
    <li>
      <Link className="nav-links" to="/">
        Home
      </Link>
    </li>
    <li>
      <Link className="nav-links" to="/about">
        About
      </Link>
    </li>
    <li>
      <Link className="nav-links" to="/contact">
        Contact
      </Link>
    </li>
  </ul>
)

export default Header
