export default function HomePage() {
  return (
    <main className="px-4 md:px-12 py-12 max-w-6xl mx-auto bg-zinc-900 shadow-md rounded-lg p-4 space-y-4">
      {/* Hero */}
      <section className="text-center mb-12 ">
        <h1 className="text-4xl font-bold mb-4">🏋️‍♂️ Fitness Journal</h1>
        <p className="text-lg text-gray-200">
          Track. Visualize. Analyze your fitness data from Strava and Hevy — all in one place.
        </p>
      </section>

      {/* About */}
      <section className="mb-12 ">
        <h2 className="text-2xl font-semibold mb-2">📖 About This Project</h2>
        <p className="text-gray-400">
          Fitness Journal is a full-stack web app that pulls your workout data from Hevy and Strava,
          visualizes it, and provides insights to help you train smarter. It’s a personal project to
          demonstrate my skills in web development and data analytics.
        </p>
      </section>

      {/* Features */}
      <section className="mb-12 ">
        <h2 className="text-2xl font-semibold mb-2">✨ Features</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          <li>Clean, responsive dashboard UI</li>
          <li>Workout card previews</li>
          <li>Interactive Recharts visualizations</li>
          <li>Upcoming: API integrations with Strava + Hevy</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-12 ">
        <h2 className="text-2xl font-semibold mb-2">🛠️ Tech Stack</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">Next.js</span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">TailwindCSS</span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">Recharts</span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
            Prisma</span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
            Vercel</span>
        </div>
      </section>

      {/* Screenshot (placeholder for now) */}
      <section className="mb-12 ">
        <h2 className="text-2xl font-semibold mb-2">📸 Preview</h2>
        <div className="bg-gray-100 border rounded-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-800 flex items-center justify-center text-gray-200">
            {/* Replace this with an image tag if you have a screenshot */}
            <span>Dashboard Screenshot (coming soon)</span>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="text-center mt-16">
        <a
          href="https://github.com/notstevenryan/fitness-journal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700"
        >
          View on GitHub
        </a>
      </section>
    </main>
  );
}
