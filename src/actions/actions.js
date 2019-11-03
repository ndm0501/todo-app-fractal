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

//delete todo action creator
export const deleteTodo = id => {
  return { type: DELETE_TODO, payload: id };
};

//select bucket action creator
export const selectBucket = bucket => {
  return { type: SELECT_BUCKET, payload: bucket };
};
//add a new bucket
export const addBucket = bucket => {
  return { type: ADD_BUCKET, payload: bucket };
};
//when todo is complete, change isDone to true
export const completeTodo = id => {
  return { type: COMPLETE_TODO, payload: id };
};
