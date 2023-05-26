import React from "react";
import { TbBrandGravatar } from "react-icons/tb";
import "./Task.css";

function Task({ task, toggleTask, deleteTask }) {
  const handleDeleteTask = (e) => {
    e.stopPropagation();
    deleteTask(task.id);
  };

  return (
    <div
      onClick={() => toggleTask(task.id)}
      className={`task ${task.isDone ? "done" : ""}`}
    >
      <div className="tasks">
        <ul className="list">
          <li>{task.task}</li>
        </ul>

        <button className="btn-delete" onClick={handleDeleteTask}>
          <TbBrandGravatar />
        </button>
      </div>
    </div>
  );
}

export default Task;
