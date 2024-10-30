import { ref } from 'vue';

const locale = ref('en');

export function useLocale() {
  const getLocaleValue = (node, key) => {
    return node.locale[locale.value]?.[key] || node.locale[Object.keys(node.locale)[0]]?.[key];
  };

  return {
    locale,
    setLocale: (newLocale: string) => {
      locale.value = newLocale;
    },
    getLocaleValue,
  };
}