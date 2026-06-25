import type React from "react"
import type { AddTaskProps } from "../utils/types"

export default function AddTask({input,setInput,handleAddTask}:AddTaskProps){

    return(
        <section className="task-section">
            <div className="add-task-input">
                <input className="task-input" type="text" placeholder="add new task ..."
                value={input} 
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setInput(e.currentTarget.value)}} 
                />
                <button className="add-task-btn"
                    onClick={handleAddTask} 
                >add Task</button>
            </div>
        </section>
    )
}