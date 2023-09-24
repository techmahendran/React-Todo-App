import Task from "./Task";

const Tasks = ({
  values,
  setvalues,
  tasks,
  editTodo,
  addTodos,
  onDeleteTask,
  ontoggleCheckBox,
  toggleSubmit,
}) => {
  const addTodosTask = (e) => {
    e.preventDefault();

    // addTodos Submit Function
    addTodos();
  };

  return (
    <>
      <form onSubmit={addTodosTask} id="form">
        <input
          type="text"
          value={values}
          onChange={(e) => setvalues(e.target.value)}
          placeholder="Your Todo Task..."
        />
        <button disabled={values === ""} id="addTask" className="addbtn">
          {toggleSubmit ? "Edit" : "Add Task"}
        </button>
      </form>

      <Task
        taskList={tasks}
        key={tasks.id}
        onDeleteTask={onDeleteTask}
        editTodo={editTodo}
        ontoggleCheckBox={ontoggleCheckBox}
      />
    </>
  );
};

export default Tasks;
