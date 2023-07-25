import React, {useState} from 'react'

export default function Title({stateTitle, dispatchTitle}){

const [editTitle, setEditTitle] = useState(false);
const [newTitle, setNewTitle] = useState('');

  const handleTitle = () => {
    setEditTitle(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
      dispatchTitle({type: 'ADD_TITLE', payload: newTitle})
      setNewTitle("")
      setEditTitle(false)
  }

  const handleEditTitle = (event) => {
    setNewTitle(event.target.value)
    console.log(event.target.value)
  }

  const handleFakeEdit = () => {
    setEditTitle(false)
  }

  return (
    <div>
    <h1>{stateTitle.title}</h1>
    <button onClick={handleTitle}>Edit</button>
    {editTitle ?
      <form onSubmit = {handleSubmit}>
        <input
        type="text"
        name="title-name"
        value= {newTitle}
        onChange = {(event) => handleEditTitle(event)}
        />
        <button type = {handleSubmit}>Submit</button>
        <button onClick={handleFakeEdit}>X</button>
      </form>
    : null}
    </div>
  )
}
