import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect  } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
import Nav from './components/Nav';
import AddTask from './components/AddTask'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from './components/Footer'
import AppVersion from './components/AppVersion'
import 'animate.css';



/*********************************ROOT COMPONENT*******************/

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
 useEffect(()=> {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
 }, []) 
  
 // FETCH TASKS
 const fetchTasks = async () =>{
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  return data
}
 

const fetchTask = async (id) =>{
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  return data
}
 // ADD TASK 
  const addTask = async (task) =>{
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json();
    setTasks([...tasks, data]);
  }

  // TOGGLE THE TASK
  const toggleActive = async (id)=>{
    const taskToToggle = await fetchTask(id);
    const updtask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers : {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updtask)
    })

    const data = await res.json();

    setTasks(tasks.map((task)=>task.id === id ? 
    {...task, reminder: data.reminder } : task
    ))
  }

  // DELETE A TASK
  const deleteTask = async (id) => {
    // alert('delete task test ' + id);
    // console.log('This is a delete task code test for the delete', id);

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !==id)
    )
  }

  return (
    <>
      <div className="navigation">
      <Nav />
      </div>
      <Router>
        <div className="container animate__heartBeat">
          <Header title='TO-DO-TRACKER' onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />  
          <Routes>
            <Route path='/' element={
              <>
              {showAddTask && <AddTask onAdd={addTask}/>}
              {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleActive}/> :  'All tasks are accomplished' }
              </>
            } />
              
            <Route path='/version'  element={<AppVersion />}/>
          </Routes>
          <Footer />
          
        </div>
      </Router>
      
    </>
  );
}

export default App;
