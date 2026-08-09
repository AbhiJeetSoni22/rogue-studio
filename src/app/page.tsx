import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import WorkSection from "@/components/work/WorkSection";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkSection/>
      </main>
    </>
  );
}
