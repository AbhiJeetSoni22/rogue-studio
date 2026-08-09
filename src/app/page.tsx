import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import WorkSection from "@/components/work/WorkSection";
import AboutSection from "@/components/about/AboutSection";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkSection/>
        <AboutSection />
      </main>
    </>
  );
}
