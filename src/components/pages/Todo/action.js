import { ADD_TODO, REMOVE_TODO } from './constants';

export function addTodo(text) {
  return {
    item: {
      id: Math.random().toString(36).substring(2),
      text,
    },
    type: ADD_TODO,
  };
}

export function removeTodo(todo) {
  return {
    todo,
    type: REMOVE_TODO,
  };
}
