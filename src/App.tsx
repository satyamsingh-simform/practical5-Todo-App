import React, { useState } from "react"

export default function App(){
    const [input, setInput]=useState<string>('');    
    const [task, setTask]=useState([]);
    
    function handleAddTask(){
        console.log(input);

        setTask([...task,input]);
        console.log(task);

        
        
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
                        <ul>
                            <li><div>{task.map((task)=>task)}</div></li>
                        </ul>
                    </div>
                </section>
                
            </div>
        </>
    )
}