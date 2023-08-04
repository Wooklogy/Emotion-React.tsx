import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN_US from './languages/en-US.json';
import KO_KR from './languages/ko-KR.json';

interface USEABLE_LANGUAGEprops {
  kor: string;
  eng: string;
}

const languages = ["ko-KR", "en-US"];

export const USEABLE_LANGUAGE: USEABLE_LANGUAGEprops = {
  eng: languages[1],
  kor:languages[0]
}
function loadResource(lng: string) {
  let lanModule = null;

  switch (lng) {
    case 'ko-KR': {
      lanModule = KO_KR;
      break;
    }
    case 'en-US': {
      lanModule = EN_US;
      break;
    }
    default:
      lanModule = EN_US;

      break;
  }

  return lanModule;
}

function getResources(lngs: string[]) {
  const resources: any = {};

  lngs.forEach((lng:string) => {
    resources[lng] = {
       common:loadResource(lng)
    };
  });

  return resources;
}

export function i18nInit() {
  i18n.use(initReactI18next).init({
    resources: getResources(languages),
    ns: ['common'],
    debug: false,
    fallbackLng: 'en-US',
    returnEmptyString: false,
    keySeparator: false,
    nsSeparator: false,
    react: {
      useSuspense: false,
    },
    interpolation: {
      prefix: '%{',
      suffix: '}',
    },
    // parseMissingKeyHandler(key) {
    //   /* eslint-disable-next-line no-console */
    //   console.warn("parseMissingKeyHandler", `'key': '${key}'`);
    //   const keySeparator = "~~";
    //   const value = key.includes(keySeparator)
    //     ? key.split(keySeparator)[1]
    //     : key;

    //   return value;
    // },
  });
}

export function setCurrentLanguage(lng: string) {
  return i18n.changeLanguage(lng);
}

export default i18n;
