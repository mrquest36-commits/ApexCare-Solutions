import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


export default function Home() {

  return (

    <main>

      <Navbar />

      <Hero />

      <Services />

      <About />

      <WhyChooseUs />

      <Process />

      <Contact />

      <Footer />

      <WhatsAppButton />

    </main>

  );

}