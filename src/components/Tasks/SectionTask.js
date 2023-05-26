import React from "react";
import Task from "./Task";

function SectionTask({ tasks, toggleTask, deleteTask }) {
  return (
    <section className="section__task">
      <h2 className="task-subtitle">Task List</h2>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </section>
  );
}

export default SectionTask;
