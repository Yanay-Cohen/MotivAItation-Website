// src/pages/TermsOfService.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="home-wrapper">
        <div className="w-full bg-[#18181b] rounded-xl shadow-lg px-2 py-4 text-white" style={{ marginTop: '-4rem' }}>
          <h2 className="text-3xl font-bold text-blue-500 mt-8">Terms of Service</h2>
          <p className="text-sm text-gray-400">Last updated: July 2, 2025</p>
          <h2 className="text-xl font-semibold text-blue-500 mt-8">1. Acceptance of Terms</h2>
          <p>By using MotivAItion, you agree to these Terms of Service.</p>
          <h2 className="text-xl font-semibold text-blue-500 mt-8">2. User Responsibilities</h2>
          <p>You are responsible for your account and activity within the app.</p>
          <h2 className="text-xl font-semibold text-blue-500 mt-8">3. App Usage</h2>
          <p>You may use MotivAItion for personal, non-commercial purposes. We reserve the right to suspend or terminate accounts for misuse.</p>
          <h2 className="text-xl font-semibold text-blue-500 mt-8">4. Subscriptions</h2>
          <p>Subscription terms and billing details are provided in-app. You may cancel anytime.</p>
          <h2 className="text-xl font-semibold text-blue-500 mt-8">5. Intellectual Property</h2>
          <p>All content and code are the property of MotivAItion.</p>
          <h2 className="text-xl font-semibold text-blue-500 mt-8">6. Limitation of Liability</h2>
          <p>MotivAItion is provided as-is. We are not liable for damages or losses.</p>
          <h2 className="text-xl font-semibold text-blue-500 mt-8">7. Changes to Terms</h2>
          <p>We may update these terms. Continued use means acceptance of changes.</p>
          <h2 className="text-xl font-semibold text-blue-500 mt-8">8. Contact Us</h2>
          <p>If you have questions, contact us at support@motivAIt.com.</p>
        </div>
        <Footer />
      </main>
    </>
  );
}
