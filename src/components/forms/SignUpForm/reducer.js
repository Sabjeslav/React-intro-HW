export const reducer = (state, action) => {
  const { name, value } = action;

  return {
    ...state,
    [name]: value,
  };
};
