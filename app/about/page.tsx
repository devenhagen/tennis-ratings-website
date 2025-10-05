import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50 dark:from-slate-900 dark:via-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              About the Creator
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-blue-800 dark:from-white dark:via-green-300 dark:to-blue-300 bg-clip-text text-transparent leading-tight">
              About
            </h1>
          </div>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
            <div className="text-center space-y-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-4xl">🎾</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✨</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Hi, I'm Deven!
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  A first-year student at the University of Pennsylvania studying math and computer science. 
                  I'm passionate about data science and creating meaningful insights from sports analytics.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-green-200/50 dark:border-green-700/50">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
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
          <div className="text-center mt-12">
          <a
            href="/"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span>Back to Home</span>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
