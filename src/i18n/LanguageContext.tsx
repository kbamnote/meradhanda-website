import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { dict, LANGUAGES, type LangCode, type Entry } from './translations';

const STORAGE_KEY = 'md_lang';
const DEFAULT_LANG: LangCode = 'hinglish';

const validCodes = new Set(LANGUAGES.map((l) => l.code));

interface LanguageContextValue {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && validCodes.has(saved as LangCode)) return saved as LangCode;
    } catch {
      /* localStorage unavailable */
    }
    return DEFAULT_LANG;
  });

  const setLang = (next: LangCode) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    // Reflect the active language on <html> for accessibility.
    document.documentElement.lang = lang === 'hinglish' ? 'hi' : lang;
  }, [lang]);

  const t = (key: string): string => {
    const entry = dict[key];
    if (!entry) return key;
    // Use ?? so an intentionally empty string ('') is kept rather than
    // falling back to the English value.
    return entry[lang] ?? entry.en ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return ctx;
}

/**
 * Component-local translator. Pass a colocated dictionary and get back a `t`
 * bound to the active language. Lets each component own its own strings
 * (no central-file edits needed). Empty strings are respected; missing keys
 * fall back to English, then to the key itself.
 */
export function useT(localDict: Record<string, Entry>) {
  const { lang } = useTranslation();
  return (key: string): string => {
    const entry = localDict[key];
    if (!entry) return key;
    return entry[lang] ?? entry.en ?? key;
  };
}
