export type TodoDto = {
  id: string;
  text: string;
  done: boolean;
};
const BASE_URL = "http://localhost:3000/";
export const todoListApi = {
  getTodoList: () => {
    return fetch(`${BASE_URL}/tasks`).then(
      (res) => res.json() as Promise<TodoDto[]>
    );
  },
};
