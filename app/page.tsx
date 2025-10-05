import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50 dark:from-slate-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <Navbar />
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-8 sm:p-8 relative z-10">
      <main className="flex flex-col gap-12 row-start-2 items-center sm:items-start max-w-5xl">
        {/* Header Section */}
        <div className="text-center sm:text-left space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold shadow-lg border border-green-200/50 dark:border-green-700/50 animate-pulse-glow">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span>Live Rankings</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
            </div>
            <h1 className="text-6xl sm:text-8xl font-black bg-gradient-to-r from-gray-900 via-green-800 to-blue-800 dark:from-white dark:via-green-300 dark:to-blue-300 bg-clip-text text-transparent leading-tight animate-gradient">
              Tennis Glicko-2
              <span className="block text-4xl sm:text-6xl font-bold text-gradient-green mt-2">
                Ratings
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl leading-relaxed font-medium">
              Advanced tennis player ratings using the Glicko-2 rating system for accurate skill assessment across all surfaces
            </p>
            <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full border border-gray-200/50 dark:border-gray-700/50">
                <span className="text-green-500">✓</span>
                <span className="text-sm font-medium">Real-time Updates</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full border border-gray-200/50 dark:border-gray-700/50">
                <span className="text-blue-500">📊</span>
                <span className="text-sm font-medium">Advanced Analytics</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full border border-gray-200/50 dark:border-gray-700/50">
                <span className="text-purple-500">🎾</span>
                <span className="text-sm font-medium">Surface-Specific</span>
              </div>
            </div>
          </div>
        </div>

        {/* Glicko-2 Explanation */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 premium-hover relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center animate-glow shadow-lg">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white">
                What is Glicko-2?
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed font-medium">
              Developed by Mark Glickman, Glicko-2 extends the Elo rating system by considering the uncertainty in a player's rating and their consistency over time. You can read more about Glicko-2{' '}
              <a 
                href="https://www.glicko.net/glicko/glicko2.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 underline underline-offset-4 transition-colors font-bold"
              >
                here
              </a>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="group text-center p-8 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl border border-green-200/50 dark:border-green-700/50 premium-hover relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <div className="text-2xl font-black text-green-700 dark:text-green-300 mb-3">Rating</div>
                  <div className="text-base text-gray-600 dark:text-gray-300 font-medium">Estimates a player's skill level</div>
                </div>
              </div>
              <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl border border-blue-200/50 dark:border-blue-700/50 premium-hover relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">📈</span>
                  </div>
                  <div className="text-2xl font-black text-blue-700 dark:text-blue-300 mb-3">Rating Deviation</div>
                  <div className="text-base text-gray-600 dark:text-gray-300 font-medium">Uncertainty in the rating calculation</div>
                </div>
              </div>
              <div className="group text-center p-8 bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-2xl border border-purple-200/50 dark:border-purple-700/50 premium-hover relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <div className="text-2xl font-black text-purple-700 dark:text-purple-300 mb-3">Volatility</div>
                  <div className="text-base text-gray-600 dark:text-gray-300 font-medium">Measure of consistency</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modifications Section */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-lg">🔬</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Research & Methodology
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I used a dataset with over 20 years' worth of match results (
            <a 
              href="https://www.kaggle.com/datasets/dissfya/atp-tennis-2000-2023daily-pull" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 underline underline-offset-4 transition-colors font-medium"
            >
              here's a link
            </a>
            ). I experimented with different lengths for each rating period and tuned parameters for volatility. I also developed surface-specific ratings and blended them with overall ratings to decrease variance. The result is rankings that I believe are a better reflection of true skill than the ATP rankings.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 items-center justify-center w-full">
          <a
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white font-black text-xl sm:text-2xl h-20 sm:h-24 px-12 sm:px-16 flex items-center justify-center gap-4 hover:from-green-700 hover:via-emerald-700 hover:to-green-800 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-110 animate-pulse-glow btn-premium"
            href="/rankings"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
            <div className="relative z-10 flex items-center gap-4">
              <span className="text-4xl group-hover:scale-125 transition-transform duration-300">📊</span>
              <span className="relative z-10 font-black">View Current Rankings</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>
        </div>

      </main>
      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          href="/about"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
              className="text-white"
            />
          </div>
          <span className="font-medium">About This Site</span>
        </a>
      </footer>
      </div>
    </div>
  );
}
