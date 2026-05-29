import React, { useState } from "react"
import { Pencil } from 'lucide-react';
import { Square } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import type { TodoType } from "./utils/types";



export default function App(){
    const [input, setInput]=useState<string>('');    
    const [tasks, setTask]=useState<TodoType[]>([]);
    
    function handleAddTask(){
        const newTask:TodoType={
            id:crypto.randomUUID(),
            task:input,
            isCompleted:'pending',
        }
        setTask([...tasks,newTask]);
    }

    return(
        <>
            <div className="container">
                <section className="task-section">
                    <input className="task-input" type="text" placeholder="add new task ..."
                        value={input} 
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setInput(e.currentTarget.value)}} 
                    />
                    <button className="add-task-btn"
                        onClick={handleAddTask} 
                    >add Task</button>
                </section>
                
                <section className="display-task">
                    <div>
                        <ul className="task-ul">
                            {tasks.map((task)=>
                                <li className="each-task">
                                    <article className="each-task-article">
                                        <div className="div-checkbox">
                                            <button className="btn-checkbox"><Square color="gray"/></button>
                                            <span>{task.task}</span>
                                        </div>
                                        <div className="div-edit-del">
                                            <span className="pending">{task.isCompleted}</span>
                                            <button className="btn-edit"><Pencil size={20} color="gray"/></button>
                                            <button className="btn-delete"><Trash2 size={20} color="red"/></button>
                                        </div>
                                    </article>
                                </li>
                            )}
                        </ul>
                    </div>
                </section>
                
            </div>
        </>
    )
}