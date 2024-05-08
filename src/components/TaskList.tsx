import React from "react";
import TaskComponent from "./Task";
import { Task } from "../types";

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask }) => {
  return (
    <div className="task-list ">
      <ul>
        {tasks.map((task) => (
          <TaskComponent key={task.id} task={task} toggleTask={toggleTask} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
