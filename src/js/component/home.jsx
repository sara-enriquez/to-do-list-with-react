import React, {useState} from "react";
import Formulario from "./Formulario.jsx";


const Home = () => {
	const [taskList, setTaskList] = useState (["sacar la basura",]);

	const addNewTask = (newTask) => {
    setTaskList(...taskList, newTask)
	}

	return (
		<div className="content-home">
			<h1>Tareas Pendientes</h1>
		<div className="content-form">
			<Formulario addNewTask={addNewTask} taskList={taskList} setTaskList={setTaskList}/>
		</div>
		<div className="content-tasks">
    
		</div>
		</div>
	);
};

export default Home;
