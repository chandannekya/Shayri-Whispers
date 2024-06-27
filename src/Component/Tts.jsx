import React from 'react'

import { AiFillSound } from "react-icons/ai";
import  { useState } from 'react';

const Tts = (props) => {
 let   review=props.review;

 
 

const sound=()=>{

    const val=review.shayari;
   
   const text=new SpeechSynthesisUtterance(val);
   text.lang = "hi-IN";
   text.voiceURI = 'Google हिन्दी';
   window.speechSynthesis.speak(text);
   console.log(val);
   const voices = window.speechSynthesis.getVoices();
  console.log(voices);
}


  return (
    <div>
        <button onClick={sound}><AiFillSound /></button>
    </div>
  )
}

export default Tts