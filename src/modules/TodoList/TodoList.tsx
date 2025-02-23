import { useQuery } from "@tanstack/react-query";
import { todoListApi } from "./api";

const TodoList = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["tasks", "list"],
    queryFn: todoListApi.getTodoList,
  });
  if (isPending) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      TodoList
      {data.map((item) => (
        <div key={item.id}>{item.text}</div>
      ))}
    </div>
  );
};

export default TodoList;
