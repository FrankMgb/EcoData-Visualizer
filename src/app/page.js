import Hero from "@/components/Hero";
import QuickSightEmbed from "@/components/QuickSightEmbed";
import MetricsGrid from "@/components/MetricsGrid";
import DataProviders from "@/components/DataProviders";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickSightEmbed />
      <MetricsGrid />
      <DataProviders />
    </>
  );
}
