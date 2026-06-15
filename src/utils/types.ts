export type TodoType={
    id:string,
    task:string,
    isCompleted:"pending"|"completed",
}

export type HeaderProps={
    tasks:TodoType[],
}

export type AddTaskProps={
    input:string,
    setInput:React.Dispatch<React.SetStateAction<string>>,
    handleAddTask:()=>void,
}

export type DisplayProps={
    tasks:TodoType[],
    handleToggle:(id:string)=>void
    handleDelete:(id:string)=>void
    handleEdit:(id:string)=>void
    filter:'all'|'pending'|'completed',
    setFilter: React.Dispatch<React.SetStateAction<"pending" | "completed" | "all">>
}