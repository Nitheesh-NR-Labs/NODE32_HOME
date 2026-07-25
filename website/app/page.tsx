import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Hardware } from "@/components/Hardware";
import { Ecosystem } from "@/components/Ecosystem";
import { Status } from "@/components/Status";
import { Roadmap } from "@/components/Roadmap";
import { Philosophy } from "@/components/Philosophy";
import { Contribute } from "@/components/Contribute";
import { GitHub } from "@/components/GitHub";
import { Footer } from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Hardware />
        <Ecosystem />
        <Status />
        <Roadmap />
        <Philosophy />
        <Contribute />
        <GitHub />
      </main>
      <Footer />
    </>
  );
}
