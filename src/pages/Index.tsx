import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Audiences from "@/components/Audiences";
import CurrentRole from "@/components/CurrentRole";
import Career from "@/components/Career";
import Research from "@/components/Research";
import Insights from "@/components/Insights";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  // Links like /#expertise (from the footer or the Gallery page) arrive before the
  // sections exist, so jump to the section once the page has rendered.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const t = window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ block: "start" }), 120);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <Helmet>
        <title>Rex Acheampong, PhD | AI Architect & Health Informatics Expert</title>
        <meta name="description" content="Dr. Rex Acheampong — biomedical informaticist, AI architect and digital health leader. Chief Informatics Officer at Strategic eHealth Solutions, helping hospitals, governments and research programs make better decisions with health data." />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <ImpactStats />
          <About />
          <Expertise />
          <Audiences />
          <Services />
          <CurrentRole />
          <Projects />
          <Career />
          <Research />
          <Insights />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
