export default function Home() {
  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header with gradient background */}
      <header className="bg-gradient-primary py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-dark-blue text-center">
            Welcome to Finasddee
          </h1>
          <p className="text-dark-blue/80 text-center mt-2">
            Your Next.js project is ready for migration
          </p>
        </div>
      </header>

      {/* Main content area */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Color palette showcase */}
          <div className="bg-gradient-primary p-6 rounded-lg shadow-md">
            <h3 className="text-dark-blue font-semibold mb-2">Gradient Primary</h3>
            <p className="text-dark-blue/70 text-sm">Linear gradient from gold light to gold dark</p>
          </div>

          <div className="bg-dark-blue p-6 rounded-lg shadow-md">
            <h3 className="text-light-gray font-semibold mb-2">Dark Blue</h3>
            <p className="text-light-gray/70 text-sm">#082642</p>
          </div>

          <div className="bg-green p-6 rounded-lg shadow-md">
            <h3 className="text-light-gray font-semibold mb-2">Green</h3>
            <p className="text-light-gray/70 text-sm">#309E3A</p>
          </div>

          <div className="bg-gold-dark p-6 rounded-lg shadow-md">
            <h3 className="text-dark-blue font-semibold mb-2">Gold Dark</h3>
            <p className="text-dark-blue/70 text-sm">#CE9739</p>
          </div>
        </div>

        {/* Content sections ready for your HTML migration */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-dark-blue mb-4">
            Ready for Your Content
          </h2>
          <p className="text-gray-600 mb-4">
            This Next.js project is now properly configured with your color palette.
            You can start migrating your HTML content here.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-4 border-green pl-4">
              <h4 className="font-semibold text-dark-blue">✅ Configured</h4>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>• Tailwind CSS v4</li>
                <li>• Custom color palette</li>
                <li>• TypeScript support</li>
                <li>• Next.js App Router</li>
              </ul>
            </div>
            <div className="border-l-4 border-gold-dark pl-4">
              <h4 className="font-semibold text-dark-blue">🚀 Ready to Add</h4>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>• Your HTML components</li>
                <li>• Custom styling</li>
                <li>• Interactive features</li>
                <li>• Additional pages</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark-blue text-light-gray py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Finasddee. Ready for your content migration.</p>
        </div>
      </footer>
    </div>
  );
}
