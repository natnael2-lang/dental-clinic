import React, { createContext, useContext, useState } from 'react';

export const translations = {
  // Navigation
  'nav.home': { en: 'Home', am: 'መነሻ' },
  'nav.services': { en: 'Services', am: 'አገልግሎቶች' },
  'nav.about': { en: 'About', am: 'ስለ እኛ' },
  'nav.contact': { en: 'Contact', am: 'ያግኙን' },
  'nav.book': { en: 'Book Appointment', am: 'ቀጠሮ ይያዙ' },

  // Hero Section
  'hero.title': { en: {
    first: "Dr. Getaneh",
    highlight: "Dental Clinic"
  }, am: 'ዶ/ር ጌታነህ የጥርስ ክሊኒክ' },
  'hero.subtitle': { en: 'Your Smile, Our Priority', am: 'ፈገግታዎ ቅድሚያችን ነው' },
  'hero.description': { 
    en: 'Experience world-class dental care with a gentle touch. We provide comprehensive dental services for the whole family.',
    am: 'ከፍተኛ ደረጃ ያለው የጥርስ ህክምና አገልግሎት ያግኙ። ለመላው ቤተሰብ አጠቃላይ የጥርስ አገልግሎት እንሰጣለን።'
  },
  'hero.cta': { en: 'Schedule Your Visit', am: 'ጉብኝትዎን ያስይዙ' },
  'hero.call': { en: 'Or Call Us', am: 'ወይም ይደውሉልን' },

  // Services
  'services.title': { en: 'Our Services', am: 'አገልግሎቶቻችን' },
  'services.subtitle': { en: 'Comprehensive Dental Care', am: 'አጠቃላይ የጥርስ ህክምና' },

  'services.general.title': { en: 'General Dentistry', am: 'አጠቃላይ የጥርስ ህክምና' },
  'services.general.desc': { 
    en: 'Regular checkups, cleanings, fillings, and extractions to maintain your oral health.',
    am: 'የአፍ ጤናዎን ለመጠበቅ መደበኛ ምርመራዎች፣ ጽዳት፣ ሙሌቶች እና ማውጣት።'
  },

  'services.cosmetic.title': { en: 'Cosmetic Dentistry', am: 'ኮስሜቲክ የጥርስ ህክምና' },
  'services.cosmetic.desc': { 
    en: 'Teeth whitening, veneers, and smile makeovers to enhance your beautiful smile.',
    am: 'ጥርስ ማብራት፣ ቬኒር እና ፈገግታ ማስተካከያ ለውብ ፈገግታዎ።'
  },

  'services.orthodontics.title': { en: 'Orthodontics', am: 'ኦርቶዶንቲክስ' },
  'services.orthodontics.desc': { 
    en: 'Braces, aligners, and teeth straightening for a perfect, aligned smile.',
    am: 'ብሬስ፣ አሊናር እና ጥርስ ማስተካከል ለፍጹም ተስተካክሎ ፈገግታ።'
  },

  'services.checkup': { en: 'Dental Checkups', am: 'የጥርስ ምርመራ' },
  'services.cleaning': { en: 'Teeth Cleaning', am: 'ጥርስ ማጽዳት' },
  'services.filling': { en: 'Dental Fillings', am: 'ጥርስ ሙሌት' },
  'services.extraction': { en: 'Tooth Extraction', am: 'ጥርስ ማውጣት' },
  'services.whitening': { en: 'Teeth Whitening', am: 'ጥርስ ማብራት' },
  'services.veneers': { en: 'Dental Veneers', am: 'ዴንታል ቬኒር' },
  'services.braces': { en: 'Braces', am: 'ብሬስ' },
  'services.aligners': { en: 'Clear Aligners', am: 'ግልጽ አሊናር' },

  // About
  'about.title': { en: 'About Us', am: 'ስለ እኛ' },
  'about.subtitle': { en: 'Dedicated to Your Dental Health', am: 'ለጥርስ ጤናዎ የተሰጠን' },
  'about.doctor.name': { en: 'Dr. Getaneh', am: 'ዶ/ር ጌታነህ' },
  'about.doctor.title': { en: 'Lead Dentist & Founder', am: 'ዋና ጥርስ ሐኪም እና መስራች' },
  'about.doctor.bio': { 
    en: 'With over 15 years of experience in dental care, Dr. Getaneh has dedicated his career to providing exceptional dental services to the community. He graduated from Addis Ababa University School of Dentistry and has continued his education with advanced training in cosmetic and restorative dentistry.',
    am: 'ከ15 ዓመታት በላይ በጥርስ ህክምና ልምድ ያለው ዶ/ር ጌታነህ ሙያውን ለማህበረሰቡ ልዩ የጥርስ አገልግሎት ለመስጠት አውሏል። ከአዲስ አበባ ዩኒቨርሲቲ የጥርስ ህክምና ትምህርት ቤት ተመርቆ በኮስሜቲክ እና ተሃድሶ የጥርስ ህክምና የላቀ ስልጠና ወስዷል።'
  },

  'about.mission.title': { en: 'Our Mission', am: 'ተልእኮችን' },
  'about.mission.text': { 
    en: 'To provide exceptional dental care in a comfortable, welcoming environment while using the latest technology and techniques.',
    am: 'ዘመናዊ ቴክኖሎጂ እና ዘዴዎችን በመጠቀም ምቹ እና አቀባበል በሚያደርግ አካባቢ ልዩ የጥርስ ህክምና መስጠት።'
  },

  'about.values.title': { en: 'Our Values', am: 'እሴቶቻችን' },
  'about.values.care': { en: 'Patient-Centered Care', am: 'በታካሚ ላይ ያተኮረ እንክብካቤ' },
  'about.values.excellence': { en: 'Excellence in Service', am: 'በአገልግሎት ውስጥ ልቀት' },
  'about.values.integrity': { en: 'Integrity & Trust', am: 'ታማኝነት እና እምነት' },
  'about.values.innovation': { en: 'Continuous Innovation', am: 'ቀጣይ ፈጠራ' },

  // Contact
  'contact.title': { en: 'Contact Us', am: 'ያግኙን' },
  'contact.subtitle': { en: "We'd Love to Hear From You", am: 'ከእርስዎ መስማት እንፈልጋለን' },
  'contact.form.title': { en: 'Send Us a Message', am: 'መልእክት ይላኩልን' },
  'contact.form.name': { en: 'Full Name', am: 'ሙሉ ስም' },
  'contact.form.phone': { en: 'Phone Number', am: 'ስልክ ቁጥር' },
  'contact.form.email': { en: 'Email Address', am: 'ኢሜይል አድራሻ' },
  'contact.form.message': { en: 'Your Message', am: 'መልእክትዎ' },
  'contact.form.submit': { en: 'Send Message', am: 'መልእክት ላክ' },
  'contact.form.success': { en: 'Thank you! We will contact you soon.', am: 'አመሰግናለሁ! በቅርቡ እናገኝዎታለን።' },

  'contact.info.title': { en: 'Contact Information', am: 'የመገኛ መረጃ' },
  'contact.info.address': { en: '5 Kilo, Addis Ababa, Ethiopia', am: '5 ኪሎ፣ አዲስ አበባ፣ ኢትዮጵያ' },
  'contact.info.phone': { en: '+251 911 123 456', am: '+251 911 123 456' },
  'contact.info.email': { en: 'info@drgetaneh.com', am: 'info@drgetaneh.com' },
  'contact.info.hours': { en: 'Opening Hours', am: 'የስራ ሰዓት' },
  'contact.info.weekdays': { en: 'Mon - Fri: 8:00 AM - 6:00 PM', am: 'ሰኞ - አርብ: ከ8:00 - 6:00' },
  'contact.info.saturday': { en: 'Saturday: 9:00 AM - 4:00 PM', am: 'ቅዳሜ: ከ9:00 - 4:00' },
  'contact.info.sunday': { en: 'Sunday: Closed', am: 'እሁድ: ዝግ' },

  // Footer
  'footer.rights': { en: 'All rights reserved.', am: 'ሁሉም መብቶች የተጠበቁ ናቸው።' },
  'footer.tagline': { en: 'Creating Beautiful Smiles', am: 'ውብ ፈገግታዎችን መፍጠር' },

  // Common
  'common.learnMore': { en: 'Learn More', am: 'የበለጠ ይወቁ' },
  'common.readMore': { en: 'Read More', am: 'ተጨማሪ ያንብቡ' },
  'common.viewAll': { en: 'View All', am: 'ሁሉንም ይመልከቱ' },

  // Why Choose Us
  'why.title': { en: 'Why Choose Us', am: 'ለምን እኛን ይምረጡ' },
  'why.experience.title': { en: 'Experienced Team', am: 'ልምድ ያለው ቡድን' },
  'why.experience.desc': { en: 'Over 15 years of dental expertise', am: 'ከ15 ዓመታት በላይ የጥርስ ህክምና ልምድ' },
  'why.equipment.title': { en: 'Modern Equipment', am: 'ዘመናዊ መሣሪያዎች' },
  'why.equipment.desc': { en: 'Latest technology for best results', am: 'ለምርጥ ውጤት ዘመናዊ ቴክኖሎጂ' },
  'why.comfort.title': { en: 'Patient Comfort', am: 'የታካሚ ምቾት' },
  'why.comfort.desc': { en: 'Gentle care in a relaxing environment', am: 'በሚያረጋጋ አካባቢ ለስላሳ እንክብካቤ' },
  'why.affordable.title': { en: 'Affordable Care', am: 'ተመጣጣኝ እንክብካቤ' },
  'why.affordable.desc': { en: 'Quality dental care at fair prices', am: 'በተመጣጣኝ ዋጋ ጥራት ያለው የጥርስ ህክምና' },
};

// Language Context
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
