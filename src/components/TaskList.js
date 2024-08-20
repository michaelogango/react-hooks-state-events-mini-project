import React from "react";
import Task from "./Task";
import { TASKS } from "../data";

function TaskList() {
  return (
    <div className="tasks">
      {TASKS.map((task, index) => (
        <Task key={index} category={task.category} text={task.text} />
      ))}
    </div>
  );
}

export default TaskList;
