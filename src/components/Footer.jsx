import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from "../assets/getanehLogo.png";
const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 w-35 h-35">
             <img src={Logo}></img>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t('nav.home')}
              </Link>
              <Link to="/services" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t('nav.services')}
              </Link>
              <Link to="/about" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t('nav.about')}
              </Link>
              <Link to="/contact" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t('nav.contact')}
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">{t('nav.services')}</h4>
            <div className="space-y-3">
              <p className="text-sm opacity-80">{t('services.general.title')}</p>
              <p className="text-sm opacity-80">{t('services.cosmetic.title')}</p>
              <p className="text-sm opacity-80">{t('services.orthodontics.title')}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">{t('contact.info.title')}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 opacity-80" />
                <p className="text-sm opacity-80">{t('contact.info.address')}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 opacity-80" />
                <p className="text-sm opacity-80">{t('contact.info.phone')}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 opacity-80" />
                <p className="text-sm opacity-80">{t('contact.info.email')}</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 opacity-80" />
                <div className="text-sm opacity-80 space-y-1">
                  <p>{t('contact.info.weekdays')}</p>
                  <p>{t('contact.info.saturday')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Dr. Getahun Dental Clinic. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
