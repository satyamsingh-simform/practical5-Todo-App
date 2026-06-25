import { useEffect, useState } from "react";
import type { TodoType } from "./types";

export default function useTodos(input:string, setInput:React.Dispatch<React.SetStateAction<string>>){
    const [tasks, setTask]=useState<TodoType[]>([]);
    const [isLoaded,setIsLoaded]=useState(false);

    useEffect(()=>{
      const savedTasks=localStorage.getItem("tasks")
      if(savedTasks){
        setTask(JSON.parse(savedTasks))
      }

      setIsLoaded(true)
    },[])

    useEffect(()=>{
      if(!isLoaded) return
      localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks,isLoaded])


    function handleAddTask(){
      if(!(input.trim())){
        alert('empty task');
        return;
      }
      const newTask:TodoType={
        id:crypto.randomUUID(),
        task:input,
        isCompleted:'pending',
      }
      setTask((task)=>[newTask,...task])
      setInput('')
    }

    function handleToggle(id:string){
      const updatedTask:TodoType[]=tasks.map(task=>
        task.id===id
          ? {...task, isCompleted:task.isCompleted==='pending'?'completed':'pending'}
          : task
      )
      setTask(updatedTask)
    }

    function handleDelete(id:string){
        const valid=confirm('are you sure you want to delete')
        if(!valid){
            return;
        }
        setTask(tasks.filter(task=>!(task.id===id)))
    }

    function handleEdit(id:string){
      const editableUser=tasks.find((task)=>task.id===id)
      const updateTask=String(prompt('enter updated task',editableUser?.task));
      if(updateTask==="null"){
        return
      };
      if(!(updateTask.trim())) return ;
      setTask(
        tasks.map(task=>
          task.id===id
            ?{  
              ...task,
              task:updateTask
              }
            :task
        )
      )
    }

    return {tasks, handleAddTask, handleToggle, handleDelete, handleEdit};
}