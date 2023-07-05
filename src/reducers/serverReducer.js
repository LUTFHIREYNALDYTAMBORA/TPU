import { HYDRATE } from 'next-redux-wrapper';

const initialState = {};

export default function reducer(state = initialState, action = {}) {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  } else {
    return state;
  }
}
