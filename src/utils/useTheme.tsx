import { useEffect, useState } from "react";

export default function useTheme(){
    const [darkMode,setDarkMode]=useState(false);

    useEffect(()=>{
        document.body.classList.toggle('body-bg')
    },[darkMode])

    function handleModeToggle(){
        setDarkMode(prev=>!prev)
    }
    return{darkMode,handleModeToggle};
}