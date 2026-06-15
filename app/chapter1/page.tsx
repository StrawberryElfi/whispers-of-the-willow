"use client";

import {useState} from "react";
import {chapter1Story} from "../game/chapter1Story";


export default function Chapter1(){


const [index,setIndex] = useState(0);


const scene:any = chapter1Story[index];



function next(){


if(index < chapter1Story.length-1){

setIndex(index+1);

}

else{

window.location.href="/chapter2";

}


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



</div>


</main>


)


}