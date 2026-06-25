import { useEffect, useState } from "react";

export default function useTheme(){
    const [darkMode,setDarkMode]=useState(false);

    useEffect(()=>{
        if(darkMode){
            document.body.classList.add("body-bg");
        } 
        else {
            document.body.classList.remove("body-bg");
        }
    }, [darkMode]);

    function handleModeToggle(){
        setDarkMode(prev=>!prev)
    }
    return{darkMode,handleModeToggle};
}