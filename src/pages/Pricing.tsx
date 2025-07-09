import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Pricing() {
  return (
    <>
      <Navbar />
      <main className="home-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
        <section className="features-preview" style={{ padding: '1.5rem 1rem 1rem', background: 'transparent', marginTop: 0 }}>
          <h1 className="text-4xl font-extrabold text-blue-400 mb-2 text-center">Pricing</h1>
          <p className="text-lg text-gray-300 mb-8 text-center max-w-xl mx-auto">
            Choose the plan that's right for you with our clear, competitive pricing.
          </p>
          <div className="features-grid items-stretch">
            {/* Basic Plan */}
            <div className="feature-item min-h-[350px] flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">Basic</h2>
                <div className="text-3xl font-extrabold text-blue-400 mb-1">Free</div>
                <div className="text-sm text-gray-400 mb-6">No credit card required</div>
                <ul className="text-base text-left space-y-2 mb-8 w-full">
                  <li>✔️ Unlimited Motivation</li>
                  <li>✔️ Goal Tracking</li>
                  <li>✔️ Daily Reminders</li>
                  <li>✔️ Community Access</li>
                </ul>
              </div>
              <button className="w-full py-2 rounded-lg border border-blue-400 text-blue-400 font-bold hover:bg-blue-400 hover:text-black transition">Get Started</button>
            </div>
            {/* Premium Plan */}
            <div className="feature-item min-h-[350px] flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">Premium</h2>
                <div className="text-3xl font-extrabold text-blue-400 mb-1">$4.99<span className="text-lg font-normal">/m</span></div>
                <div className="text-sm text-gray-400 mb-6">Billed Monthly</div>
                <ul className="text-base text-left space-y-2 mb-8 w-full">
                  <li>✔️ Everything in Basic</li>
                  <li>✔️ AI-Powered Insights</li>
                  <li>✔️ Advanced Analytics</li>
                  <li>✔️ Early Access to New Features</li>
                </ul>
              </div>
              <button className="w-full py-2 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600 transition">Get Started</button>
            </div>
            {/* Enterprise Plan (In Development) */}
            <div className="feature-item min-h-[350px] flex flex-col justify-between opacity-60 cursor-not-allowed">
              <div>
                <h2 className="text-xl font-bold mb-2">Enterprise</h2>
                <div className="text-3xl font-extrabold text-blue-400 mb-1">In Development</div>
                <div className="text-sm text-gray-400 mb-6">Coming Soon</div>
                <ul className="text-base text-left space-y-2 mb-8 w-full">
                  <li>✔️ All Premium Features</li>
                  <li>✔️ Integrations</li>
                  <li>✔️ Priority Support</li>
                  <li>✔️ LMS Integration</li>
                  <li>✔️ Analytics & Reporting</li>
                </ul>
              </div>
              <button className="w-full py-2 rounded-lg border border-gray-500 text-gray-500 font-bold bg-gray-800 cursor-not-allowed" disabled>Coming Soon</button>
            </div>
          </div>
        </section>
        <div style={{ minHeight: '9vh' }} />
        <Footer />
      </main>
    </>
  );
}
