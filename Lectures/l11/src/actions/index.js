import types from '../constants/';

let todoId = 0;

const nextId = () => {
  todoId += 1;
  return todoId;
};


export const submitTodo = (title) => {
    return {
      type: types.SUBMIT_TODO,
      id: nextId(),
      title,
    };
  };


