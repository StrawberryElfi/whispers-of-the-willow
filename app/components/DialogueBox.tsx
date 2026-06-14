"use client";

import { useEffect, useState } from "react";


type DialogueProps = {

  speaker?: string;

  text: string;

  sceneType: "dialogue" | "narration" | "thought";

  onNext: () => void;

};



export default function DialogueBox({

  speaker,

  text,

  sceneType,

  onNext

}: DialogueProps) {



const [display,setDisplay] = useState("");

const [finished,setFinished] = useState(false);






useEffect(()=>{


setDisplay("");

setFinished(false);


let count = 0;



const timer = setInterval(()=>{


count++;


setDisplay(text.slice(0,count));



if(count >= text.length){


clearInterval(timer);

setFinished(true);


}



},35);



return()=>clearInterval(timer);



},[text]);








function handleClick(){



if(!finished){


setDisplay(text);

setFinished(true);


return;


}



onNext();



}







return(



<div

onClick={handleClick}

className="fixed inset-0 flex items-center justify-center cursor-pointer"

>



<div

className="w-full max-w-4xl px-10 py-8 bg-slate-950/80 rounded-xl"

>



{speaker && (


<h2 className="text-4xl font-bold text-blue-300 mb-6">


{speaker}


</h2>


)}







<p


className={

sceneType==="thought"

?

"text-purple-300 italic text-3xl leading-relaxed"

:

sceneType==="narration"

?

"text-slate-300 italic text-3xl leading-relaxed"

:

"text-white text-3xl leading-relaxed"


}


>


{display}


</p>







<p className="text-slate-500 mt-8 text-lg">


Click anywhere to continue


</p>





</div>





</div>


)



}