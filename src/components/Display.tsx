import { Pencil, Square, CheckSquare, Trash2 } from 'lucide-react';
import type { DisplayProps } from '../utils/types';



export default function Display({tasks,handleToggle,handleDelete,handleEdit}:DisplayProps){
    
    return(
        <section className="display-task">
            <div>
                <ul className="task-ul">
                    {tasks.map((task)=>(
                        <li key={task.id} className="each-task">
                            <article className="each-task-article">
                                <div className="div-checkbox">
                                    <button 
                                    onClick={()=>{handleToggle(task.id)}}
                                    >
                                    {task.isCompleted==='completed'?(
                                        <CheckSquare color="green"/>
                                    ):(<Square color="gray"/>
                                    )}
                                    </button> 
                                    <span 
                                        style={{
                                            textDecoration:
                                              task.isCompleted === "completed"
                                                ? "line-through"
                                                : "none",
                                            opacity:
                                              task.isCompleted === "completed"
                                                ? 0.6
                                                : 1,
                                        }}
                                    >
                                    {task.task}
                                    </span>
                                </div>
                                <div className="div-edit-del">
                                    <span
                                      className={
                                        task.isCompleted === "completed"
                                          ? "completed"
                                          : "pending"
                                      }
                                    >
                                      {task.isCompleted}
                                    </span>
                                  
                                    <button
                                      onClick={() => handleEdit(task.id)}
                                    >
                                      <Pencil
                                        size={20}
                                        color="gray"
                                      />
                                    </button>
                                  
                                    <button
                                      onClick={() => handleDelete(task.id)}
                                    >
                                      <Trash2
                                        size={20}
                                        color="red"
                                      />
                                    </button>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}