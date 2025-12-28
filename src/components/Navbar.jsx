import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageToggle from "./LanguageToggle";
import Logo from "../assets/getanehLogo.png";

const services = [
  {
    title: "✨ Cosmetic Dentistry",
    items: [
      { label: "Teeth Whitening", path: "/services/teeth-whitening" },
      { label: "Composite Bonding", path: "/services/composite-bonding" },
      { label: "Pre-Designed Composite Veneers", path: "/services/composite-veneers" },
      { label: "Porcelain Veneers", path: "/services/porcelain-veneers" },
    ],
  },
  {
    title: "😁 Orthodontics",
    items: [
      { label: "Invisalign (Clear Aligners)", path: "/services/invisalign" },
      { label: "Fixed Braces", path: "/services/fixed-braces" },
    ],
  },
  {
    title: "🦷 Restorative Dentistry",
    items: [
      { label: "Dental Bridges", path: "/services/dental-bridges" },
      { label: "Dental Implants", path: "/services/dental-implants" },
    ],
  },
  {
    title: "🛡️ Maintenance",
    items: [
      { label: "Hygiene Therapy", path: "/services/hygiene-therapy" },
      { label: "Composite Conditioning™", path: "/services/composite-conditioning" },
    ],
  },
  {
    title: "🩺 General Dental Care",
    items: [
      { label: "Dental & Gum Swelling", path: "/services/gum-swelling" },
      { label: "Painless Tooth Extraction", path: "/services/tooth-extraction" },
      { label: "Dental Fillings", path: "/services/dental-fillings" },
      { label: "Alveolar Bone Fracture", path: "/services/alveolar-fracture" },
    ],
  },
];

export default function Navbar() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const isHomePage = location.pathname === "/";
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location]);
 
  
    
  
    useEffect(() => {
      if (!isHomePage) {
        setShowNav(true);
        return;
      }
  
      const handleScroll = () => {
        setShowNav(window.scrollY > 50);
        if (window.scrollY <= 50) setIsMenuOpen(false);
      };
  
      setShowNav(window.scrollY > 50);
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [isHomePage]);
  

  return (
    <header className={` bg-white/30 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        showNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}>
      <div className="px-4 mx-auto bg-white/30 backdrop-blur-xl">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-14 w-auto" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold">

            <Link to="/">Home</Link>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              {/* Trigger */}
              <Link
                to="/services/teeth-whitening"
                className="flex items-center gap-1 py-2"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {/* Hover bridge (CRITICAL) */}
              <div className="absolute top-full left-0 h-3 w-full" />

              {/* Dropdown */}
              {servicesOpen && (
                <div className="absolute left-0 top-full mt-3 w-[760px]
                                bg-white rounded-xl shadow-xl border
                                p-4 grid grid-cols-2 gap-4">

                  {/* LEFT GROUPS */}
                  <div className="border-r pr-3 space-y-1">
                    {services.map((group, i) => (
                      <button
                        key={group.title}
                        onMouseEnter={() => setActiveGroup(i)}
                        className={`w-full flex justify-between items-center
                          px-3 py-2 rounded-lg text-sm
                          ${
                            activeGroup === i
                              ? "bg-secondary text-primary"
                              : "hover:bg-secondary/50"
                          }`}
                      >
                        {group.title}
                        <ChevronRight
                          className={`h-4 w-4 transition-transform ${
                            activeGroup === i ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  {/* RIGHT ITEMS */}
                  <div className="pl-3">
                    <ul className="space-y-2">
                      {services[activeGroup].items.map((item) => (
                        <li key={item.path}>
                          <Link
                            to={item.path}
                            className="block px-3 py-2 rounded-lg
                                       text-sm hover:bg-secondary"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              )}
            </div>

            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* RIGHT */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle />
            <Button className="text-white">
              <Phone className="h-4 w-4 mr-2 text-foreground" />
              Book Appointment
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden mt-2 space-y-2 pb-4">
            <Link to="/" className="block px-4 py-2">Home</Link>

            {/* MOBILE SERVICES */}
            <details className="px-4">
              <summary className="flex items-center justify-between py-2 cursor-pointer">
                Services <ChevronDown className="h-4 w-4" />
              </summary>

              <div className="pl-3 space-y-2 mt-2">
                {services.map((group) => (
                  <div key={group.title}>
                    <p className="font-semibold text-sm">{group.title}</p>
                    {group.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block text-sm pl-3 py-1"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </details>

            <Link to="/about" className="block px-4 py-2">About</Link>
            <Link to="/contact" className="block px-4 py-2">Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}
