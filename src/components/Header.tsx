import type { HeaderProps } from "../utils/types";

export default function Header({tasks}:HeaderProps){
    return(
            <header className="todo-heading">
                <h1>ToDo-App</h1>
                <button className="task-count">
                    <p className="task-num">
                        {tasks.filter(task=>task.isCompleted==="completed").length}/{tasks.length}
                    </p>
                    success
                </button>
            </header>
    )
}