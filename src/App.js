import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

// const getTodos = () => {};
// [
//   {
//     id: 1,
//     fname: "mahe",
//     completed: true,
//   },
//   {
//     id: 2,
//     fname: "venkat",
//     completed: false,
//   },
//   {
//     id: 3,
//     fname: "senthil",
//     completed: false,
//   },
// ];
// const todoLists = localStorage.getItem("todos") || [];
const App = () => {
  // eslint-disable-next-line no-use-before-define
  const [tasks, setTasks] = useState(() => {
    const getItems = localStorage.getItem("todos");
    if (getItems === null) {
      return [];
    }

    return JSON.parse(getItems);
  });

  const [values, setvalues] = useState("");
  const [toggleSubmit, setToggleSubmit] = useState(false);
  const [isEditTodo, setIsEditTodo] = useState(null);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);

  const addTodoItems = () => {
    if (!values) {
      alert("enter Field");
    } else if (values && toggleSubmit) {
      setTasks(
        tasks.map((task) => {
          if (task.id === isEditTodo) {
            return { ...task, fname: values };
          }
          return task;
        })
      );
      setToggleSubmit(false);
      setvalues("");
    } else {
      const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;

      const newItems = {
        id: id,
        fname: values,
        completed: false,
      };

      setTasks([...tasks, newItems]);
      setvalues("");
    }
  };

  const toggleCheckBox = (id) => {
    const checkBox = tasks.map((task) => {
      return task.id === id ? { ...task, completed: !task.completed } : task;
    });

    setTasks(checkBox);
  };

  // editTodo

  const editTodo = (id) => {
    const editTodo = tasks.find((task) => task.id === id);

    setvalues(editTodo.fname);

    setToggleSubmit(true);

    setIsEditTodo(id);
  };

  const delTask = (index) => {
    const taskDeleteMsg = window.confirm("Are You Sure Delete Task");
    if (taskDeleteMsg) {
      setTasks(
        tasks.filter((task) => {
          return task !== index;
        })
      );
    }
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <>
      <div className="container">
        <h1>Todo Lists</h1>

        <Tasks
          values={values}
          setvalues={setvalues}
          tasks={tasks}
          setTasks={setTasks}
          addTodos={addTodoItems}
          toggleCheckBox={toggleCheckBox}
          editTodo={editTodo}
          isEditTodo={isEditTodo}
          onDeleteTask={delTask}
          ontoggleCheckBox={toggleCheckBox}
          toggleSubmit={toggleSubmit}
          setToggleSubmit={setToggleSubmit}
        />

        <Footer tasks={tasks} clearAllTasks={clearAllTasks} />
      </div>
    </>
  );
};

export default App;
