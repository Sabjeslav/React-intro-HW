export const initialState = {
  isFetching: false,
  data: {
    messages: [],
    users: [],
  },
  error: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'DATA_RESPONSE_REQUEST':
      return { ...initialState, isFetching: true };
    case 'DATA_RESPONSE_SUCCESS':
      const {
        data: { users, messages },
      } = action;
      const usersMap = new Map();
      users.forEach(user => usersMap.set(user.id, user));
      const messagesWithAuthors = messages.map(msg => ({
        ...msg,
        author: usersMap.get(msg.authorId),
      }));
      return {
        ...state,
        data: {
          users,
          messages: messagesWithAuthors,
        },
        isFetching: false,
      };
    case 'DATA_RESPONSE_ERROR':
      return { ...state, isFetching: false, error: action.error };
    default:
      throw new Error();
  }
};
