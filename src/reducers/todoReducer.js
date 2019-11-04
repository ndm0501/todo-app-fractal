import {
  ADD_TODO,
  SELECT_BUCKET,
  DELETE_TODO,
  EDIT_TODO,
  ADD_BUCKET,
  COMPLETE_TODO
} from "../actions/types";

let initState = {
  todos: [
    {
      id: Math.random(),
      todo: "Explore KanyaKumari",
      bucket: "travel",
      isDone: true
    },
    {
      id: Math.random(),
      todo: "Explore Leh-Laddakh",
      bucket: "travel",
      isDone: false
    },
    { id: Math.random(), todo: "Try Sea-Food", bucket: "food", isDone: false },
    {
      id: Math.random(),
      todo: "Learn to play guitar",
      bucket: "hobby",
      isDone: true
    },
    { id: Math.random(), todo: "Buy groceries", bucket: "home", isDone: false },
    { id: Math.random(), todo: "Buy Milk", bucket: "HomE", isDone: false }
  ],
  selectedBucket: ""
};
//create bucket list with unique values
initState.buckets = Array.from(
  new Set(initState.todos.map(todo => todo.bucket.toLowerCase()))
);
const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodosAfterAdding = [action.payload, ...state.todos];
      return {
        ...state,
        todos: newTodosAfterAdding,
        selectedBucket: action.payload.bucket
      };

    case COMPLETE_TODO:
      const newTodosAfterCompleting = state.todos.map(todo => {
        if (todo.id !== action.payload) {
          return todo;
        } else {
          //toggle
          return { ...todo, isDone: todo.isDone ? false : true };
        }
      });
      return {
        ...state,
        todos: newTodosAfterCompleting
      };

    case DELETE_TODO:
      //find the todo with id and delete
      const newTodosAfterDeleting = state.todos.filter(
        todo => todo.id !== action.payload
      );
      return {
        ...state,
        todos: newTodosAfterDeleting
      };

    case EDIT_TODO:
      // find the todo with id and edit
      const newTodosAfterEditing = state.todos.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        } else {
          return { ...todo, todo: action.payload.newValue };
        }
      });
      return {
        ...state,
        todos: newTodosAfterEditing
      };

    case SELECT_BUCKET:
      return { ...state, selectedBucket: action.payload };

    case ADD_BUCKET:
      const bucketListAfterAdding = Array.from(
        new Set([...state.buckets, action.payload.toLowerCase()])
      );
      return {
        ...state,
        buckets: bucketListAfterAdding
      };

    default:
      return state;
  }
};
export default todoReducer;
