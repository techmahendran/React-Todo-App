const Task = ({ taskList, onDeleteTask, editTodo, ontoggleCheckBox }) => {
  return (
    <>
      <div className="task_container">
        {taskList.map((task, i) => (
          <div key={i} className="task">
            <label>
              <input
                type="checkbox"
                id="checkBox"
                checked={task.completed}
                onChange={() => ontoggleCheckBox(task.id)}
              />
              <p className={task.completed ? "completed" : ""}>{task.fname}</p>
            </label>

            <div className="btns">
              <button className="editbtn btn" onClick={() => editTodo(task.id)}>
                Edit
              </button>
              <button className="delbtn btn" onClick={() => onDeleteTask(task)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Task;
