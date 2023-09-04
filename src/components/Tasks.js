import React, { useState } from "react";

const Tasks = () => {
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

    return (
        <>
        {tasks.map((task)=>(
            <h3 key={task.id}>
            {task.text}
             </h3>))}
        </>
    )
}

export default Tasks