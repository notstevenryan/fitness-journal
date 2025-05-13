import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">🏋️ Fitness Journal</h1>
        <div className="space-x-4">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/workouts">Workouts</Link>
          <Link href="/analytics">Analytics</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
