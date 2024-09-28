import { useEffect, useState } from "react";
import { PostTypes } from "./types";
import "./todos.css";
import DeleteModal from "./DeleteModal";
const Todos = () => {
  const [todos, setTodos] = useState<PostTypes[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [deleteTodoData, setDeleteTodoData] = useState<PostTypes | null>(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (res.status >= 200 && res.status < 300) {
        const data = await res.json();
        setTodos(data);
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteModalOpen = (val: boolean | null) => {
    if (val) {
      fetchData();
    }
    setDeleteModalOpen(false);
  };

  const handleDelteTodo = (todo: PostTypes) => {
    setDeleteTodoData(todo);
    setDeleteModalOpen(true);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <div className="todos">
        <p>Todos</p>
        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : todos && todos?.length > 0 ? (
            todos?.map((todo: PostTypes) => (
              <div key={todo?.id} className="todo-items">
                <div>
                  <h1>
                    {todo.id} - {todo.title}
                  </h1>
                  <p>{todo.body}</p>
                </div>
                <div>
                  <button
                    className="todo-delte"
                    onClick={() => handleDelteTodo(todo)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>No Todos Fond</div>
          )}
        </div>
      </div>
      {isDeleteModalOpen && (
        <div className="delete-modal">
          <div className="delete-content">
            <DeleteModal
              handleCloseDeleteModal={handleDeleteModalOpen}
              idDeleteModalOpen={isDeleteModalOpen}
              todo={deleteTodoData}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Todos;
