import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.png"
              alt="ClimateFlow Logo"
              fill
              className="object-contain" // Changed from cover to contain to prevent cropping
            />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-primary group-hover:to-primary-dark transition-all duration-300">
            ClimateFlow
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Data Metrics', 'Features'].map((item) => (
            <Link
              key={item}
              href={item === 'Features' ? '/features' : `#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="#get-started"
          className="px-5 py-2.5 text-sm font-semibold text-black bg-white hover:bg-gray-200 rounded-full transition-colors"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
