import { useState } from "react"
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Display from "./components/Display";
import useTodos from "./utils/useTodos";

export default function App(){
    const [input, setInput]=useState<string>('');
    const [filter,setFilter]=useState<'all'|'pending'|'completed'>('all');    
    const { tasks, handleAddTask, handleToggle, handleDelete, handleEdit} = useTodos(input,setInput);

    return(
        <div>
            <div className="container">
                <Header tasks={tasks}/>
                <AddTask input={input} setInput={setInput} handleAddTask={handleAddTask} />
                <Display tasks={tasks} handleToggle={handleToggle} handleDelete={handleDelete} handleEdit={handleEdit} filter={filter} setFilter={setFilter}  />
            </div>
        </div>
    )
}
