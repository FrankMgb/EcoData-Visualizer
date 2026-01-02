import Image from 'next/image';

const DataProviders = () => {
  const providers = [
    { name: 'NOAA Climate.gov', src: '/images/Climate-gov.png', width: 140, height: 40 },
    { name: 'EPA United States', src: '/images/EPA-gov.png', width: 60, height: 60 },
    { name: 'Climate Trace', src: '/images/Climate-trace-gov.png', width: 140, height: 40 },
    { name: 'NASA', src: '/images/NASA-gov.png', width: 80, height: 80 },
  ];

  return (
    <section className="py-24 border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <span className="text-sm font-medium text-primary uppercase tracking-widest">
          Data Providers
        </span>
        <h2 className="mt-3 text-3xl font-bold text-white mb-12">
          Data You Can Trust
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {providers.map((p, i) => (
            <div
              key={i}
              className="relative h-16 w-40 flex items-center justify-center"
            >
              <Image
                src={p.src}
                alt={p.name}
                width={p.width}
                height={p.height}
                className="object-contain max-h-full max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataProviders;
