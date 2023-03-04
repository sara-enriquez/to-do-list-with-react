import React, { useState } from "react";

const Formulario = (props) => {
  const [task, setTask] = useState("");

  const handleDown = (e) => {
    if (e.keyCode == 13) {
      props.addNewTask(task);
      console.log(task);
    }
  };
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <input
      onChange={handleChange}
      className="input-task"
      type="text"
      placeholder="Escribir nueva tarea"
      onKeyDown={handleDown}
      value={task}
    />
  );
};

export default Formulario;
