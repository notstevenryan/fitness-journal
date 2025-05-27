import Image from 'next/image'

export default function AboutPage() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">ℹ️ About Me</h2>

      <div className='max-w-96 bg-zinc-900 shadow-md rounded-lg p-4 space-y-4'>
        <div>
          <Image
            src="/profile.jpg"
            alt="Picture of the author"
            width={400}
            height={400}
            blurDataURL="data:..."
            placeholder="blur"
            padding="4px"
        />
        </div>

        <div>
          <p className="text-gray-300 max-w-prose ">
            Hi, my name is Steven Ryan Lorilla.
          </p>
          <p className="text-gray-300 max-w-prose">
            The Fitness Journal is a personal project to track, visualize, and analyze workout data from Strava and Hevy.
          </p>

          <div className="text-gray-600 max-w-prose">
            Built with Next.js, TailwindCSS, and love for Fitness.
          </div>
        </div>
      </div>


    </section>
  );
}
