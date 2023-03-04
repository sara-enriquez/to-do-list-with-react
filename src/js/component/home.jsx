import React, { useState } from "react";
import Formulario from "./Formulario.jsx";

const Home = () => {
  const [taskList, setTaskList] = useState(["sacar la basura"]);

  const addNewTask = (task) => {
    setTaskList([...taskList, task]);
	
  };

  return (
    <div className="content-home">
      <h1>Tareas Pendientes</h1>
      <div className="content-form">
        <Formulario addNewTask={addNewTask} />
      </div>
      <div className="content-tasks">
        <ul className="list">
          <li>{taskList}</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
