import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-8 sm:p-8">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-4xl">
        {/* Header Section */}
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Tennis Glicko-2 Ratings
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Advanced tennis player ratings using the Glicko-2 rating system for accurate skill assessment
          </p>
        </div>

        {/* Glicko-2 Explanation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            What is Glicko-2?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Developed by Mark Glickman, Glicko-2 builds upon the Elo rating system. 
            It goes beyond wins and losses, considering the uncertainty in a player's rating and their performance over time. You can read more about Glicko-2{' '}
            <a 
              href="https://www.glicko.net/glicko/glicko2.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 underline transition-colors"
            >
              here
            </a>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">Rating</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Estimates a player's skill level</div>
            </div>
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Rating Deviation</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Uncertainty in the rating calculation</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Volatility</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Measure of consistency</div>
            </div>
          </div>
        </div>

        {/* Modifications Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Modifications
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            I used a dataset with over 20 years' worth of match results (
            <a 
              href="https://www.kaggle.com/datasets/dissfya/atp-tennis-2000-2023daily-pull" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 underline transition-colors"
            >
              here's a link
            </a>
            ). I experimented with different lengths for each rating period and tuned parameters for volatility. I also developed surface-specific ratings and blended them with overall ratings to decrease variance. The result is rankings that I believe are a better reflection of true skill than the ATP rankings.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 items-center justify-center w-full">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-green-600 text-white gap-3 hover:bg-green-700 font-medium text-lg sm:text-xl h-14 sm:h-16 px-8 sm:px-10"
            href="/rankings"
          >
            <span className="text-3xl">📊</span>
            View the current rankings
          </a>
        </div>

      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-600 dark:text-gray-400"
          href="/about"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          About This Site
        </a>
      </footer>
      </div>
    </div>
  );
}
