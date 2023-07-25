import React, {useState} from 'react'

export default function Form({dispatch}){
const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({type: "ADD_TASK", payload: task})
    setTask("")
  }
  return(
    <div>
      <form onSubmit= {handleSubmit} >
        <input
        onChange={handleChange}
        type="text"
        required
        name="form"
        value={task}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  )
}
