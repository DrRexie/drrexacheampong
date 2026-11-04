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
import { Helmet } from "react-helmet-async";

const Index = () => {
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
