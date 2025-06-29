import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/logo.png'; // use updated logo

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="MotivAItion Logo" className="logo-img" />
        </Link>
      </div>
      <div className="navbar-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/pricing" className="nav-link">Pricing</Link>
        <Link to="/download" className="nav-link">Download</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
      <div className="navbar-right">
        <div className="account-icon" />
      </div>
    </nav>
  );
}
