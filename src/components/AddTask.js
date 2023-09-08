import { useState } from 'react';


const AddTask = () => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);



    return (
    <form className="add-form">
         <div className="form-control ">
            <label className="form-label">
                Task
            </label>
            <input type="text" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)}/>
         </div>
         <div className="form-control ">
            <label className="form-label">
                Day & Time
            </label>
            <input type="text" placeholder="Add Task" value={day} onChange={(e)=>setDay(e.target.value)}/>
         </div>
         <div className="form-control ">
            <label className="form-label--check">
                Set Reminder
            </label>
            <input type="checkbox" checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
         </div>
         <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask