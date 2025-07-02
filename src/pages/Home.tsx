import './Home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="home-wrapper">
      <motion.section
        className="hero-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero" />
        <h1>
          Welcome to{' '}
          <span className="highlight">
            Motiv
            <span className="ai-highlight">AI</span>
            tion
          </span>
        </h1>
        <p className="uvp">Daily drive. Long-term goals. AI-powered motivation.</p>
        <Link to="/download" className="cta-button">
          Get Started
        </Link>
      </motion.section>

      <motion.section
        className="features-preview"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2>What MotivAItion Helps You Do</h2>
        <div className="features-grid">
          <motion.div
            className="feature-item"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="feature-icon">🎯</div>
            <h3>Set Smart Goals</h3>
            <p>Break down your big dreams into manageable steps with AI-assisted planning.</p>
          </motion.div>
          <motion.div
            className="feature-item"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="feature-icon">⏰</div>
            <h3>Stay on Track</h3>
            <p>Daily reminders and motivational prompts to keep you moving forward.</p>
          </motion.div>
          <motion.div
            className="feature-item"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="feature-icon">🏆</div>
            <h3>Celebrate Progress</h3>
            <p>Track milestones, log achievements, and reward yourself as you grow.</p>
          </motion.div>
        </div>
      </motion.section>
      <motion.footer
  className="footer"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.2 }}
>
  <p>© {new Date().getFullYear()} MotivAItion. All rights reserved.</p>
  <nav>
    <Link to="/download" className="footer-link">Download</Link> |{' '}
    <Link to="/contact" className="footer-link">Contact</Link> |{' '}
    <Link to="/privacy" className="footer-link">Privacy Policy</Link> |{' '}
    <Link to="/terms" className="footer-link">Terms of Service</Link>
  </nav>
</motion.footer>

    </main>
  );
}
