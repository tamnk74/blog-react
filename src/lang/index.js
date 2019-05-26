import i18n from 'i18n-js'

import en from './locales/en'
import es from './locales/es'
import pt from './locales/pt'

i18n.translations = {
  en,
  es,
  pt,
}

i18n.fallbacks = true

export default i18n.t

export * from './locales/keys'