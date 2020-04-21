import { createStore } from "redux";

const ADD = "add";
const DELETE = "delete";

export const addTodo = (text: string) => {
  return { type: ADD, text: text } as const;
};

export const deleteTodo = (id: number) => {
  return { type: DELETE, id: id } as const;
};

interface AddActionType {
  type: typeof ADD;
  text: string;
}

interface DeleteActionType {
  type: typeof DELETE;
  id: number;
}

function reducer(
  state: { text: string; id: number }[] = [],
  action: AddActionType | DeleteActionType
) {
  switch (action.type) {
    case ADD:
      return [...state, { text: action.text, id: Math.random() }];
    case DELETE:
      return state.filter((everyTodo) => everyTodo.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
