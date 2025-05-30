import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="font-bold text-lg">Home
          </h1>
        </Link>
        <div className="space-x-4">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/routines">Routines</Link>
          <Link href="/gear">Gear</Link>
          <Link href="/about">About Me</Link>
        </div>
      </div>
    </nav>
  );
}
