import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MetricsGrid from "@/components/MetricsGrid";
import QuickSightEmbed from "@/components/QuickSightEmbed";
import ReportsSection from "@/components/ReportsSection";
import DataProviders from "@/components/DataProviders";
import Footer from "@/components/Footer";

import HelloWorld from "@/components/HelloWorld";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />
      <Hero />
      <HelloWorld />
      <div className="space-y-12">
        <AboutSection />
        <MetricsGrid />
        <QuickSightEmbed />
        <ReportsSection />
        <DataProviders />
      </div>
      <Footer />
    </main>
  );
}
