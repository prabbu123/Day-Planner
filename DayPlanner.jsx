import { useState } from "react";

export default function DayPlanner() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-2xl shadow">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 border p-2 rounded"
          placeholder="Enter task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((t, i) => (
          <li key={i} className="p-2 bg-gray-100 rounded">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}