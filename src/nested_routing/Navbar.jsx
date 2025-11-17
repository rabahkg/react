import React from 'react'
import './nav.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => (setMenuOpen)

  return (
    <nav>
      {/* logo  */}
      <NavLink to='/' className="logo">
        MyWebsite
      </NavLink>

      {/* hamburger menu icon  */}
      <div className='memu-icon' onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>

      </div>
      {/* nav links */}
      <ul className={menuOpen ? "show" : ""}>
        {/* home  */}
        <li>
          <navLink to='/' className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setMenuOpen(false)}>
            home
          </navLink>
       </li>
<li>
          <navLink to='/about' className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setMenuOpen(false)}>
            About
          </navLink>
           </li>

           {/* services */}

          <li>
          <navLink to='/services' className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setMenuOpen(false)}>
            Services
          </navLink>
           </li>
      </ul>
    </nav>
  )
}

export default Navbar
