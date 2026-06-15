"use client";


import {useState} from "react";

import {chapter1Story} from "../game/chapter1Story";



export default function Chapter1(){



const [index,setIndex] = useState(0);


const [playerName,setPlayerName] = useState("");

const [playerTag,setPlayerTag] = useState("");


const [error,setError] = useState("");



const [elfariaIntroduced,setElfariaIntroduced] = useState(false);





const scene:any = chapter1Story[index];







function next(){



if(scene.type === "nameInput"){

return;

}





if(

scene.speaker === "Elfaria" ||

scene.speaker === "Elfaria Fleur De Willows"

){

setElfariaIntroduced(true);

}





if(index < chapter1Story.length - 1){

setIndex(index + 1);

}

else{


window.location.href="/chapter2";


}



}







function confirmName(){



const cleanName = playerName.trim().toLowerCase();




if(cleanName === ""){

setError("Please enter a name.");

return;

}





if(cleanName === "elfaria"){

setError("This name already belongs to someone in this world.");

return;

}





if(playerTag.length !== 4){

setError("Your tag must be exactly 4 numbers.");

return;

}





localStorage.setItem(

"playerName",

playerName.trim()

);



localStorage.setItem(

"playerTag",

playerTag

);





if(!localStorage.getItem("trust")){

localStorage.setItem(

"trust",

"0"

);

}





setIndex(index + 1);



}







function speaker(){



if(

(scene.speaker === "Elfaria" ||

scene.speaker === "Elfaria Fleur De Willows")

&&

!elfariaIntroduced

){


return "???";


}



if(scene.speaker==="PLAYER"){


return playerName;


}



return scene.speaker;



}







function text(){



return scene.text.replace(

"{name}",

playerName || "you"

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



<div

className="

max-w-5xl

text-center

"


>





{

scene.speaker && (


<h2

className="

text-4xl

font-bold

text-blue-300

mb-8

"


>

{speaker()}

</h2>



)

}








<p

className="

text-3xl

leading-relaxed

"


>

{text()}

</p>









{

scene.type === "nameInput" && (



<div


onClick={(e)=>e.stopPropagation()}



className="

mt-10

space-y-6

bg-slate-800

p-8

rounded-xl

border

border-slate-600

"


>



<h3

className="

text-2xl

text-white

"


>

Enter your name

</h3>







<input


autoFocus


maxLength={12}



className="

bg-white

text-black

text-2xl

p-4

rounded-lg

w-full

border-2

border-blue-400

"


placeholder="Your name (12 characters max)"



value={playerName}



onChange={(e)=>{

setPlayerName(

e.target.value.slice(0,12)

);

setError("");

}}



/>





<p className="text-slate-300">

{playerName.length}/12 characters

</p>








<input



maxLength={4}



className="

bg-white

text-black

text-2xl

p-4

rounded-lg

w-full

border-2

border-purple-400

"


placeholder="Tag (4 numbers only)"



value={playerTag}



onChange={(e)=>{


setPlayerTag(

e.target.value

.replace(/\D/g,"")

.slice(0,4)

);


setError("");

}}



/>





<p className="text-slate-300">

{playerTag.length}/4 numbers

</p>






{

error && (


<p className="text-red-400 text-xl">

{error}

</p>


)

}









<button


onClick={(e)=>{


e.stopPropagation();


confirmName();


}}



disabled={!playerName || playerTag.length !== 4}



className="

bg-blue-600

px-8

py-4

rounded-xl

text-xl

disabled:opacity-50

"


>


Confirm



</button>





</div>



)



}







</div>






</main>



)



}