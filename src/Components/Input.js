import React, { useState } from 'react';

//componente que tendra el input para agregar nuevas tareas
const Input = ({ addTask }) => {
    
    //Seguimiento de cualquier entrada que el usuario escriba en su formulario.  
    //El estado inicial se establece en una cadena vacía, 
    const [ userInput, setUserInput ] = useState('');

    //Esta es la función que manejará los cambios del estado local. 
    //Cada vez que un usuario escribe en el cuadro de entrada, 
    //el estado cambiará para reflejar la entrada más reciente.
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    //Cuando un usuario presiona 'Enter' o hace clic en el botón 'Enviar', 
    //esta función se activará para agregar la tarea a la ToDo.
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        //El controlador de cambios tomará el valor aquí y establecerá el estado cada vez que cambie.

        //Hacemos uso de un form, el cual contendra un input y un boton, a los cuales se les ha implementado tailwind
        <form onSubmit={handleSubmit}>
            
            <input id="input" value={userInput} type="text" onChange={handleChange} placeholder="Pon tu tarea aca" className="text-2xl font-light text-center border-2 border-gray-200 rounded mr-8  mb-20 bg-white-light w-6/12 pt-1"/>
            <button className="bg-lime-500 border-teal-darkest border-2 w-16 rounded-md text-2xl hover:shadow-md pt-1 "><i class="fas fa-plus"></i></button>
        </form>
    );
};

export default Input;