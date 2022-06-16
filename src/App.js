import React, { useState } from 'react';
//mock data
import data from "./Components/data.json";
//importacion de nuestros components
import Input from "./Components/Input";
import ToDo from './Components/ToDo';

function App() {

  //useState: devuelve un valor con estado
  
  const [ toDoList, setToDoList ] = useState(data);
//Funcion que se encarga cuando un usuario hace clic en una tarea, 
//cambiamos el estado de completo a verdadero si es falso o viceversa.
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }
//Funcion encargada de agregar una nueva tarea a la TodoList
  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    //En este punto llamamos a nuestros componentes para que se muestren en nuestra pagina Web

    //Hacemos uso de contenedores con diseño desde tailwind en el cual se nos enseñaran el header, input, todo.
    <div className="App">
      
      <div id="container"className="text-center border-solid border-4  my-14 mx-20 mt-6 "> 
      <header>
            
        <h1 className="text-4xl font-light text-center my-20">TODO-LIST</h1>
            
        </header>
      <Input addTask={addTask}/>
      <ToDo toDo={toDoList} handleToggle={handleToggle}/>

      <div id="indications">
        <h3>Agrega una tarea y marcala como completada al dar click sobre ella</h3>
      </div>
      
      </div>
    </div>
  );
}

export default App;