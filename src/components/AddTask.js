const AddTask = () => {
  return (
    <form className="add-form">
         <div className="form-control ">
            <label className="form-label">
                Task
            </label>
            <input type="text" placeholder="Add Task"/>
         </div>
         <div className="form-control ">
            <label className="form-label">
                Day & Time
            </label>
            <input type="text" placeholder="Add Task"/>
         </div>
         <div className="form-control ">
            <label className="form-label--check">
                Set Reminder
            </label>
            <input type="checkbox" placeholder="Add Task"/>
         </div>
         <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask