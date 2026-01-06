import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import rexHeadshot from "@/assets/rex-headshot-latest.png";
import rexAboutPhoto from "@/assets/rex-about-photo.png";
import rexOffice1 from "@/assets/rex-office-1.png";
import rexOffice2 from "@/assets/rex-office-2.png";
import rexOffice3 from "@/assets/rex-office-3.png";
import rexEhealthSolutions from "@/assets/rex-ehealth-solutions.png";
import rexLibrary2026 from "@/assets/rex-library-2026.png";
import rexBillboard from "@/assets/rex-billboard.png";
import rexOfficeSignage from "@/assets/rex-office-signage.png";

const galleryImages = [
  { src: rexEhealthSolutions, alt: "Dr. Rex Acheampong - Strategic eHealth Solutions" },
  { src: rexLibrary2026, alt: "Dr. Rex Acheampong - 2026 Vision" },
  { src: rexBillboard, alt: "Dr. Rex Acheampong - Strategic eHealth Solutions Billboard" },
  { src: rexOfficeSignage, alt: "Dr. Rex Acheampong - Office Signage" },
  { src: rexHeadshot, alt: "Rex Acheampong, PhD - Professional Headshot" },
  { src: rexAboutPhoto, alt: "Rex Acheampong, PhD - About Photo" },
  { src: rexOffice1, alt: "Dr. Rex Acheampong - Health Informatician" },
  { src: rexOffice2, alt: "Dr. Rex Acheampong in office" },
  { src: rexOffice3, alt: "Dr. Rex Acheampong - Professional" },
];

const Gallery = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <>
      <Helmet>
        <title>Gallery | Rex Acheampong, PhD</title>
        <meta name="description" content="Photo gallery of Rex Acheampong, PhD - AI Architect & Health Informatics Expert." />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <section className="pt-32 pb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
          
          <div ref={sectionRef} className="relative max-w-6xl mx-auto px-6">
            <div className={`text-center mb-16 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-primary text-sm font-medium uppercase tracking-widest">Gallery</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Photo Gallery
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A collection of professional photos showcasing my work in health informatics and AI consulting.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full aspect-[4/5] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                    <p className="text-sm text-foreground font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
