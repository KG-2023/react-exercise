import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
import Nav from './components/Nav';
import AddTask from './components/AddTask'
import 'animate.css';



/*********************************ROOT COMPONENT*******************/

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1, 
        text: 'Study react event handlers',
        day: 'Sept 4, 2023',
        reminder: true
    },
    {
        id: 2, 
        text: 'Study react states',
        day: 'Sept 4, 2023',
        reminder: true
    }, 
    {
        id: 3, 
        text: 'Buy grocery items',
        day: 'Sept 4, 2023',
        reminder: false
    }
]);

  // ADD TASK 

  const addTask = (task) =>{
    // console.log(task);
    const id = Math.floor(Math.random() * 10000 + 1);
    // console.log(id);

    const newTask = {id, ...task}
    setTasks([...tasks, newTask]);
  }

  // TOGGLE THE TASK
  const toggleActive = (id)=>{
    // console.log(id);
    setTasks(tasks.map((task)=>task.id === id ? 
    {...task, reminder: !task.reminder } : task
    ))
  }

  // DELETE A TASK
  const deleteTask = (id) => {
    // alert('delete task test ' + id);
    // console.log('This is a delete task code test for the delete', id);
    setTasks(tasks.filter((task) => task.id !==id)
    )
  }

  return (
    <>
      <div className="navigation">
      <Nav />
      </div>
       
      <div className="container animate__heartBeat">
        <Header title='TO-DO-TRACKER' />  
        <AddTask onAdd={addTask}/> 
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleActive}/> :  'All tasks are accomplished' }
      </div>
    </>
  );
}

export default App;
