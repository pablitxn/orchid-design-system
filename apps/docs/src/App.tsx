import { SkinDemo } from './SkinDemo';
import { TestSkins } from './TestSkins';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Orchid Design System
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A beautiful and flexible component library with multiple theme variants
          </p>
        </header>
        
        <main className="space-y-16">
          <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12">
            <SkinDemo />
          </section>
        </main>
        
        <footer className="mt-20 py-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;