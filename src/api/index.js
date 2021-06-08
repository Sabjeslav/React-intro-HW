import configs from '../configs/index';
/**
 *
 * @param {object} options
 * @returns {Promise}
 */
export const getUsers = async (options = {}) => {
  const defaultOptions = {
    page: 1,
    format: 'json',
    results: configs.DEFAULT_AMOUNT,
    seed: configs.API_KEY,
    inc: configs.DEFAULT_USER,
  };

  const finalOptions = {
    ...defaultOptions,
    ...options,
  };

  const query = new URLSearchParams(finalOptions).toString();

  const res = await fetch(`${configs.BASE_URL}/?${query}`);
  return await res.json();
};
