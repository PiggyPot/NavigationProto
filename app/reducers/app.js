import { actionTypes as AT } from '../actions';

const initialState = {
  authentication: {
    token: null
  }
};

const setAuthenticationDetails= (state, action) => {
  return {
    ...state,
    authentication: {
      ...state.authentication,
      token: action.payload.token
    }
  }
}

export default function app(state = {...initialState}, action) {
  const reducerActions = {
    [AT.SET_AUTHENTICATION_DETAILS]: setAuthenticationDetails,
  };

  return reducerActions[action.type] ? reducerActions[action.type](state, action) : state;
}
