import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About
          </h1>
        </div>

        {/* About Content */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="text-6xl mb-6">🎾</div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Hi, I'm Deven, a first-year student at the University of Pennsylvania studying math and computer science. 
                If you have any questions, reach out at{' '}
                <a 
                  href="mailto:dhagen@sas.upenn.edu"
                  className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 underline transition-colors"
                >
                  dhagen@sas.upenn.edu
                </a>!
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
