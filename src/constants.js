const constants = {
  REGEX_NAME: /^[А-Я][а-яё]*|[A-Z][a-z]*$/,
  REGEX_EMAIL: /^[^\s@]+@[^\s@]+$/,
  REGEX_PASSWORD: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
  THEMES: {
    DARK: 'DARK',
    LIGHT: 'LIGHT',
  },
};

export default constants;
