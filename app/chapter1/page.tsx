"use client";

import {useState} from "react";
import {chapter1Story} from "../game/chapter1Story";


export default function Chapter1(){


const [index,setIndex] = useState(0);


const [trust,setTrust] = useState(0);


const [choiceMade,setChoiceMade] = useState(false);



const [playerName,setPlayerName] = useState("Traveler");



const scene:any = chapter1Story[index];



function next(){


if(scene.type === "choice"){

return;

}



if(index < chapter1Story.length - 1){

setIndex(index + 1);

}

else{


window.location.href="/chapter2";


}


}





function choose(choice:any){


if(choiceMade){

return;

}



setChoiceMade(true);



setTrust(trust + choice.trust);



setIndex(index + 1);



}





return(


<main


onClick={next}


className="

min-h-screen

bg-slate-950

text-white

flex

items-center

justify-center

p-10

cursor-pointer

"


>


<div

className="

max-w-5xl

text-center

"

>




{scene.speaker && (


<h2


className="

text-4xl

text-blue-300

font-bold

mb-8

"


>


{


scene.speaker === "player"

?

playerName

:

scene.speaker


}



</h2>


)}




<p


className={


scene.type === "thought"


?


"text-3xl italic text-purple-300 leading-relaxed"


:


scene.type === "narration"


?


"text-3xl italic text-slate-300 leading-relaxed"


:


"text-3xl leading-relaxed"


}


>


{


scene.type === "dialogue"


||


scene.type === "thought"


?


`"${scene.text}"`


:


scene.text



}


</p>





{


scene.type === "choice" && (



<div


onClick={(e)=>e.stopPropagation()}


className="

mt-10

space-y-5

"


>


{


scene.choices.map((choice:any,i:number)=>(


<button


key={i}


onClick={()=>choose(choice)}


className="

block

w-full

bg-blue-600

hover:bg-blue-700

px-6

py-4

rounded-xl

text-xl

"


>


{String.fromCharCode(65+i)}. {choice.text}



</button>



))


}



</div>



)



}






<p


className="

mt-8

text-green-400

"


>


Trust: {trust}



</p>



</div>



</main>



)


}