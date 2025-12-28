import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, GraduationCap, Heart, Target, Lightbulb, Award, Users, Star, Shield 
} from 'lucide-react';
import Clinician1 from "@/assets/images/clinician1.jpg"
import Clinician2 from "@/assets/images/clinician2.jpg"
import Clinician3 from "@/assets/images/clinician3.jpg"
import Getaneh from "@/assets/images/getaneh1.jpg"
import Story from "@/assets/images/story1.jpg"
// Sample images
const doctorImage =Getaneh;
const teamImages = [
   Clinician1,Clinician2,Clinician3 
  
];

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, title: t('about.values.care'), description: 'Every treatment plan is tailored to your unique needs.' },
    { icon: Award, title: t('about.values.excellence'), description: 'We strive for the highest standards in dental care.' },
    { icon: Shield, title: t('about.values.integrity'), description: 'Honest, transparent communication in everything we do.' },
    { icon: Lightbulb, title: t('about.values.innovation'), description: 'Embracing new technologies for better outcomes.' },
  ];

  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '5000+', label: 'Happy Patients' },
    { value: '10+', label: 'Expert Staff' },
    { value: '3', label: 'Specializations' },
  ];

  const team = [
    { name: 'Dr. Getahun', role: 'Lead Dentist', specialty: 'General & Cosmetic', img: teamImages[0] },
    { name: 'Sr. Almaz', role: 'Dental Hygienist', specialty: 'Preventive Care', img: teamImages[1] },
    { name: 'Sr. Tigist', role: 'Dental Assistant', specialty: 'Patient Care', img: teamImages[2] },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
    

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-background">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Story Text */}
      <div className="space-y-6 opacity-0 animate-slide-in-left">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
          <Star className="w-4 h-4 text-primary" />
          Our Story
        </span>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          A Legacy of Trusted <span className="text-primary">Dental Care</span>
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed">
          Founded with a passion for excellence, Dr. Getaneh Dental Clinic began
          as a small practice dedicated to compassionate, patient-centered care.
          Over the years, we have grown into a trusted dental clinic serving
          thousands of families with modern technology and personalized treatment.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed">
          Our journey is driven by one simple belief — every patient deserves a
          healthy, confident smile in a safe and welcoming environment.
        </p>

        <Link to="/contact">
          <Button className="hero-gradient text-primary-foreground group">
            Book an Appointment
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      {/* Story Image */}
      <div className="opacity-0 animate-slide-in-right">
        <div className="relative">
          <div className="absolute inset-0 hero-gradient rounded-3xl rotate-3 opacity-20" />
          <img
            src={Story}
            alt="Dental Clinic Story"
            className="relative rounded-3xl shadow-2xl w-full object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Doctor Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="opacity-0 animate-slide-in-left">
            <img src={doctorImage} alt="Dr. Getahun" className="rounded-3xl shadow-2xl w-full" />
          </div>

          {/* Bio */}
          <div className="opacity-0 animate-slide-in-right">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{t('about.doctor.name')}</h2>
            <p className="text-primary font-medium mb-4">{t('about.doctor.title')}</p>
            <p className="text-lg text-muted-foreground mb-6">{t('about.doctor.bio')}</p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">General Dentistry</span>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">Cosmetic Dentistry</span>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">Orthodontics</span>
            </div>
            <Link to="/contact">
              <Button className="hero-gradient text-primary-foreground group">
                {t('nav.book')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`opacity-0 animate-fade-up delay-${(index + 1) * 100}`}>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Mission */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">{t('about.mission.title')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t('about.mission.text')}</p>
          </div>

          {/* Values */}
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-12">{t('about.values.title')}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="bg-card rounded-2xl p-6 shadow-lg text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-secondary flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Clinicians */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Expert Care Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our dedicated team of dental professionals is committed to providing you with the best care possible.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={member.name} className="bg-card rounded-2xl p-6 shadow-lg text-center">
                <img src={member.img} alt={member.name} className="w-20 h-20 mx-auto mb-4 rounded-full object-cover" />
                <h4 className="font-semibold text-foreground mb-1">{member.name}</h4>
                <p className="text-primary text-sm font-medium mb-1">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
