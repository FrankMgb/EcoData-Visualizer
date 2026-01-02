import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">

        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold text-white mb-4">ClimateFlow</h3>
          <p className="text-gray-400 max-w-sm">
            Empowering decisions with reliable climate data and insights.
          </p>
        </div>

        {/* FAQs */}
        <div>
          <h4 className="font-semibold text-white mb-6 uppercase tracking-wider">FAQs</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link href="#" className="hover:text-primary transition-colors">What is EcoData?</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">How does it work?</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Data Sources</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Update Frequency</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-6 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link href="#" className="hover:text-primary transition-colors">Contact Form</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Support</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Partnerships</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} EcoData Visualizer. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
