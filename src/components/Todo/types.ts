export interface PostTypes {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface DelteTodoProps {
  todo: PostTypes | null;
  idDeleteModalOpen: boolean;
  handleCloseDeleteModal: () => void;
}
