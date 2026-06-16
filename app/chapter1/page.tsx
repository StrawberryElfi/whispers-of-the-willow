"use client";


import {useState} from "react";

import {chapter1Story} from "../game/chapter1Story";



export default function Chapter1(){



const [index,setIndex] = useState(0);


const [playerName,setPlayerName] = useState("");

const [playerTag,setPlayerTag] = useState("");


const [error,setError] = useState("");


const [choiceMade,setChoiceMade] = useState(false);


const [trust,setTrust] = useState(

Number(
typeof window !== "undefined"
?
localStorage.getItem("trust")
:
0
)

);



const [elfariaIntroduced,setElfariaIntroduced] = useState(false);




const scene:any = chapter1Story[index];






function next(){


if(scene.type==="nameInput"){

return;

}


if(scene.type==="choice"){

return;

}




if(

scene.speaker==="Elfaria" ||

scene.speaker==="Elfaria Fleur De Willows"

){

setElfariaIntroduced(true);

}





if(index < chapter1Story.length-1){

setIndex(index+1);

}

else{


window.location.href="/chapter2";


}



}









function confirmName(){



const cleanName = playerName.trim().toLowerCase();



if(cleanName===""){

setError("Please enter a name.");

return;

}



if(cleanName==="elfaria"){

setError(
"This name already belongs to someone in this world."
);

return;

}



if(playerTag.length!==4){

setError(
"Your tag must be exactly 4 numbers."
);

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



localStorage.setItem(
"trust",
"0"
);



setTrust(0);



setIndex(index+1);



}










function choose(choice:any){



if(choiceMade){

return;

}




const newTrust = trust + choice.trust;



setTrust(newTrust);



localStorage.setItem(

"trust",

String(newTrust)

);



setChoiceMade(true);



setIndex(index+1);



}










function speaker(){



if(

(scene.speaker==="Elfaria" ||

scene.speaker==="Elfaria Fleur De Willows")

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









{/* NAME INPUT */}


{

scene.type==="nameInput" && (


<div

onClick={(e)=>e.stopPropagation()}

className="

mt-10

space-y-6

bg-slate-800

p-8

rounded-xl

"


>


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

"


placeholder="Your name (12 characters)"

value={playerName}


onChange={(e)=>{

setPlayerName(

e.target.value.slice(0,12)

);

setError("");

}}



/>



<input


maxLength={4}

className="

bg-white

text-black

text-2xl

p-4

rounded-lg

w-full

"


placeholder="Tag (4 numbers)"

value={playerTag}



onChange={(e)=>{


setPlayerTag(

e.target.value

.replace(/\D/g,"")

.slice(0,4)

);


}}


/>






{

error &&

<p className="text-red-400">

{error}

</p>

}







<button

onClick={(e)=>{

e.stopPropagation();

confirmName();

}}



className="

bg-blue-600

px-8

py-4

rounded-xl

"

>


Confirm


</button>




</div>


)

}









{/* CHOICE SYSTEM */}



{

scene.type==="choice" && (



<div

onClick={(e)=>e.stopPropagation()}

className="mt-10 space-y-5"


>


<h3 className="text-2xl text-purple-300">

{scene.text}

</h3>





{

scene.choices.map((choice:any,i:number)=>(


<button


key={i}



disabled={choiceMade}



onClick={()=>choose(choice)}



className="

block

w-full

bg-blue-600

hover:bg-blue-500

px-6

py-4

rounded-xl

text-xl

disabled:opacity-50

"


>



{String.fromCharCode(65+i)}.

{choice.text}



</button>


))


}



</div>


)


}








<p className="text-green-400 mt-10">

Trust: {trust}

</p>







</div>



</main>


)



}