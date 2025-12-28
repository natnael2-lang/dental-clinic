import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import WhatsapChat from "@/components/telegram";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Phone,
  ArrowRight,
  Stethoscope,
  Sparkles,
  SmilePlus,
  Users,
  Award,
  Heart,
  Clock,

} from "lucide-react";

// ✅ HERO IMAGES
import heroImage1 from "@/assets/images/hero1.jpg";
import heroImage2 from "@/assets/images/hero2.jpg";
import heroImage3 from "@/assets/images/hero3.png";
import aboutImage from "@/assets/images/hero2.jpg"

const images = [heroImage1, heroImage2, heroImage3];

const Home = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  // Hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5s
    return () => clearInterval(interval);
  }, []);

  const heroTitle = t('hero.title');

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: Users,
      title: t("why.experience.title"),
      description: t("why.experience.desc"),
    },
    {
      icon: Award,
      title: t("why.equipment.title"),
      description: t("why.equipment.desc"),
    },
    {
      icon: Heart,
      title: t("why.comfort.title"),
      description: t("why.comfort.desc"),
    },
    {
      icon: Clock,
      title: t("why.affordable.title"),
      description: t("why.affordable.desc"),
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center pt-10 overflow-hidden">
        {/* Background images */}
        <div className="absolute inset-0">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
                index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* ---------- HERO TEXT ---------- */}
            <div className="space-y-8 animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-accent/30">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                5 Kilo, Addis Ababa
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                {typeof heroTitle === 'string' ? (
                  heroTitle
                ) : (
                  <>
                    {heroTitle.first}{' '}
                    <span className="text-accent">{heroTitle.highlight}</span>
                  </>
                )}
              </h1>
              <p className="text-xl font-medium">{t("hero.subtitle")}</p>
              <p className="text-lg max-w-xl">{t("hero.description")}</p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="group bg-primary text-white">
                    {t("hero.cta")}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <a href="tel:+251911123456">
                  <Button size="lg" variant="outline" className="text-white border-white bg-accent hover:bg-accent/70 border border-none">
                    <Phone className="mr-2 h-5 w-5" />
                    {t("hero.call")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= ABOUT US ================= */}
<section className="py-24 bg-secondary/10">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <div className="space-y-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          {t("about.title")}
        </h2>
        <p className="text-lg font-medium">{t("about.subtitle")}</p>
        <p className="text-muted-foreground">{t("about.doctor.bio")}</p>
        <div className="flex gap-4 mt-4">
          <Link to="/about">
            <Button className="bg-primary text-white hover:bg-primary/90">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src={aboutImage}
          alt="About Us"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 ">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t("services.title")}
            </h2>
            <p className="text-lg">{t("services.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "✨ Cosmetic Dentistry",
                items: [
                  { label: "Teeth Whitening", path: "/services/teeth-whitening" },
                  { label: "Composite Bonding", path: "/services/composite-bonding" },
                  { label: "Pre-Designed Composite Veneers", path: "/services/pre-designed-composite-veneers" },
                  { label: "Porcelain Veneers", path: "/services/porcelain-veneers" },
                ],
                color: "bg-primary/10 text-accent",
              },
              {
                icon: SmilePlus,
                title: "😁 Orthodontics",
                items: [
                  { label: "Invisalign (Clear Aligners)", path: "/services/invisalign" },
                  { label: "Fixed Braces", path: "/services/fixed-braces" },
                ],
                color: "bg-primary/10 text-primary",
              },
              {
                icon: Stethoscope,
                title: "🦷 Restorative Dentistry (Replace)",
                items: [
                  { label: "Dental Bridges", path: "/services/dental-bridges" },
                  { label: "Dental Implants", path: "/services/dental-implants" },
                ],
                color: "bg-primary/10 text-primary",
              },
              {
                icon: Heart,
                title: "🛡️ Maintenance & 🩺 General Dental Care",
                items: [
                  { label: "Hygiene Therapy", path: "/services/hygiene-therapy" },
                  { label: "Composite Conditioning™", path: "/services/composite-conditioning" },
                  { label: "Gum Swelling", path: "/services/dental-gum-swelling" },
                  { label: "Painless Tooth Extraction", path: "/services/tooth-extraction" },
                  { label: "Dental Fillings for Decayed Teeth", path: "/services/dental-fillings" },
                  { label: "Alveolar Bone Fracture Treatment", path: "/services/alveolar-bone-fracture" },
                ],
                color: "bg-primary/10 text-primary",
              },
            ].map((service) => (
              <div key={service.title} className="card rounded-2xl p-6 shadow-lg">
                <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {service.items.map((item) => (
                    <li key={item.path}>
                      <Link to={item.path} className="text-primary hover:underline">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-accent/10">
        <div className="container  mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            {t("why.title")}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="card text-center bg-card shadow-lg rounded-lg">
                <div className="w-14 h-14 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsapChat/>
    </div>
  );
};

export default Home;
