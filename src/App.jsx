import React from "react";
import { useState } from "react";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [major, setMajor] = useState("");
  const [searchTask, setSearchTask] = useState("");
  const handelAddTask = () => {
    const obj = { name: name, id: id, major: major };

    if ((name && id && major) !== "") {
      setTasks([...tasks, obj]);
      setName("");
      setId("");
      setMajor("");
    }
  };
  const filteredTask = tasks.filter(
    (task) =>
      task.name.toLowerCase().includes(searchTask.toLowerCase()) ||
      task.id.includes(searchTask) ||
      task.major.toLowerCase().includes(searchTask.toLowerCase())
  );

  const handelRemoveTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => taskToRemove.id !== task.id));
  };

  return (
    <div className="App">
      <h1>Task App</h1>
      <input
        type="text"
        placeholder="Add Your Name Here..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Add Your ID Here..."
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add Your Major Here..."
        value={major}
        onChange={(e) => setMajor(e.target.value)}
      />

      <button onClick={handelAddTask}>Add Task</button>
      <div>
        <input
          type="text"
          placeholder="Search Your Task Here..."
          value={searchTask}
          onChange={(e) => setSearchTask(e.target.value)}
        />
      </div>
      <div>
        <h2>My Tasks</h2>
        <ul>
          {filteredTask.map((task, index) => (
            <li key={index}>
              {task.name}     {task.id}     {task.major}
              <button onClick={() => handelRemoveTask(task)}>
                Remove Task
              </button>
            </li>
          ))}
        </ul>
        {searchTask && !filteredTask.length && "Hmm,, No Search found ..."}
      </div>
    </div>
  );
};

export default App;
