// src/pages/PrivacyPolicy.jsx
import Navbar from '../components/Navbar';
export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="home-wrapper">
        <div className="w-full bg-[#18181b] rounded-xl shadow-lg px-2 py-4 text-white" style={{ marginTop: '-5rem' }}>
          <h1 className="text-3xl font-extrabold text-blue-400 mb-2 text-center">Privacy Policy</h1>
          <div className="text-xs text-gray-400 mb-6 text-center">Last updated: July 2, 2025</div>
          <p className="mb-6 text-base">
            At <span className="text-blue-400 font-semibold">MotivAItion</span>, your privacy is a top priority. This Privacy Policy outlines how we collect, use, and protect your personal information.
          </p>
          <h2 className="text-xl font-bold text-blue-400 mt-8 mb-2">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1 text-base ml-4 mb-6">
            <li>Account info (e.g., name, email)</li>
            <li>Usage data (e.g., goal progress, app activity)</li>
            <li>Device data (e.g., browser, OS)</li>
          </ul>
          <h2 className="text-xl font-bold text-blue-400 mt-8 mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1 text-base ml-4 mb-6">
            <li>To improve your experience and personalize content</li>
            <li>To send reminders, suggestions, and updates</li>
            <li>To analyze app performance and trends</li>
          </ul>
          <h2 className="text-xl font-bold text-blue-400 mt-8 mb-2">3. Data Protection</h2>
          <p className="mb-6 text-base">We use encryption, secure servers, and limited access to protect your data.</p>
          <h2 className="text-xl font-bold text-blue-400 mt-8 mb-2">4. Third-Party Tools</h2>
          <p className="mb-6 text-base">
            We may use trusted third-party services (like analytics or payment providers) who follow strict privacy practices.
          </p>
          <h2 className="text-xl font-bold text-blue-400 mt-8 mb-2">5. Your Choices</h2>
          <ul className="list-disc list-inside space-y-1 text-base ml-4 mb-6">
            <li>You can update or delete your information anytime</li>
            <li>You can opt out of marketing emails</li>
          </ul>
          <h2 className="text-xl font-bold text-blue-400 mt-8 mb-2">6. Contact Us</h2>
          <p className="text-base">
            If you have any questions, email us at{' '}
            <span className="text-blue-300">support@motivAIt.com</span>.
          </p>
        </div>
      </main>
    </>
  );
}
