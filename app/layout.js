// app/layout.js
import './globals.css';
import Navbar from '../components/main_Navbar';
import Footer from '../components/main_Footer';

export const metadata = {
  title: 'Fitness Journal',
  description: 'Track and analyze your workouts from Strava and Hevy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
