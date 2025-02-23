import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { queryClient } from "../shared/api/queryClient";
import TodoList from "../modules/TodoList/TodoList";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoList />
    </QueryClientProvider>
  );
}

export default App;
