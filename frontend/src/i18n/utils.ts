import en from './en.json';
import tr from './tr.json';

export const languages = {
    en: 'English',
    tr: 'Türkçe'
};

export const defaultLang = 'en';

export const translations = { en, tr };

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in translations) return lang as keyof typeof translations;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
    return translations[lang];
}
