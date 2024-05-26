import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Ancient Women in STEM': 'Ancient Women in STEM',
      'Search women in STEM...': 'Search women in STEM...',
      'All Subjects': 'All Subjects',
      Mathematics: 'Mathematics',
      Astronomy: 'Astronomy',
      Physics: 'Physics',
      Chemistry: 'Chemistry',
      Biology: 'Biology',
      'Read More': 'Read More',
    },
  },
  // Add more languages here
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
