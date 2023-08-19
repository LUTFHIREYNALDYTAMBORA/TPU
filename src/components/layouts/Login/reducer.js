import { LOGIN } from './constants';

const initialState = {
  errorLogin: '',
};

export default function reducer(state = initialState, action = {}) {
  const { type } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        errorLogin: 'error',
      };
    default:
      return state;
  }
}
