// src/pages/PrivacyPolicy.jsx
import Navbar from '../components/Navbar';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
    <div className="min-h-screen w-full px-4 py-16 flex justify-center bg-black text-white">
      <div className="max-w-4xl w-full space-y-6">
        <h1 className="text-3xl font-bold text-blue-500">Privacy Policy</h1>
        <p className="text-sm text-gray-400">Last updated: July 2, 2025</p>

        <p>
          At <span className="text-blue-500 font-semibold">MotivAItion</span>, your privacy is a top priority.
          This Privacy Policy outlines how we collect, use, and protect your personal information.
        </p>

        <h2 className="text-xl font-semibold text-blue-500 mt-8">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Account info (e.g., name, email)</li>
          <li>Usage data (e.g., goal progress, app activity)</li>
          <li>Device data (e.g., browser, OS)</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-500 mt-8">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>To improve your experience and personalize content</li>
          <li>To send reminders, suggestions, and updates</li>
          <li>To analyze app performance and trends</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-500 mt-8">3. Data Protection</h2>
        <p>We use encryption, secure servers, and limited access to protect your data.</p>

        <h2 className="text-xl font-semibold text-blue-500 mt-8">4. Third-Party Tools</h2>
        <p>
          We may use trusted third-party services (like analytics or payment providers) who follow
          strict privacy practices.
        </p>

        <h2 className="text-xl font-semibold text-blue-500 mt-8">5. Your Choices</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>You can update or delete your information anytime</li>
          <li>You can opt out of marketing emails</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-500 mt-8">6. Contact Us</h2>
        <p>
          If you have any questions, email us at{' '}
          <span className="text-blue-400">support@motivAIt.com</span>.
        </p>
      </div>
    </div>
    </>
  );
}
