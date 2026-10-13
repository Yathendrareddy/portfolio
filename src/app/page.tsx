import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CaseStudies } from "@/components/CaseStudies";
import { Skills } from "@/components/Skills";
import { Lab } from "@/components/Lab";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <CaseStudies />
        <Skills />
        <Lab />
      </main>
      <Footer />
    </>
  );
}
