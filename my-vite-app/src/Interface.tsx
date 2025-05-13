interface TodoItem {
    id: string;
    task: string;
    done: boolean;
  }
  interface TodoItemFromServer {
    _id: string;
    task: string;
    done: boolean;
  }