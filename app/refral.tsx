"use client"
import { useEffect,useState } from "react"
export default function Refral(){
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let [result,setResult] = useState('');
    let r = ""
  useEffect(()=>{
    if(localStorage.getItem("refral")){
        setResult(localStorage.getItem("refral")!)
    }else{
        for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        r += chars[randomIndex];
    }
    setResult(r)
    localStorage.setItem("refral",r)
    }
  })
  return(
    <>{result}</>
  )
}