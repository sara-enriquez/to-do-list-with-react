import React, { useEffect, useState } from "react";
import Formulario from "./Formulario.jsx";

const Home = (props) => {
  const [taskList, setTaskList] = useState([]);
  const [deleted, setDeleted] = useState();
  const [taskDone, setTaskDone] = useState(false);

  let doneClass = "fa-solid fa-circle-check";
  let undoneClass = "fa-regular fa-circle-check";

  const handleDone = (i) => {
    let copyArray = [...taskList];
    copyArray[i].label = !copyArray[i].label;
    setTaskList(copyArray);
  };

  useEffect(() => {
    if (deleted) {
      let newArray = taskList.filter((tarea) => tarea.id != deleted);
      setTaskList(newArray);
    }
  }, [deleted]);

  return (
    <div className="content-home">
      <h1>Tareas Pendientes</h1>
      <div className="content-form">
        <Formulario
          taskList={taskList}
          setTaskList={setTaskList}
          taskDone={taskDone}
          setTaskDone={setTaskDone}
        />
      </div>
      <div className="content-tasks">
        <ul className="list">
          {taskList.map((task, i) => {
            return (
              <li className={task.label ? "liDone" : "liUndone"}>
                {task.body}
                <i
                  className="fa-regular fa-circle-xmark"
                  onClick={() => setDeleted(task.id)}
                ></i>
                <i
                  className={task.label ? doneClass : undoneClass}
                  onClick={() => {
                    handleDone(i);
                  }}
                ></i>
              </li>
            );
          })}
          <li className={taskList.length ? "liUndone" : "liDone"}>{taskList.length} {taskList.length ==1 ? "tarea pendiente" : "tareas pendientes"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
