import React, { useState } from "react";

const Formulario = (props) => {
  const [task, setTask] = useState("");

  const handleDown = (e) => {
    if (e.keyCode == 13) {
      props.addNewTask(task);
    }
    console.log(props.taskList);
  };
  console.log(props.taskList);
  
  return (
    <input
      onChange={(e)=> setTask(e.target.value)}
      className="task"
      type="text"
      placeholder="Escribir nueva tarea"
      onKeyDown={handleDown}
      value={task}
    />
  );
};

export default Formulario;
