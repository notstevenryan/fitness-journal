// app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Fitness Journal</h1>
      <p className="text-lg text-gray-600">Track and visualize your workouts from Strava and Hevy.</p>
      <Link href="/dashboard">
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
}
