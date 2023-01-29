import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const Context = createContext();


export default function ContextProvider({children}) {

    const [tasks,settasks]=useState([
        {id:uuidv4(),nom:'Watch TV'},
        {id:uuidv4(),nom:'Study'},
        {id:uuidv4(),nom:'Eat Lunch'}
      ])

      const [task,setTask]=useState('');

      const addTask=()=>{
        if (task.length==0){
          alert("Give a name to your new task")
        }
        else {
        let ntasks=[...tasks];
        let ntask={};
        ntask.id=uuidv4();
        ntask.nom=task;
        ntasks.push(ntask);
        settasks(ntasks);
        setTask('');
        }
      }
      const deleteTask=(idp)=>{
        let ntasks=tasks.filter((t)=>{return t.id!=idp})
        settasks(ntasks);
      }
      let doneTask=(event)=> {
    
        console.log(event.target.parentNode.parentNode.style="margin:10px;background-color:rgb(38, 228, 0);padding:0px 20px")
      }




  return (

    <Context.Provider value={{tasks, settasks, task, setTask, addTask, deleteTask, doneTask}}>
    {children}
    </ Context.Provider>
  )
}
