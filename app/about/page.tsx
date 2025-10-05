import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50 dark:from-slate-900 dark:via-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs sm:text-sm font-medium">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
              About the Creator
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-blue-800 dark:from-white dark:via-green-300 dark:to-blue-300 bg-clip-text text-transparent leading-tight">
              About
            </h1>
          </div>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
            <div className="text-center space-y-6 sm:space-y-8">
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <span className="text-3xl sm:text-4xl">🎾</span>
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm">✨</span>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  Hi, I'm Deven!
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  A first-year student at the University of Pennsylvania studying math and computer science. 
                  I'm passionate about data science and creating meaningful insights from sports analytics.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-green-200/50 dark:border-green-700/50">
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                    If you have any questions about the methodology, data sources, or just want to chat about tennis analytics, 
                    feel free to reach out at{' '}
                    <a 
                      href="mailto:dhagen@sas.upenn.edu"
                      className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 underline underline-offset-4 transition-colors font-semibold"
                    >
                      dhagen@sas.upenn.edu
                    </a>
                    !
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8 sm:mt-12">
          <a
            href="/"
            className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl sm:rounded-2xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="text-lg sm:text-xl group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span>Back to Home</span>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
