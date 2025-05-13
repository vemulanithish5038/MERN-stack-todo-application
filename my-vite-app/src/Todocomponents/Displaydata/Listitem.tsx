import { memo } from 'react';
import './Listitem.css';
import deletelogo from '../assets/delete.svg';
import ListitemProps from '../typescript/listitemts';

const Listitem: React.FC<ListitemProps & { deletingTaskId: string | null }> = ({
  todolist,
  deleteTask,
  toggleTask,
  deleteAllTasks,
  deletingTaskId
}) => {
  return (
    <div>
      {todolist.length > 0 ? (
        todolist.map((task) => (
          <div
            className="userlistoftasks"
            key={task._id}
            style={{
              pointerEvents: deletingTaskId === task._id ? 'none' : 'auto',
              opacity: deletingTaskId === task._id ? 0.5 : 1,
            }}
          >
            <input
              type="checkbox"
              name="inptcheckbox"
              id={`inputcheckbox-${task._id}`}
              checked={task.done}
              onChange={() => toggleTask?.(task._id)}
            />
            <label
              htmlFor={`inputcheckbox-${task._id}`}
              className="usertask"
              style={{ textDecoration: task.done ? 'line-through' : 'none' }}
            >
              {task.task}
            </label>
            <div>
              <button onClick={() => deleteTask(task._id)} disabled={deletingTaskId === task._id}>
                <img src={deletelogo} className="deletelogo" alt="delete logo" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No tasks available</p>
      )}

      {todolist.length > 0 && (
        <button className="delete-all-button" onClick={deleteAllTasks}>
          Delete All Tasks
        </button>
      )}
    </div>
  );
};

export default memo(Listitem);
