import React from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { Task } from "../types";

interface TaskProps {
  task: Task;
  toggleTask: (id: number) => void;
}

const TaskComponent: React.FC<TaskProps> = ({ task, toggleTask }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      {task.completed ? (
        <AiOutlineCheckCircle style={{ color: "green" }} />
      ) : (
        <AiOutlineCloseCircle style={{ color: "red" }} />
      )}
    </li>
  );
};

export default TaskComponent;
