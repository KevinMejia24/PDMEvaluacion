import React from 'react';
import Task from './Task';

//componente que tendra todas nuestras tareas
const ToDo = ({toDo, handleToggle}) => {

    return (
        //En nuestra ToDo, mapearemos el objeto para crear tareas individuales.
        //y obtendremos la tarea real que estara en nuestra lista.
        
        //con el uso de un contenedor mostraremos las tareas en salida al darle agregar
        <div id="todo" className="mb-40 text-2xl bg-white-light mx-64 rounded-md">
            {toDo.map(todo => {
                return (
                        <Task todo={todo} handleToggle={handleToggle}/>             
                )
            })}
            
        </div>
    
    );
};

export default ToDo;