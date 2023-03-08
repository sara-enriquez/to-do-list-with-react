
import React, { useEffect, useState } from "react";

const Formulario = (props) => {
  const [task, setTask] = useState();
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    if (task !== undefined) {
      setCounter((counter) => counter + 1);
      let object = {
        label: props.taskDone,
        id: counter,
        body: task,
      };
      props.setTaskList(props.taskList.concat(object));
    }
  }, [task]);

  return (
    <input
      className="input-task"
      type="text"
      id="tarea"
      placeholder="Escribir nueva tarea"
      onKeyDown={(e) => {
        if (e.key === "Enter" && document.getElementById("tarea").value !== "") {
          setTask(e.target.value);
          tarea.value = "";
        }
      }}
    />
  );
};

export default Formulario;
