import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Stethoscope,
  Sparkles,
  SmilePlus,
  CheckCircle2,
  ArrowRight,
  Scan,
  Droplet,
  Syringe,
  Scissors,
  Star,
  Zap,
} from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const mainServices = [
    {
      icon: Stethoscope,
      title: t('services.general.title'),
      description: t('services.general.desc'),
      color: 'from-primary to-primary/80',
      features: [
        { icon: Scan, text: t('services.checkup') },
        { icon: Droplet, text: t('services.cleaning') },
        { icon: Syringe, text: t('services.filling') },
        { icon: Scissors, text: t('services.extraction') },
      ],
    },
    {
      icon: Sparkles,
      title: t('services.cosmetic.title'),
      description: t('services.cosmetic.desc'),
      color: 'from-accent to-accent/80',
      features: [
        { icon: Star, text: t('services.whitening') },
        { icon: Zap, text: t('services.veneers') },
      ],
    },
    {
      icon: SmilePlus,
      title: t('services.orthodontics.title'),
      description: t('services.orthodontics.desc'),
      color: 'from-primary to-accent',
      features: [
        { icon: CheckCircle2, text: t('services.braces') },
        { icon: CheckCircle2, text: t('services.aligners') },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-up">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={service.title}
                className={`opacity-0 animate-fade-up delay-${(index + 1) * 100}`}
              >
                <div className="bg-card rounded-3xl overflow-hidden shadow-xl card-shadow hover:card-shadow-hover transition-all duration-500 border border-border">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                        <service.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {service.description}
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature.text} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl">
                            <feature.icon className="w-5 h-5 text-primary shrink-0" />
                            <span className="text-sm font-medium text-foreground">{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      <Link to="/contact" className="inline-block">
                        <Button className="hero-gradient text-primary-foreground group">
                          {t('nav.book')}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>

                    {/* Visual */}
                    <div className={`bg-gradient-to-br ${service.color} p-8 lg:p-12 flex items-center justify-center min-h-[300px]`}>
                      <div className="text-center text-primary-foreground">
                        <service.icon className="w-24 h-24 mx-auto mb-6 opacity-90 animate-float" />
                        <h3 className="font-display text-2xl font-semibold opacity-90">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('hero.subtitle')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('hero.description')}
            </p>
            <Link to="/contact">
              <Button size="lg" className="hero-gradient text-primary-foreground shadow-lg group">
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
