"use client";

import {useState} from "react";
import {chapter2Story} from "../game/chapter2Story";


export default function Chapter2(){


const [index,setIndex] = useState(-1);


const [trust,setTrust] = useState(0);


const [locked,setLocked] = useState(false);



const scene:any = index === -1 ? null : chapter2Story[index];




function next(){


if(index === -1){

setIndex(0);

return;

}


if(scene.type==="choice") return;



if(index < chapter2Story.length-1){

setIndex(index+1);

}

else{

localStorage.setItem("chapter2Complete","true");

}


}





function choose(choice:any){


if(locked)return;


setLocked(true);


setTrust(trust + choice.trust);


setIndex(index+1);


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



{scene && (

<>


{scene.speaker && (

<h2 className="
text-4xl
text-blue-300
font-bold
mb-8
">

{scene.speaker}

</h2>

)}



<p className="
text-3xl
leading-relaxed
">

{scene.text}

</p>



{

scene.type==="choice" && (

<div

onClick={(e)=>e.stopPropagation()}

className="mt-10 space-y-5"

>


{

scene.choices.map((c:any,i:number)=>(


<button

key={i}

onClick={()=>choose(c)}

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

{String.fromCharCode(65+i)}. {c.text}


</button>


))

}


</div>

)

}


<p className="
mt-8
text-green-400
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