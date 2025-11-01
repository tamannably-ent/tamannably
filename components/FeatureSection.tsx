import Image from 'next/image';

export function FeaturesSection() {
  return (
    <section className="container mx-auto py-16">
      <div className="flex flex-col items-center gap-12 md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold">Guaranteed Performance</h2>
          <p className="mt-4 text-lg text-gray-600">
            Unlike shared broadband, an internet leased line provides a 1:1,
            uncontended connection. This means you get the full, symmetrical
            bandwidth you pay for, with no slowdowns during peak hours.
          </p>
          <ul className="mt-6 space-y-4 text-lg">
            <li className="flex items-center">
              <span className="mr-2 text-blue-600">✓</span> Symmetrical Upload and Download Speeds
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-600">✓</span> Consistent and Low Latency
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-600">✓</span> Uninterrupted 24/7 Connectivity
            </li>
          </ul>
        </div>
        <div className="relative group h-96 w-full rounded-2xl overflow-hidden md:rounded-xl md:w-1/2  after:inset-0 after:w-full after:h-full after:absolute after:bg-slate-950/80 after:z-[1]">
          <video autoPlay muted loop className='absolute w-full h-full top-0 left-0 object-cover'>
            <source src='/videos/video_speed_ll.webm' type='video/webm' />
          </video>
          <h1 className={` 
              z-10 
              text-3xl
              top-0
              left-[10%]
              text-wrap
              translate-y-[50%]
              inset-0 
              absolute 
              text-gray-50
              font-bold
              opacity-10 
              group-hover:opacity-100
              group-hover:text-shadow-2xs
              group-hover:text-shadow-gray-900
              cursor-crosshair
              transition-opacity
              duration-300
              ease-in-out
            `}
          >
            Internet Leased Line - 
            <span className='font-extrabold text-amber-500/60 '>
              {` Speed (1:1)`}
            </span>
          </h1>
          <Image
            src="/images/guaranteed-performance.png"
            alt="Graph showing consistent high-speed internet"
            fill
            className="rounded-lg object-cover shadow-xl z-[-1]"
          />
        </div>
      </div>
    </section>
  );
}
