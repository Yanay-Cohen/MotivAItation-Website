import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css'; // we’ll extract the styles here

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <p>© {new Date().getFullYear()} MotivAItion. All rights reserved.</p>
      <nav>
        <Link to="/download" className="footer-link">Download</Link> |{' '}
        <Link to="/contact" className="footer-link">Contact</Link> |{' '}
        <Link to="/privacy" className="footer-link">Privacy Policy</Link> |{' '}
        <Link to="/terms" className="footer-link">Terms of Service</Link>
      </nav>
    </motion.footer>
  );
}
