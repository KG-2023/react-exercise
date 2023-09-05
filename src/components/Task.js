
import { FaTimesCircle} from 'react-icons/fa';


const Task = ({task}) => {
  return (
    <div className="task">
       
        <h3>
       
          {task.text}
          <FaTimesCircle style={{color: 'red', cursor: 'pointer'}}/>
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

/*
import React from "react";

const tasksData = [
  {
    id: 1,
    text: "Study react event handlers",
    day: "Sept 4, 2023",
    reminder: true,
  },
  {
    id: 2,
    text: "Study react states",
    day: "Sept 4, 2023",
    reminder: true,
  },
  {
    id: 3,
    text: "Buy grocery items",
    day: "Sept 4, 2023",
    reminder: false,
  },
];

const Tasks = () => {
  return (
    <>
      {tasksData.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

*/
export default Task