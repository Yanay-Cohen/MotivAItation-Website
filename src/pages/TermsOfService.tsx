// src/pages/TermsOfService.jsx
import Navbar from '../components/Navbar';

export default function TermsOfService() {
  return (
    <>
      <Navbar />
    <div className="min-h-screen w-full px-4 py-16 flex justify-center bg-black text-white">
      <div className="max-w-4xl w-full space-y-6">
        <h2 className="text-3xl font-bold text-blue-500 mt-8">Terms of Service</h2>
        <p className="text-sm text-gray-400">Welcome to MotivAItion! By using our app, you agree to these terms.</p>
        <p className="text-sm text-gray-400">Last updated: July 2, 2025</p>

        <h2 className="text-xl font-semibold text-blue-500 mt-8">1. Acceptance of Terms</h2>
        <p>By using <span className="text-blue-500 font-semibold">MotivAItion</span>, you agree to these terms and our privacy policy.</p>

        <h2 className="text-xl font-semibold text-blue-500 mt-8">2. User Responsibilities</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>You are responsible for your account and password security</li>
          <li>You may not use the service for unlawful purposes</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-500 mt-8">3. App Usage</h2>
        <p>
          You may use MotivAItion for personal, non-commercial purposes. We reserve the right to suspend
          or terminate accounts that violate our terms.
        </p>

        <h2 className="text-xl font-semibold text-blue-500 mt-8">4. Subscriptions</h2>
        <p>
          By subscribing, you agree to recurring billing unless cancelled. You can manage your plan in
          your account settings or through the billing provider.
        </p>

        <h2 className="text-xl font-semibold text-blue-500 mt-8">5. Intellectual Property</h2>
        <p>
          All code, visuals, and brand assets belong to <span className="text-blue-500 font-semibold">MotivAItion</span>.
          You may not reuse them without written permission.
        </p>

        <h2 className="text-xl font-semibold text-blue-500 mt-8">6. Limitation of Liability</h2>
        <p>
          We are not liable for damages resulting from your use of the app. The platform is provided "as is".
        </p>

        <h2 className="text-xl font-semibold text-blue-500 mt-8">7. Changes to Terms</h2>
        <p>
          We may update these terms periodically. Continued use of the platform means you accept the latest
          version.
        </p>

        <h2 className="text-xl font-semibold text-blue-500 mt-8">8. Contact Us</h2>
        <p>
          Questions? Email <span className="text-blue-400">support@motivAIt.com</span>.
        </p>
      </div>
    </div>
    </>
  );
}
