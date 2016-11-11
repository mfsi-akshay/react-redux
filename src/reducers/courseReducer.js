import * as types from '../actions/actionTypes';

export default function courseReducer(state=[], action){
  switch (action.type) {
    case types.CREATE_COURSE:
      /* eslint-disable no-console */
      console.log(2, "Inside courseReducer");
      return [...state, Object.assign({}, action.course)];

    default:
      return state;
  }
}
