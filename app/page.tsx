import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NFLNews from "@/components/NFLNews";
import CurrentMatchups from "@/components/CurrentMatchups";
import UpcomingEvents from "@/components/UpcomingEvents";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        <UpcomingEvents />
        <CurrentMatchups />
        <NFLNews />
      </div>
      <Footer />
    </main>
  );
}
