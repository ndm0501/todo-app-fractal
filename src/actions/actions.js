import {
  ADD_TODO,
  SELECT_BUCKET,
  EDIT_TODO,
  DELETE_TODO,
  ADD_BUCKET,
  COMPLETE_TODO
} from "./types";

//add todo action creator
export const addTodo = todo => {
  return { type: ADD_TODO, payload: todo };
};

//edit todo action creator
export const editTodo = (newValue, id) => {
  return { type: EDIT_TODO, payload: { newValue, id } };
};

//async
//use of redux thunk
//delete todo action creator
export const deleteTodo = id => dispatch => {
  //mocking async dispatch
  //dispatching after 100ms
  setTimeout(() => dispatch({ type: DELETE_TODO, payload: id }), 100);
};

//select bucket action creator
export const selectBucket = bucket => {
  return { type: SELECT_BUCKET, payload: bucket };
};

//async
//using redux thunk
//add a new bucket
export const addBucket = bucket => dispatch => {
  //mocking async dispatch
  //dispatching after 100 millisecs
  setTimeout(() => dispatch({ type: ADD_BUCKET, payload: bucket }), 100);
};
//when todo is complete, change isDone to true
export const completeTodo = id => {
  return { type: COMPLETE_TODO, payload: id };
};
