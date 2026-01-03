import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Rex Acheampong, PhD | AI Architect & Health Informatics Expert</title>
        <meta name="description" content="Architecting AI systems that transform healthcare. Expert in health informatics, AI agent systems, and strategic consulting for healthcare organizations and governments." />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
