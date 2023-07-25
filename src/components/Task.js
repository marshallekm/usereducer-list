import React, {useState, useEffect} from 'react'

export default function Task({state, dispatch}){
const [edit, setEdit] = useState(false);
const [editForm, setEditForm] = useState("")
const [setId, setIdThing] = useState(0)
const [showTask, setShowTask] = useState([])


const completeTask = (state) => {
const completeT = state.filter((task) => task.complete === true)
setShowTask(completeT)
}

const activeTask = (state) => {
const activeT = state.filter((task) => task.complete === false)
setShowTask(activeT)
}

const allTasks = (state) => {
  setShowTask(state)
}

  // useEffect(() => {
  //   console.log(showTask);
  // }, [showTask]);


  const handleDelete = (id) => {
     dispatch({type: "DELETE_TASK", payload: id})
  }

  const handleEditTrue = (id) => {
    setEdit(true)
    setIdThing(id)
  }

  const handleSubmit = (id, event) => {
     event.preventDefault()
      dispatch({type: "EDIT_TASK", payload: {id, editForm}})
      setEditForm("")
      setEdit(false)
  }

  const handleEditForm = (event) => {
    setEditForm(event.target.value);
    console.log(event.target.value)
  }


  const handleComplete = (id) => {
    dispatch({type: "HANDLE_COMPLETE", payload: id})
  }

  useEffect(() => {
  console.log('Task component rendered');
  }, []);



  return(
    <div>
      {/* <button onClick={() => completeTask(state)}>Complete</button>

      <button onClick={() => activeTask(state)}>Active</button>

      <button onClick= {() => allTasks(state)}>All</button> */}

      {showTask.map(({id, task, complete})=>
      <div key={id}>
        <h2>{task}
        {task ? (<input
        onClick = {() => handleComplete(id)}
        type="checkbox"
        name= "completed"
        // checked= {complete}
        /> ): null}
        {task ? <button onClick={()=> handleDelete(id)}>Delete</button> : task}
        {task ? <button onClick={() => handleEditTrue(id)}>Edit</button> : task}
        {setId === id ?
          <form onSubmit = {(event) => handleSubmit(id, event)}>
            <input
            onChange ={(event) => handleEditForm(event)}
            input="text"
            name="edit-form"
            value={editForm}
            />
            <button type="submit">Submit</button>
          </form> : null}
      </h2>
      </div>
      )}
    </div>
  )
}
