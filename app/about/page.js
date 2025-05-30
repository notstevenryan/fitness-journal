import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className='grid grid-cols-2 mx-auto max-w-5xl rounded-md'>
      <section className="mx-auto shadow-md p-2 space-y-4 ">
      {/* About Section */} 
      
        <div className='border-1 border-stone-700 p4 rounded-md shadow-md bg-zinc-900'>
          <div className='max-w-md shadow-md p-4 space-y-4'>
            <h2 className="text-3xl font-semibold mb-4">ℹ️ About Me</h2>
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
                The Fitness Journal is a personal project to track, 
                visualize, and analyze my workout data 
                from Strava and Hevy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-md shadow-md p-2 space-y-4 ">
      {/* Contact Me */}
        <div className='border-1 border-stone-700 p4 rounded-md shadow-md bg-zinc-900'>
          <div className='max-w-md shadow-md p-4 space-y-4'>
          <h2 className="text-3xl font-semibold mb-4">
            📲 Contact me
          </h2>
          <p className='p4'>
            If you have any opportunities, please reach out at the following
            channels and let&apos;s talk!
          </p>
            <ul className="list-disc p-4">
                <li>📩 lorillasteven@yahoo.com</li>
                <li>📩 notstevenryan@gmail.com</li>
                <li>📞 09675467214 </li>
            </ul>
          </div>
        </div>
      
      </section>
    </main>

  );
}
