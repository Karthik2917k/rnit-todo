import { DelteTodoProps } from "./types";

const DeleteModal = (props: DelteTodoProps) => {
  const { todo, handleCloseDeleteModal } = props;
  const deleteTodo = async (id: number | null) => {
    if (!id) return;
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.status >= 200 && res.status < 300) {
        console.log("Item deleted successfully");
        handleCloseDeleteModal(true);
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>
        {todo?.id || "N/A"} - {todo?.title || "N/A"}
      </h1>
      <div>
        <button onClick={handleCloseDeleteModal}>Cancel</button>
        <button onClick={() => deleteTodo(todo?.id || null)}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteModal;
