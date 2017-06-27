import { actionTypes } from '../actions';

const initialState = {};


export default function app(state = {...initialState}, action) {
  const reducerActions = {};

  return reducerActions[action.type] ? reducerActions[action.type](state, action) : state;
}
