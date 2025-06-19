function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <header className="text-center mb-20">
          <h1
            className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent mb-4">
            Orchid Design System
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A beautiful collection of accessible UI components with shadcn and neobrutalism themes
          </p>
        </header>

        <section id="accordions" className="mb-24">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Accordions</h2>
            <p className="text-slate-600 dark:text-slate-400">Expandable content sections with smooth animations</p>
          </div>

        </section>

      </div>
    </div>
  );
}

export default App;