import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50 dark:from-slate-900 dark:via-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-8 sm:p-8">
      <main className="flex flex-col gap-12 row-start-2 items-center sm:items-start max-w-5xl">
        {/* Header Section */}
        <div className="text-center sm:text-left space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Live Rankings
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-blue-800 dark:from-white dark:via-green-300 dark:to-blue-300 bg-clip-text text-transparent leading-tight">
              Tennis Glicko-2 Ratings
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
              Advanced tennis player ratings using the Glicko-2 rating system for accurate skill assessment across all surfaces
            </p>
          </div>
        </div>

        {/* Glicko-2 Explanation */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-lg">📊</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              What is Glicko-2?
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Developed by Mark Glickman, Glicko-2 extends the Elo rating system by considering the uncertainty in a player's rating and their consistency over time. You can read more about Glicko-2{' '}
            <a 
              href="https://www.glicko.net/glicko/glicko2.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 underline underline-offset-4 transition-colors font-medium"
            >
              here
            </a>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="group text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200/50 dark:border-green-700/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xl">🎯</span>
              </div>
              <div className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">Rating</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Estimates a player's skill level</div>
            </div>
            <div className="group text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xl">📈</span>
              </div>
              <div className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">Rating Deviation</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Uncertainty in the rating calculation</div>
            </div>
            <div className="group text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border border-purple-200/50 dark:border-purple-700/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xl">⚡</span>
              </div>
              <div className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">Volatility</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Measure of consistency</div>
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
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold text-lg sm:text-xl h-16 sm:h-18 px-8 sm:px-12 flex items-center justify-center gap-3 hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            href="/rankings"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="text-3xl group-hover:scale-110 transition-transform duration-300">📊</span>
            <span className="relative z-10">View Current Rankings</span>
            <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
