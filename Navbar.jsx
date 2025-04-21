import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <h1>India Travel Explorer</h1>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/destinations" className="nav-link" onClick={() => setIsOpen(false)}>
              Destinations
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/things-to-do" className="nav-link" onClick={() => setIsOpen(false)}>
              Things to Do
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hotels" className="nav-link" onClick={() => setIsOpen(false)}>
              Hotels
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 