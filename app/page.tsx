
'use client';

import { useState } from "react";

export default function App(){
  const[advice, setAdvice]=useState("");
  async function getadvice() {
    const res= await fetch('http://api.adviceslip.com/advice');
    const data= await res.json();
    setAdvice(data.slip.advice);
    
  }
  return(
    <div>
      <h1>{advice}</h1>
    <button  onClick={getadvice}>Get advice</button>
    </div>
  );


}