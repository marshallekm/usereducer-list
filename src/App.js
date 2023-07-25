import './App.css';
import React, {useReducer, useEffect} from 'react'
import Form from './components/Form.js'
import Task from './components/Task.js'
import Title from './components/Title.js'

function App() {
  const INITIAL_STATE = {
   tasks: [
    {task: "",
    id: null,
    complete: false}
   ],
   error: false,
   isLoading: false
  }

  function reducer(state, action){
      // eslint-disable-next-line default-case
      switch (action.type){
        case 'ADD_TASK':
          return {
            tasks: [
              ...state.tasks,
               {id: Date.now(),
               task: action.payload}
            ]
          };
        case 'DELETE_TASK':
          return{
          ...state,
          isLoading: true,
           tasks: state.tasks.filter((task) => task.id !== action.payload)
          };
        case 'EDIT_TASK':
          return{
          tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? {...task, task: action.payload.editForm} : task)
          };
        case 'HANDLE_COMPLETE':
          return {
            ...state,
            tasks:
             state.tasks.map((task) =>
                task.id === action.payload ?
              {...task,
                complete: !task.complete} : task)
          };
          default:
          return state;
      }
  }

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const TITLE_STATE ={
   title: "My title"
  }

  function titleReducer(state, action){
    action.type = 'ADD_TITLE'
      return{
        title: action.payload
      }
  }

  const [stateTitle, dispatchTitle] = useReducer(titleReducer, TITLE_STATE)

  useEffect(() => {
  console.log('Task component rendered');
  }, [state.tasks]);


  return (
    <div className="App">
      <Title stateTitle ={stateTitle} dispatchTitle={dispatchTitle} />
      <Form dispatch={dispatch}/>
      <Task state={state.tasks} dispatch={dispatch}/>
    </div>
  );
}

export default App;
