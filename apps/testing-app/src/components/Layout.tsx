import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Orchid Component Testing</h1>
        </div>
      </header>
      
      <nav className="border-b bg-muted/50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex gap-4">
            <a href="#buttons" className="text-sm hover:underline">Buttons</a>
            <a href="#alerts" className="text-sm hover:underline">Alerts</a>
            <a href="#accordion" className="text-sm hover:underline">Accordion</a>
          </div>
        </div>
      </nav>
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="border-t mt-auto">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
          Orchid Design System Testing Environment
        </div>
      </footer>
    </div>
  )
}

export default Layout