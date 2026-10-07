import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import About from "../components/About";
import VisitTimeline from "../components/VisitTimeline";
import Pricing from "../components/Pricing";
import Gallery from "../components/Gallery";
import Gastronomy from "../components/Gastronomy";
import Location from "../components/Location";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Experience />

        <About />

        <VisitTimeline />

        <Pricing />

        <Gallery />

        <Gastronomy />

        <Location />

        <CTA />
      </main>

      <Footer />
    </>
  );
}