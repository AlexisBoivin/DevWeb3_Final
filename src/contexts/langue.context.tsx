import { createContext } from 'react';

import Francais from "../lang/fr.json";
import Anglais from '../lang/en.json';

interface LanguesContextType {
    locale: string;
    messages: typeof Francais;
    setLocale: (locale: string) => void;
}