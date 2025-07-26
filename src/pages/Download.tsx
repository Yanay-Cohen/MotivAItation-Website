import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Download() {
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalBodyOverflow;
    };
  }, []);
  return (
    <>
      <style>{`
        html, body, #root, .home-wrapper, main {
          overflow: hidden !important;
          height: 100vh !important;
        }
      `}</style>
      <Navbar />
      <main className="home-wrapper min-h-screen flex flex-col justify-between">
        <section className="features-preview" style={{ padding: '2rem 1rem', background: 'transparent', marginTop: 0 }}>
          <h1 className="text-4xl font-extrabold text-blue-400 mb-2 text-center">
            Download Motiv<span className="ai-highlight">AI</span>tion
          </h1>
          <p className="text-lg text-gray-300 mb-10 text-center max-w-xl mx-auto">
            Get MotivAItion on your favorite platform. Choose your device below to get started!
          </p>
          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto justify-center items-stretch">
            <div className="features-grid flex-1 gap-8">
              {/* Windows */}
              <div className="feature-item flex flex-col items-center">
                <span className="text-5xl mb-4">🪟</span>
                <h2 className="text-xl font-bold mb-2">Windows</h2>
                <button className="w-full mb-2 bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-white hover:text-blue-500 transition" disabled>Coming Soon</button>
              </div>
              {/* Mac */}
              <div className="feature-item flex flex-col items-center">
                <span className="text-5xl mb-4">🍎</span>
                <h2 className="text-xl font-bold mb-2">Mac</h2>
                <button className="w-full mb-2 bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-white hover:text-blue-500 transition" disabled>Coming Soon</button>
              </div>
              {/* Linux */}
              <div className="feature-item flex flex-col items-center">
                <span className="text-5xl mb-4">🐧</span>
                <h2 className="text-xl font-bold mb-2">Linux</h2>
                <button className="w-full mb-2 bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-white hover:text-blue-500 transition" disabled>Coming Soon</button>
              </div>
            </div>
            {/* Coming Soon Mobile Apps */}
            <div className="flex flex-col justify-center items-center md:items-start md:justify-center md:ml-8 mt-24 md:mt-0 min-w-[220px]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">📱</span>
                <span className="text-3xl">🤖</span>
              </div>
              <div className="text-blue-400 font-bold text-lg mb-1">Coming soon to</div>
              <div className="flex items-center gap-2 text-white text-sm font-semibold">
                <span className="bg-[#222] px-3 py-1 rounded">App Store</span>
                <span className="text-blue-400 font-bold">&</span>
                <span className="bg-[#222] px-3 py-1 rounded">Play Store</span>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
