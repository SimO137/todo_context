import React, { useContext } from 'react'
import { Context } from './ContextFolder/Context';

import Task from './Task'

export default function ListeDo() {

  const {tasks, settasks, task, setTask, addTask, deleteTask, doneTask} = useContext(Context);

  
  return (
    <div>
      <h1>Tasks To Do</h1>
        <form>
            <input type="text" id='adb2' value={task} 
                   onChange={(e)=>{setTask(e.target.value)}} />    
                   <input type="button" id='adb' onClick={addTask} value=" ➕ Add" />
        </form>
        <br></br>
        <ul>
          {
            tasks.map((t)=>{
              return <li key={t.id}><Task delf={()=>deleteTask(t.id)} donef={doneTask} txt={t.nom}/></li>
            })
          }
        </ul>
    </div>
  )
}
