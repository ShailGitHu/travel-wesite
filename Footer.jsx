import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>India Travel Explorer</h3>
          <p>Your guide to exploring the best of India's destinations, activities, and accommodations.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/things-to-do">Things to Do</Link></li>
            <li><Link to="/hotels">Hotels</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Popular Destinations</h4>
          <ul className="footer-links">
            <li><Link to="/destinations/delhi">Delhi</Link></li>
            <li><Link to="/destinations/mumbai">Mumbai</Link></li>
            <li><Link to="/destinations/goa">Goa</Link></li>
            <li><Link to="/destinations/kerala">Kerala</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} India Travel Explorer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 