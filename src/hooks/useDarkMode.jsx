import React,{useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export default function useDarkMode(initialValue){
    const [darkMode, setDarkMode ] = useLocalStorage('dark-mode',initialValue)

    
   useEffect(()=>{
    if(darkMode){
        document.body.classList.add('dark-mode')
    }else{
        document.body.classList.remove('dark-mode')
    }
    
   },[darkMode])
   return [darkMode,setDarkMode]
    
}