import React from 'react';

import './Task.css'

//componente que tendra una tarea
const Task = ({todo, handleToggle}) => {
    //Verifica si hubo click estilo a nuestra tarea al dar click
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        //se agrega un classname para poder dar estilo con tailwind cuando nuestra tarea este completada.
        <div id={todo.id} key={todo.id + todo.task} name="task" value={todo.id} onClick={handleClick} className={todo.complete ? "task completed" : "task"}>
            {todo.task}
        </div>
    );
};

export default Task;