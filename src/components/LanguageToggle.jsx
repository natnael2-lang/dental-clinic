import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'am' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-foreground hover:bg-secondary transition-colors"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === 'en' ? 'አማ' : 'EN'}</span>
    </Button>
  );
};

export default LanguageToggle;
