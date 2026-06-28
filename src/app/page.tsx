import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { Accessories } from "@/components/sections/Accessories";
import { WhyJTA } from "@/components/sections/WhyJTA";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Products />
        <Accessories />
        <WhyJTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
