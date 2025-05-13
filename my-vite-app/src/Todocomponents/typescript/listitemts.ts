interface Structure {
  _id: string;
  task: string;
  done: boolean;
}

interface ListitemProps {
  todolist: Structure[];
  deleteTask: (id: string) => void;
  toggleTask?: (id: string) => void;
  deleteAllTasks: () => void;
}


export default ListitemProps