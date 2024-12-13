import { createContext } from 'react';

import Francais from "../lang/fr.json";

interface LanguesContextType {
    locale: string;
    messages: typeof Francais;
    setLocale: (locale: string) => void;
}