"use client";


import {useEffect,useState} from "react";

import {chapter2Story} from "../game/chapter2Story";



export default function Chapter2(){



const [index,setIndex] = useState(-1);


const [trust,setTrust] = useState(0);



useEffect(()=>{


const savedTrust =

Number(localStorage.getItem("trust")) || 0;


setTrust(savedTrust);



},[]);




const scene:any =

index === -1

?

null

:

chapter2Story[index];






function next(){



if(index === -1){

setIndex(0);

return;

}



if(scene.type === "choice"){

return;

}



if(index < chapter2Story.length - 1){

setIndex(index + 1);

}



}






function choose(choice:any){



const newTrust =

trust + choice.trust;



setTrust(newTrust);



localStorage.setItem(

"trust",

String(newTrust)

);



setIndex(index + 1);



}






function getName(){


return (

localStorage.getItem("playerName")

|| 

"you"

);


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


<div className="

max-w-5xl

text-center

">



{

index === -1 && (


<h1 className="

text-6xl

font-bold

text-blue-300

">

Chapter Two

</h1>


)

}





{

scene && (


<>


<h2 className="

text-4xl

text-blue-300

font-bold

mb-8

">


{

scene.speaker === "PLAYER"

?

getName()

:

scene.speaker


}


</h2>





<p className="

text-3xl

leading-relaxed

">

{

scene.text.replace(

"{name}",

getName()

)

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

px-6

py-4

rounded-xl

text-xl

"

>


{

String.fromCharCode(65+i)

}.

{" "}

{choice.text}


</button>


))


}


</div>


)

}





<p className="

text-green-400

mt-8

">

Trust: {trust}

</p>




</>


)

}



</div>


</main>


)


}