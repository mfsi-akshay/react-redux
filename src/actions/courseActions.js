import * as types from './actionTypes';

export function createCourse(course){
  /* eslint-disable no-console*/
  console.log(1, "Inside courseAction");
  return { type: types.CREATE_COURSE, course };
}
