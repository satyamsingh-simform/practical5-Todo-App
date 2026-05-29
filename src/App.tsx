import { useEffect, useState } from "react"
import type { TodoType } from "./utils/types";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Display from "./components/Display";

export default function App(){
    const [input, setInput]=useState<string>('');    
    const [tasks, setTask]=useState<TodoType[]>([]);
    const [isLoaded,setIsLoaded]=useState(false)

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
        if(!input.trim()){
            alert('empty task');
            return;
        }
        const newTask:TodoType={
            id:crypto.randomUUID(),
            task:input,
            isCompleted:'pending',
        }
        setTask([...tasks,newTask]);
        setInput('');
    }

    function handleToggle(id:string){
        setTask(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isCompleted:
                task.isCompleted === "pending"
                  ? "completed"
                  : "pending",
            }
          : task
      )
    )
    }

    function handleDelete(id: string){
        const valid=confirm('are you sure you want to delete')
        if(!valid){
            return;
        }
        setTask(tasks.filter((task) => task.id !== id));
    }

    function handleEdit(id: string){
      const updatedTask = prompt("Enter updated task");
      if (!updatedTask?.trim())return;

      setTask(
        tasks.map((task)=>
          task.id === id
            ? {
                ...task,
                task: updatedTask,
              }
            : task
        )
      );
    }

    return(
        <>
            <div className="container">
                <Header tasks={tasks}/>
                <AddTask input={input} setInput={setInput} handleAddTask={handleAddTask}/>
                <Display tasks={tasks} handleToggle={handleToggle} handleDelete={handleDelete} handleEdit={handleEdit}  />
            </div>
        </>
    )
}