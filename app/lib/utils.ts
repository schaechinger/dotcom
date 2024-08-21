export const isBrowser = () => 'undefined' !== typeof window;

export const useLocalStorage = () => ({
  getItem: (key: string) => {
    if (isBrowser()) {
      return window.localStorage.getItem(key) || '';
    }

    return '';
  },
  setItem: (key: string, value: string) => {
    if (isBrowser()) {
      window.localStorage.setItem(key, value);

      return true;
    }

    return false;
  },
});
